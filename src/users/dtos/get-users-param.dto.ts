import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetUsersParamDto {
  @ApiPropertyOptional({
    description: 'Get a user with a specific id',
    example: 1235,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
