import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Telephone, TelephoneDocument } from './tel.schema';
import { TelephoneDto } from '../dto/telephone/tel.dto';

@Injectable()
export class TelephonesService {
  constructor(@InjectModel(Telephone.name) private telephoneModel: Model<TelephoneDocument>) {}

  async create(TelephoneDto: TelephoneDto): Promise<Telephone> {
    const createdTel = new this.telephoneModel(TelephoneDto);
    return createdTel.save();
  }

  async findAll(): Promise<Telephone[]> {
    return this.telephoneModel.find().exec();
  }
}