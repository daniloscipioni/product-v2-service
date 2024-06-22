/* eslint-disable prettier/prettier */
import { Entity } from '../../shared/infrasctructure/env-config/domain/entities/entity'
import { ProductValidatorFactory } from './validators/products.validator'

export type ProductProps = {
    description: string
    name: string
    createdAt: Date
}

export class ProductEntity extends Entity<ProductProps> {
    constructor(
        public readonly props: ProductProps,
        id?: string,
    ) {
        ProductEntity.validate(props)
        super(props, id)
        this.props.createdAt = this.props.createdAt ?? new Date()
    }

    update(value: string): void {
        ProductEntity.validate({ ...this.props, name: value })
        this.name = value
    }

    get name() {
        return this.props.name
    }

    private set name(value: string) {
        this.props.name = value
    }

    get description() {
        return this.props.description
    }

    get createdAt() {
        return this.props.createdAt
    }

    static validate(props: ProductProps) {
        const validator = ProductValidatorFactory.create()
        const isValid = validator.validate(props)
        if (!isValid) {
            throw new Error(validator.errors.toString())
        }
    }
}
