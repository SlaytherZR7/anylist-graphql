import { Injectable } from '@nestjs/common';
import { SignupInput } from './dto/inputs/signup.input';
import { AuthResponse } from './types/auth-response.type';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  async signup(signupInput: SignupInput): Promise<AuthResponse> {
    const user = await this.usersService.create(signupInput);
    const token = 'abx123';
    return { user, token };
  }

  login() {
    throw new Error('Method not implemented.');
  }

  revalidateToken() {
    throw new Error('Method not implemented.');
  }
}
