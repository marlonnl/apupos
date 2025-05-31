import styled from 'styled-components'
import { color } from '../../styles/colors'

export const HeaderStyle = styled.header`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: bold;
  }
`

export const HeaderMenu = styled.div`
  background-color: ${color.bgMenu};
  font-size: 12px;
  padding: 8px 12px;
  border-radius: 8px;

  ul {
    display: flex;
    gap: 8px;
  }

  a {
    color: ${color.textSecondary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`
