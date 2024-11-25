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
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/:id?')
  @ApiOperation({
    summary: 'Fetches the list of registred users on the app',
    description: 'Get the list of users',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    example: '10',
    description: 'The number of entries returned by a query',
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    example: '1',
    description: 'Page number',
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
  })
  public getUsers(
    @Param() param: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(param, limit, page);
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
