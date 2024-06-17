/* eslint-disable prettier/prettier */
import { ProductEntity, ProductProps } from '../product.entity'
import { ProductDataBuilder } from '../testing/helpers/product-data-builder'

describe('ProductEntity unit tests', () => {
    let props: ProductProps
    let sut: ProductEntity

    beforeEach(() => {
        ProductEntity.validate = jest.fn()
        props = ProductDataBuilder({})
        sut = new ProductEntity(props)
    })

    it('Constructor Method', () => {
        expect(ProductEntity.validate).toHaveBeenCalled()
        expect(sut.props.name).toEqual(props.name)
        expect(sut.props.description).toEqual(props.description)
        expect(sut.props.createdAt).toBeInstanceOf(Date)
    });
})
