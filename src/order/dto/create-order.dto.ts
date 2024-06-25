import { PaymentMethod } from "src/common/enums/payment-method.entity";
import { IsNumber ,IsNotEmpty,IsArray,ArrayMinSize,ValidateNested} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
 

export class CreateOrderDto {
    @ApiProperty({ description: 'array of id for products' })
    @IsNotEmpty()
    @IsArray()  
    @ArrayMinSize(1)
    @IsNumber()
    @ValidateNested({ each: true })
    ProductInventoryId:number[];

     @ApiProperty({ description: 'array of id for quantity' })
     @IsNotEmpty()
     @IsArray()  
     @ArrayMinSize(1)
     @IsNumber()
    @ValidateNested({ each: true })
    quantity:number[] ;

     @ApiProperty()
     @IsNotEmpty()
     paymentMethod:PaymentMethod ;

}
