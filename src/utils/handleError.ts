import { Response } from "express";

const handleHttpError = (
  res: Response,
  message = "Algo sucedió",
  code = 403
) => {
  res.status(code);
  res.send({ errors: message });
};

export default handleHttpError;
