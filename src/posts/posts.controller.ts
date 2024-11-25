import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdatePostDto } from './dtos/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.getPosts(userId);
  }
  /**
   * Create post endpoit
   * @param createPostDto
   */
  @ApiOperation({
    summary: 'Creates a new blog post',
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your post is created successfully',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    this.postsService.createPost(createPostDto);
  }

  /**
   * Update post endpoint
   * @param updatePostDto
   */
  @ApiOperation({
    summary: 'Update an existing blog post',
  })
  @ApiResponse({
    status: 200,
    description: 'You get a 200 response if your post is updated successfully',
  })
  @Patch()
  public updatePost(@Body() updatePostDto: UpdatePostDto) {
    this.postsService.updatePost(updatePostDto);
  }
}
