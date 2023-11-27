import { config } from 'dotenv'
import { MoviesEntity } from './src/movies/entities/movie.entity'
import { UsersEntity } from './src/users/entities/user.entity'
import { DataSource, DataSourceOptions } from 'typeorm'

config()

export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [MoviesEntity, UsersEntity],
    migrations: [__dirname + '/migrations/*.{js,ts}']
})
