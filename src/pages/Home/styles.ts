import styled from 'styled-components'
import { color } from '../../styles/colors'

export const MainContainer = styled.div`
  width: 800px;
  background-color: ${color.bgContent};
  border-radius: 8px;

  display: flex;
  justify-content: space-between;

  &::before {
    content: '▲';
    color: ${color.bgContent};
    font-size: 22px;
    margin-top: -20px;
    margin-left: 40px;
    left: auto;
    position: absolute;
  }
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
