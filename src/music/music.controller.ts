import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Req } from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MusicService } from './music.service';
import { MusicDto } from '../dto/music/music.dto';

@ApiTags('music')
@Controller('music')
@ApiProduces('application/json')
@ApiConsumes('application/json')
export class MusicController {
    /**
     * @name public constructor
     * @param { MusicService } service
     */
    constructor(private readonly service: MusicService) { }

    @HttpCode(HttpStatus.OK)
    @Get()
    findAll(): MusicDto[] {
        // MusicDto[] car retourne un tableau
        return this.service.findAll();
    }

    @HttpCode(HttpStatus.OK)
    @Get(':id')
    findById(@Param('id') id: string): MusicDto {
        return this.service.findById(id);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body() music: MusicDto) {
        return this.service.create(music);
    }

    @HttpCode(HttpStatus.OK)
    @Patch()
    update(@Param('id') id: string, @Body() music: MusicDto) {
        return this.service.update(id, music);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteById(@Param('id') id: string) {
        return this.service.deleteById(id);
    }
}