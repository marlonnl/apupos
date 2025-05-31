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

export const Compose = styled.div`
  margin-bottom: 16px;

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    color: ${color.textReaminingChr};
    font-weight: bold;
    font-size: 20px;
  }

  textarea {
    margin: 8px 0;
    padding: 4px;
    width: 100%;
    resize: none;
    border: 1px solid ${color.textReaminingChr};
    border-radius: 4px;
    outline: none;
    overflow: auto;
    font-size: 14px;
    height: 56px;
  }

  button {
    padding: 2px 8px;
    margin-left: auto;
    margin-right: 0;
  }
`
