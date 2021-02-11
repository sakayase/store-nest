import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TelephonesController } from './tels.controller';
import { TelephonesService } from './tels.service';
import { Telephone, TelephoneSchema } from './tel.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Telephone.name, schema: TelephoneSchema }])],
  controllers: [TelephonesController],
  providers: [TelephonesService],
})
export class TelephonesModule {}