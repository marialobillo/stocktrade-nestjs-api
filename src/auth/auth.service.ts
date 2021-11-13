import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private UsersRepository: UsersRepository
  ) {}


  async signUp()
}
