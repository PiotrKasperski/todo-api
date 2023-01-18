import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users = new Array<User>();
  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length,
      name: createUserDto.name,
      password: createUserDto.password,
    };
    this.users.push(newUser);
    return newUser.id;
  }
  login(createUserDto: CreateUserDto) {
    this.users.forEach((user) => {
      if (
        user.name === createUserDto.name &&
        user.password === createUserDto.password
      )
        return true;
    });
    return false;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
