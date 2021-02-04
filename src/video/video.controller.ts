import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiConsumes, ApiProduces, ApiTags } from '@nestjs/swagger';
import { registerDecorator } from 'class-validator';
import { VideoDto } from 'src/dto/video/video.dto';
import { VideoService } from './video.service';

@ApiTags('video')
@Controller('video')
@ApiProduces('application/json')
@ApiConsumes('application/json')
export class VideoController {

    /**
     * @name public constructor
     * @param { MusicService } service
     */
    constructor(private readonly service: VideoService) { }

    @HttpCode(HttpStatus.OK)
    @Get()
    findAll(): VideoDto[] {
        return this.service.findAll();
    }

    @HttpCode(HttpStatus.OK)
    @Get(':id')
    findById(@Param('id') id: string): VideoDto {
        return this.service.findById(id)
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body() video: VideoDto) {
        return this.service.create(video);
    }

    @HttpCode(HttpStatus.OK)
    @Patch(':idUrl')
    update(@Param('idUrl') idUrl: string, @Body() video: VideoDto) {
        return this.service.update(idUrl, video);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteById(@Param('id') id: string) {
        return this.service.deleteById(id);
    }
}
