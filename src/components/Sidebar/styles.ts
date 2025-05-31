import styled from 'styled-components'
import { color } from '../../styles/colors'

import { Props } from '.'

export const SideContainer = styled.div`
  background-color: ${color.bgSidebar};
  border-left: 1px solid ${color.textReaminingChr};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 30%;
  /* padding: 10px; */
  font-size: 14px;
  color: ${color.text};
`

export const UserBar = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 12px;
  padding: 10px 10px 0 10px;

  div {
    h3 {
      font-size: 14px;
    }
    p {
      margin-top: 2px;
      font-size: 10px;
    }
  }
`

// export const MiniAvatar = styled.img`
export const MiniAvatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${color.textComment};
  margin-right: 8px;
`

export const StatsBar = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 10px;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    font-weight: bold;
  }

  span {
    font-size: 10px;
    color: ${color.textSecondary};
  }
`

export const SideMenu = styled.div`
  color: ${color.textSecondary};
  /* padding: 0 10px; */
  font-size: 12px;
`

export const SideMenuItem = styled.li<Props>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) =>
    props.active === true ? color.bgSidebarSecondary : ''};

  a,
  p {
    padding: 6px 0;
    margin: 0 10px;

    font-weight: ${(props) => (props.active === true ? 'bold' : 'normal')};
    color: ${(props) => (props.active === true ? color.text : '')};
  }

  a:hover {
    text-decoration: ${(props) =>
      props.active === true ? 'none' : 'underline'};
  }

  p {
    font-weight: bold;
  }

  &:hover {
    background-color: ${color.bgSidebarSecondary};
  }
`
