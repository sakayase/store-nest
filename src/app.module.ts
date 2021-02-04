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

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MusicModule, VideoModule],
  controllers: [AppController, MusicController, VideoController],
  providers: [AppService, MusicService, VideoService],
})
export class AppModule {}
