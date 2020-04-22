import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/User';
import { UsersModule } from './users/users.module';
import { Room } from './models/Room';
import { RoomsModule } from './rooms/rooms.module';
import { MulterModule } from '@nestjs/platform-express'
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MeetingsModule } from './meeting/meeting.module';
import { Meeting } from './models/Meeting';
import { Token } from './models/Token';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '217.182.72.53',
      username: 'daryn',
      password: 'Ya4icAKi',
      database: 'darynDB',
      entities: [User, Room, Meeting, Token],
      synchronize: true
    }),
    UsersModule,
    RoomsModule,
    MeetingsModule,
    MulterModule.register({
      dest:'./uploads'
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads')
    }),


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
