import { Injectable, PipeTransform } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashPassword implements PipeTransform {
  constructor(private configService: ConfigService) {}

  async transform(password: string) {
    const salt = this.configService.get('SALT_PASSWORD');

    return await bcrypt.hash(password, salt);
  }
}
