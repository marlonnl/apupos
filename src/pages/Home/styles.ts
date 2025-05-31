import styled from 'styled-components'
import { color } from '../../styles/colors'

export const MainContainer = styled.div`
  width: 800px;
  background-color: ${color.bgContent};
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
`

export const Content = styled.div`
  padding: 16px 24px;
  width: 100%;

  h2 {
    color: ${color.text};
    font-size: 18px;
    font-weight: normal;
  }
`

export const Sidebar = styled.div`
  background-color: ${color.bgSidebar};
  border-left: 1px solid ${color.textReaminingChr};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 30%;
  padding: 8px;
`
