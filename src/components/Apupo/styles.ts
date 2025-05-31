import styled from 'styled-components'
import { color } from '../../styles/colors'

export const ApupoContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`

// export const Avatar = styled.img`
export const Avatar = styled.div`
  min-width: 48px;
  height: 48px;
  margin-right: 8px;
  background-color: ${color.textReaminingChr};
`

export const ApupoContent = styled.div`
  color: ${color.text};

  a {
    color: ${color.textSecondary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

export const ApupoText = styled.p`
  display: inline;
  font-size: 14px;
  margin-left: 6px;
  /* line-height: 4px; */
`

export const Username = styled.h3`
  color: ${color.textSecondary};
  font-weight: bold;
  font-size: 14px;
  display: inline;
`

export const Details = styled.p`
  color: ${color.textComment};
  font-size: 10px;
  margin-top: 2px;
`
