import { IsString, IsNumber } from "class-validator";

export class VideoDto {
    @IsNumber()
    readonly id?: number;

    @IsString()
    readonly title: string;

    @IsString()
    readonly realisator: string;

    @IsString()
    readonly release: string;
}