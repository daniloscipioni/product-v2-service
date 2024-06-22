/* eslint-disable prettier/prettier */
import { ProductEntity, ProductProps } from '../../product.entity'
import { ProductDataBuilder } from '../../testing/helpers/product-data-builder'

describe('ProductEntity integration tests', () => {
    describe('constructor method', () => {
        it('Should throw an error when creating a product with invalid name ', () => {
            const props: ProductProps = {
                ...ProductDataBuilder({}),
                name: null,
            }
            expect(() => new ProductEntity(props)).toThrowError(Error)
        })
    })
})
