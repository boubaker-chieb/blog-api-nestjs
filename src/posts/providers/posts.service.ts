import { Injectable } from '@nestjs/common';
import { UsersService } from '@users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}
  getPosts(userId: string) {
    const user = this.usersService.findOneById(userId);
    if (!user) {
      throw new Error('user not found');
    }
    return [
      {
        user: user,
        title: 'title',
        content: 'content',
      },
      {
        user: user,
        title: 'title',
        content: 'content',
      },
    ];
  }
}
