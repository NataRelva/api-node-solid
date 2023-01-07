import { Request, Response, NextFunction } from 'express';
// import { verify } from 'jsonwebtoken';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

function EnsureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {}

export default EnsureAuthentication;
