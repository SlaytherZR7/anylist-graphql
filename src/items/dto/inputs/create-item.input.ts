import { InputType, Field, Float } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsOptional,
} from 'class-validator';

@InputType()
export class CreateItemInput {
  @Field(() => String, { description: 'Item name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => Float, { description: 'Item quantity' })
  @IsPositive()
  @IsNumber()
  quantity: number;

  @Field(() => String, { description: 'Item quantity units', nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  quantityUnits?: string;
}
