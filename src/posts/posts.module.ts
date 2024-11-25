import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './providers/posts.service';
import { UsersModule } from '@users/users.module';

@Module({
  imports: [UsersModule],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
