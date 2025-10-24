import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateOrderDTO {
  @IsUUID()
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsUUID()
  @IsNotEmpty()
  @IsString()
  clientId: string;
}
