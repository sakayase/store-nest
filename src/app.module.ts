import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicController } from './music/music.controller';
import { MusicModule } from './music/music.module';
import { MusicService } from './music/music.service';
import { VideoController } from './video/video.controller';
import { VideoModule } from './video/video.module';
import { VideoService } from './video/video.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TelephonesController } from './telephone/tels.controller';
import { TelephonesService } from './telephone/tels.service';
import { TelephonesModule } from './telephone/tels.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(`mongodb://${process.env.MONGODB_IP}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME}`),
    MusicModule, VideoModule, TelephonesModule ],
  controllers: [AppController, MusicController, VideoController ],
  providers: [AppService, MusicService, VideoService ],
})
export class AppModule { }
// 