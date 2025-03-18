import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SeedService {
  private isProd: boolean;
  constructor(private readonly configService: ConfigService) {
    this.isProd = this.configService.get('STATE') === 'prod';
  }
  async seed(): Promise<boolean> {
    if (this.isProd) {
      throw new UnauthorizedException(
        'You are not allowed to seed in production',
      );
    }

    return true;
  }
}
