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
  width: 600px;

  h2 {
    color: ${color.text};
    font-size: 18px;
    font-weight: normal;
  }
`

export const Sidebar = styled.div`
  background-color: ${color.bgSidebar};
  width: 200px;
`

export const Compose = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${color.textReaminingChr};
    font-weight: bold;
  }
`
