import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  padding: 1rem;
  color: white;
  background-image: linear-gradient(to right, rgb(55, 55, 55), rgb(34, 34, 34));
`

export const Title = styled.div`
  margin-left: 1rem;
  font-size: 20px;
  margin-bottom: 1rem;
`

export const OrderItem = styled.div<{ selected?: boolean }>`
  border-radius: 16px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) => (props.selected ? 'rgb(71, 71, 71)' : '')};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.selected ? '' : 'rgb(60, 60, 60)')};
  }
`
