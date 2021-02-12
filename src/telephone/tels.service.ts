import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Telephone } from './tel.schema';
import { TelephoneDto } from '../dto/telephone/tel.dto';
import { ITelephone } from './tel.interface';

@Injectable()
export class TelephonesService {
  constructor(@InjectModel(Telephone.name) private telephoneModel: Model<Telephone>) {}

  async create(TelephoneDto: TelephoneDto): Promise<ITelephone> {
    const createdTel = new this.telephoneModel(TelephoneDto);
    return createdTel.save();
  }

  async findAll(): Promise<ITelephone[]> {
    return this.telephoneModel.find().exec();
  }
}