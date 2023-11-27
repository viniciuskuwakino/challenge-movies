import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'movies' })
export class MoviesEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ name: 'name', length: 50, nullable: false })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
