import { Injectable, NotFoundException } from '@nestjs/common';
import { VideoDto } from 'src/dto/video/video.dto';

@Injectable()
export class VideoService {
    private videos: VideoDto[] = [
        {
            id: 1,
            title: 'Tenet',
            realisator: 'Christopher Nolan',
            release: '01/08/2020',
        },
        {
            id: 2,
            title: 'The Dig',
            realisator: 'Simon Stone',
            release: '14/01/2021',
        },
        {
            id: 3,
            title: 'Will Hunting',
            realisator: 'Gus Van Sant',
            release: '04/03/1998',
        },
    ];

    /**
     * @name public contructor
     */
    constructor() { }

    findAll(): VideoDto[] {
        if (!this.videos){
            throw new NotFoundException('Videos not found');
        }   
        return this.videos
        
    }

    findById(id: string) {
        const result = this.videos.find(video => video.id === +id);

        if (!result) {
            throw new NotFoundException('Video not found');
        }

        return result;
    }

    create(video: VideoDto): void {
        const videos: VideoDto[] = this.findAll();
        this.videos.push({ id: videos.length + 1, ...video });
    }

    update(idUrl: string, video: VideoDto): void {
        const result: VideoDto = this.findById(idUrl);
        if (!result) {
            throw new NotFoundException('Video not found');
        }
        
        this.videos.splice(+idUrl-1, 1, {id: +idUrl, ...video});
    }

    deleteById(id: string): void {
        const result: VideoDto = this.findById(id);
        if (!result) {
            throw new NotFoundException('Video not found');
        }

        this.videos.splice(+id-1, 1);
    }
}
