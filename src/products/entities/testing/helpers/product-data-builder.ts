import { ProductProps } from '../../product.entity'
import { faker } from '@faker-js/faker'

/* eslint-disable prettier/prettier */
type Props = {
    description?: string
    name?: string
    createdAt?: Date
}

export function ProductDataBuilder(props: Props): ProductProps {
    return {
        description: props.description ?? faker.person.jobDescriptor(),
        name: props.name ?? faker.internet.displayName(),
        createdAt: props.createdAt ?? new Date()
    }
}
