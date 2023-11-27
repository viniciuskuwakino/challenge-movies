import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({ 
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('SECRET_JWT'),
          signOptions: { expiresIn: '24h' }
        }
      },
      inject: [ConfigService],
      global: true,
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
