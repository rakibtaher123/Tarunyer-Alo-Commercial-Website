import { SignJWT, jwtVerify } from "jose";

export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET || "default_super_secret_tarunyer_alo_2026";
  return new TextEncoder().encode(secret);
};

export async function signToken(payload) {
  try {
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(getJwtSecretKey());
    return token;
  } catch (error) {
    throw new Error("Could not sign token");
  }
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return payload;
  } catch (error) {
    return null; // Return null if verification fails
  }
}
