import { User } from './user.entity';
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {

  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { username, password } = authCredentialsDto;

    // hash
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ username, password: hashedPassword });

    try{
      await this.save(user);
    } catch(error){
      if(error.code === '23505'){
        // deplicate username
        throw new ConflictException('Username already exist.');
      } else {
        throw new InternalServerErrorException();
      }
      console.log(error.code);
    }
   

    return user;
  }
}