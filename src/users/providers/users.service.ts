import { AuthService } from '@auth/providers/auth.service';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '@users/dtos/get-users-param.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  /**
   * Find all users
   * @param param
   * @param limit
   * @param page
   * @returns
   */
  public findAll(param: GetUsersParamDto, limit: number, page: number) {
    const isAuth = this.authService.isAuth();
    if (!isAuth) {
      throw new Error('The user is not athenticated');
    }
    return [
      {
        firstName: 'test1',
        lastName: 'test1',
      },
      {
        firstName: 'test2',
        lastName: 'test2',
      },
    ];
  }
  public findOneById(id: string) {
    return {
      id: 125,
      firstName: 'boubaker',
      lastName: 'chieb',
    };
  }
}
