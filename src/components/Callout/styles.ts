import styled from 'styled-components'
import { color } from '../../styles/colors'

export const CalloutBox = styled.div`
  margin: 16px 10px;
  padding: 6px 12px;
  font-size: 10px;

  background-color: ${color.bgSidebarSecondary};
  border-radius: 8px;
`

export const CalloutTitle = styled.p`
  font-size: 12px;
  color: ${color.textSecondary};
  font-weight: bold;
  margin-bottom: 4px;
  letter-spacing: 2px;
`
