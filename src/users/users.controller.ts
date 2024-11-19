import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(
    @Param() param: GetUsersParamDto,
    @Query('limit', ParseIntPipe, new DefaultValuePipe(10)) limit: number,
    @Query('page', ParseIntPipe, new DefaultValuePipe(1)) page: number,
  ) {
    console.log(param);

    return 'user by id';
  }
  @Post()
  public postUser(@Body() user: CreateUserDto) {
    console.log(user);
    return 'create user';
  }
  @Put()
  public putUser() {
    return 'put user';
  }
  @Patch()
  public patchUser(@Body() user: PatchUserDto) {
    console.log(user);

    return 'patch user';
  }
  @Delete()
  public deleteUser() {
    return 'delete user';
  }
}
