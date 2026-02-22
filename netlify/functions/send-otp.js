
const crypto = require("crypto");

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function hmac(secret, msg) {
  return base64url(crypto.createHmac("sha256", secret).update(msg).digest());
}

function sha256(msg) {
  return base64url(crypto.createHash("sha256").update(msg).digest());
}

exports.handler = async (event) => {
  try {
    const { email } = JSON.parse(event.body || "{}");
    if (!email || !String(email).includes("@")) {
      return { statusCode: 400, body: JSON.stringify({ error: "Invalid email" }) };
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const SECRET = process.env.CK_OTP_SECRET;

    if (!RESEND_API_KEY || !SECRET) {
      return { statusCode: 500, body: JSON.stringify({ error: "Missing env vars" }) };
    }

    // 6-digit code
    const code = String(Math.floor(100000 + Math.random() * 900000));

    // expires in 10 minutes
    const exp = Date.now() + 10 * 60 * 1000;

    // server keeps no state: store only hash in payload
    const codeHash = sha256(`${email}:${code}:${SECRET}`);

    const payloadObj = { v: 1, email, exp, codeHash };
    const payload = base64url(JSON.stringify(payloadObj));
    const sig = hmac(SECRET, payload);
    const challenge = `${payload}.${sig}`;

    // Send email via Resend
    const subject = "Your CryptoKosmos verification code";
    const text = `Your verification code is: ${code}\n\nThis code expires in 10 minutes.`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "CryptoKosmos <onboarding@resend.dev>",
        to: email,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return { statusCode: 502, body: JSON.stringify({ error: "Email send failed", details: errText }) };
    }

    // return challenge to client (NOT the code)
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, challenge }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: "Server error" }) };
  }
};