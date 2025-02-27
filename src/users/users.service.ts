import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { SignupInput } from 'src/auth/dto/inputs/signup.input';

@Injectable()
export class UsersService {
  private logger = new Logger('UsersService');
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  create(signupInput: SignupInput): Promise<User> {
    try {
      const newUser = this.usersRepository.create(
        {...signupInput, password: bcrypt.hashSync(signupInput.password, 10)},
      );
      return this.usersRepository.save(newUser);
    } catch (error) {
      this.handleDBError(error);
    }
  }

  findAll(): Promise<User[]> {
    return [{}];
  }

  findOne(id: string): Promise<User> {
    return throw new Error('Method not implemented.');
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  block(id: string) {
    return `This action removes a #${id} user`;
  }

  private handleDBError(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }

    this.logger.error(error);
    throw new InternalServerErrorException('Please check server logs');
  }
}
