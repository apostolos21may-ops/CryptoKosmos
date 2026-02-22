const crypto = require("crypto");

function base64urlToString(b64url) {
  const b64 = b64url.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((b64url.length + 3) % 4);
  return Buffer.from(b64, "base64").toString("utf8");
}

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
    const { email, code, challenge } = JSON.parse(event.body || "{}");
    if (!email || !code || !challenge) {
      return { statusCode: 400, body: JSON.stringify({ ok: false, error: "Missing fields" }) };
    }

    const SECRET = process.env.CK_OTP_SECRET;
    if (!SECRET) return { statusCode: 500, body: JSON.stringify({ ok: false, error: "Missing secret" }) };

    const parts = String(challenge).split(".");
    if (parts.length !== 2) return { statusCode: 400, body: JSON.stringify({ ok: false, error: "Bad challenge" }) };

    const [payload, sig] = parts;
    const expectedSig = hmac(SECRET, payload);
    if (sig !== expectedSig) {
      return { statusCode: 401, body: JSON.stringify({ ok: false, error: "Invalid signature" }) };
    }

    const payloadObj = JSON.parse(base64urlToString(payload));
    if (payloadObj.email !== email) {
      return { statusCode: 401, body: JSON.stringify({ ok: false, error: "Email mismatch" }) };
    }

    if (Date.now() > payloadObj.exp) {
      return { statusCode: 401, body: JSON.stringify({ ok: false, error: "Code expired" }) };
    }

    const codeHash = sha256(`${email}:${String(code).trim()}:${SECRET}`);
    if (codeHash !== payloadObj.codeHash) {
      return { statusCode: 401, body: JSON.stringify({ ok: false, error: "Wrong code" }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: "Server error" }) };
  }
};