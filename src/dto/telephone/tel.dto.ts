import { IsString, IsNumber, IsOptional } from "class-validator";

export class TelephoneDto {
    @IsOptional()
    @IsNumber()
    readonly id?: number; //le ? car IsOptionnal()

    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;

    @IsNumber()
    readonly price: number;

    @IsNumber()
    readonly quantity: number;

    @IsString()
    readonly os: string

    @IsString({ each:true })
    readonly equipments: string[];
}