import { Sort } from 'types/types'

import { Container, Title, OrderItem } from './style'

interface FilterProps {
  sort: Sort
  setSort: (sort: Sort) => void
}

const Filter = ({ sort, setSort }: FilterProps) => {
  return (
    <Container>
      <Title color='red'>Order</Title>
      <OrderItem selected={sort === 'asc'} onClick={() => setSort('asc')}>
        A-Z
      </OrderItem>
      <OrderItem selected={sort === 'desc'} onClick={() => setSort('desc')}>
        Z-A
      </OrderItem>
    </Container>
  )
}

export default Filter
