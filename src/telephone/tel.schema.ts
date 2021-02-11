
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TelephoneDocument = Telephone & Document;

@Schema()
export class Telephone {
    @Prop()
    name: string;

    @Prop()
    brand: string;

    @Prop()
    price: number;

    @Prop()
    quantity: number;

    @Prop()
    os: string;

    @Prop([String])
    equipments: string[];
}

export const TelephoneSchema = SchemaFactory.createForClass(Telephone);
