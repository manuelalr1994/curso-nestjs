import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'lema50411',
      database: 'db_nestjs',
      entities: [User],
      synchronize: true,
    }),
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
