import { Roles } from './roles.enum';

export interface JwtPayload {
  username: string;
  role: Roles;
}
