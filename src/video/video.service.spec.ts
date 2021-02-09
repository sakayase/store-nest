import { Test, TestingModule } from '@nestjs/testing';
import { VideoDto } from 'src/dto/video/video.dto';
import { VideoService } from './video.service';

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoService],
    }).compile();

    service = module.get<VideoService>(VideoService);
  });

  it('should return all videos', () => {
    expect(service.findAll().length).toBe(3);
  });

  it('should return the video which has the id 2', () => {
    expect(service.findById('2').title).toBe('The Dig');
  })

  describe('create a new video and delete it', () => {
    
    it('should create a music', () =>{
      //Given 
  
      // When
      service.create(<VideoDto>{ title: 'test', realisator: 'mr test', release: 'x/x/x' });
  
      // Then
      expect(service.findAll().length).toBe(4);
      expect(service.findById('4').title).toBe('test');
    });

    it('should delete a music', () => {
      // Given

      // When 
      service.deleteById('3');

      // Then
      expect(service.findAll().length).toBe(2);
    })
  })
});
