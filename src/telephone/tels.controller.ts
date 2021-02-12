import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiConsumes, ApiProduces, ApiTags } from '@nestjs/swagger';
import { registerDecorator } from 'class-validator';
import { TelephoneDto } from 'src/dto/telephone/tel.dto';
import { Telephone } from './tel.schema';
import { TelephonesService } from './tels.service';
import { ITelephone } from './tel.interface';

@ApiTags('telephone')
@Controller('telephone')
@ApiProduces('application/json')
@ApiConsumes('application/json')
export class TelephonesController {

    /**
     * @name public constructor
     * @param { TelephonesService } service
     */
    constructor(private readonly service: TelephonesService) { }

    @HttpCode(HttpStatus.OK)
    @Get()
    findAll(): Promise<ITelephone[]> {
        return this.service.findAll();
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body() telephone: TelephoneDto) {
        return this.service.create(telephone);
    }
}
