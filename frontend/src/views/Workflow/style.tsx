import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  color: white;
`

export const Title = styled.div`
  font-size: 20px;
  margin-left: 1rem;
  margin-bottom: 1rem;
`

export const WorkflowContainer = styled.div`
  border-left: solid 1px rgb(55, 55, 55);
  padding: 1rem;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const WorkflowListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: solid 1px rgb(50, 50, 50);

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`

export const HeaderText = styled.div`
  font-size: 14px;
`

export const WorkflowItem = styled.div`
  position: relative;
  padding: 1rem 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px rgb(50, 50, 50);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const WorkflowItemTitle = styled.div`
  font-size: 15px;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`

export const DateText = styled.div`
  color: rgb(135, 135, 135);
`
