import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateOrderDTO {
  @IsUUID()
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsUUID()
  @IsNotEmpty()
  @IsString()
  clientId: string;
}
