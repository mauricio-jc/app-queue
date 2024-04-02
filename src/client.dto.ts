import { IsNotEmpty, IsString, Length } from 'class-validator';

export class ClientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(11, 14)
  document: string;
}
