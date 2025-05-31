import styled from 'styled-components'
import { color } from '../../styles/colors'

export const ComposeContainer = styled.div`
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
