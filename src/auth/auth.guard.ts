import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express'
import { UserPayLoad } from './auth.service'
import { JwtService } from '@nestjs/jwt';

export interface RequestUser extends Request {
  user: UserPayLoad
}

@Injectable()
export class Guard implements CanActivate {
  
  constructor(private jwtService: JwtService) {}

  private getToken(req: Request): string | undefined {
    const [type, token] = req.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }
  
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<RequestUser>()
    const token = this.getToken(req)

    if (!token) {
      throw new UnauthorizedException('Authentication error!')
    }

    try {
      const payload: UserPayLoad = await this.jwtService.verifyAsync(token)
      req.user = payload
    } catch (err) {
      console.error(err)
      throw new UnauthorizedException('Invalid JWT')
    }

    return true;
  }

  
}
