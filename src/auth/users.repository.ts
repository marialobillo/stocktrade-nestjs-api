import { User } from './user.entity';
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {

  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { username, password } = authCredentialsDto;

    const user = this.create({ username, password });

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