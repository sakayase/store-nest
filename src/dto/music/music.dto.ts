import { IsString, IsNumber, IsOptional } from "class-validator";

export class MusicDto {
    @IsOptional()
    @IsNumber()
    readonly id?: number; //le ? car IsOptionnal()

    @IsString()
    readonly title: string;

    @IsString()
    readonly singer: string;

    @IsString({ each:true })
    readonly platform: string[];
}