import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateItemInput {
  @Field(() => String, { description: 'Item name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => String, { description: 'Item quantity units', nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  quantityUnits?: string;
}
