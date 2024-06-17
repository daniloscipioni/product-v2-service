/* eslint-disable prettier/prettier */
import {
    IsDate,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
} from 'class-validator'
import { ProductProps } from '../product.entity'

import { ClassValidatorFields } from '../../../shared/infrasctructure/env-config/domain/entities/validators/class-validator-fields'


export class ProductRules {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    Description: string

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    Name: string

    @IsDate()
    @IsOptional()
    CreatedAt: Date

    constructor({ name, description, createdAt }: ProductProps) {
        Object.assign(this, { name, description, createdAt })
    }
}

export class ProductValidator extends ClassValidatorFields<ProductRules> {
    validate(data: ProductProps): boolean {
        return super.validate(new ProductRules(data ?? ({} as ProductProps)))
    }
}

export class ProductValidatorFactory {
    static create(): ProductValidator {
        return new ProductValidator()
    }
}
