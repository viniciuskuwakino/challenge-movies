import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MoviesEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MoviesEntity)
    private readonly moviesRepository: Repository<MoviesEntity>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const movie = this.moviesRepository.create(createMovieDto);
    this.moviesRepository.save(movie);
  }

  async findAll() {
    return await this.moviesRepository.find();
  }

  async findOne(id: string) {
    return await this.moviesRepository.findOneByOrFail({ id });
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    await this.moviesRepository.update(id, updateMovieDto);
  }

  async remove(id: string) {
    await this.moviesRepository.delete(id);
  }
}
