import { Document } from 'mongoose';

export interface ITelephone extends Document {
    readonly name: string;
    readonly brand: string;
    readonly price: number;
    readonly quantity: number;
    readonly os: string;
    readonly equipments: string[];
  }
  