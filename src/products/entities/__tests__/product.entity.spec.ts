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
  })

  it('Getter of name field', () => {
    expect(sut.name).toBeDefined()
    expect(sut.name).toEqual(props.name)
    expect(typeof sut.name).toBe('string')
  })

  it('Setter of name field', () => {
    sut['name'] = 'other name'
    expect(sut.props.name).toEqual('other name')
    expect(typeof sut.props.name).toBe('string')
  })

  it('Getter of description field', () => {
    expect(sut.description).toBeDefined()
    expect(sut.description).toEqual(props.description)
    expect(typeof sut.description).toBe('string')
  })

  it('Getter of createdAt field', () => {
    expect(sut.createdAt).toBeDefined()
    expect(sut.createdAt).toBeInstanceOf(Date)
  })

  it('Should update a product name', () => {
    sut.update('other name')
    expect(ProductEntity.validate).toHaveBeenCalled()
    expect(sut.props.name).toEqual('other name')
  })
})
