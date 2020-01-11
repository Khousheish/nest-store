import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { JwtPayload } from '@Auth/jwt-payload.interface';
import { User } from '@Auth/user.entity';

import { AuthCredentialsDto } from '../dtos/auth-credentials.dto';
import { UserRepository } from '../user.repository';

@Injectable()
export class AuthService {
  private readonly logger: Logger = new Logger('AuthService');

  public constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {
  }

  public async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string; }> {
    const user: User = await this.userRepository.validateUserPassword(authCredentialsDto);

    if (!user.username) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const payload: JwtPayload = {
      username: user.username,
      role: user.role,
    };
    const accessToken: string = this.jwtService.sign(payload);

    this.logger.debug(`Generated JWT Token with payload ${JSON.stringify(payload)}`);

    return { accessToken };
  }

  public static async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return UserRepository.signUp(authCredentialsDto);
  }
}
