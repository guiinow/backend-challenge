import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Repository, Connection} from 'typeorm'
import { PostsEntity } from './entities/post.entity' 


@Injectable()
export class PostsService {
  private _postsRepository: Repository<PostsEntity>
  constructor(private _connection: Connection){
    this._postsRepository = this._connection_getRepository(PostsEntity)
  }

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
