import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '@posts/dtos/create-post.dto';
import { UpdatePostDto } from '@posts/dtos/update-post.dto';
import { UsersService } from '@users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}
  public getPosts(userId: string) {
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
  public createPost(createPostDto: CreatePostDto) {}
  public updatePost(updatePost: UpdatePostDto) {}
}
