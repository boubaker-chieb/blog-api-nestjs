import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class PatchUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsInt()
  id: number;
}
