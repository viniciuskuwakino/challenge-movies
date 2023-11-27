import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

export interface UserPayLoad {
  sub: string
  userName: string
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findEmail(email)

    const authenticatedUser = await bcrypt.compare(password, user.password)

    if (!authenticatedUser) {
      throw new UnauthorizedException('Incorrect email or password!')
    }

    const payload: UserPayLoad = {
      sub: user.id,
      userName: user.name
    }

    return {
      access_token: await this.jwtService.signAsync(payload)
    }

  }
}
