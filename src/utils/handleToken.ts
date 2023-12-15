import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "secret_key";

export const tokenSign = async (user: any) => {
  const sign = await jwt.sign(
    {
      _id: user._id,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );

  return sign;
};

export const verifyToken = async (
  tokenJwt: any
): Promise<JwtPayload | null> => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET) as JwtPayload;
  } catch (error) {
    return null;
  }
};
