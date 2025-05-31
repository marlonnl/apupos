import Callout from '../Callout'
import {
  MiniAvatar,
  SideContainer,
  SideMenu,
  SideMenuItem,
  StatsBar,
  UserBar
} from './styles'

export type Props = {
  active?: boolean
}

const Sidebar = ({ active = false }: Props) => {
  return (
    <>
      <SideContainer>
        <UserBar>
          <MiniAvatar />
          <div>
            <h3>UserName</h3>
            <p>2,564 apupos</p>
          </div>
        </UserBar>
        <StatsBar>
          <div>
            <p>266</p>
            <span>seguindo</span>
          </div>
          <div>
            <p>1,032</p>
            <span>seguidores</span>
          </div>
          <div>
            <p>4,222</p>
            <span>favoritos</span>
          </div>
        </StatsBar>

        <Callout />

        <SideMenu>
          <ul>
            <SideMenuItem active={true}>
              <a href="">Home</a>
            </SideMenuItem>
            <SideMenuItem>
              <a href="">@UserName</a>
            </SideMenuItem>
            <SideMenuItem>
              <a href="">Direct Messages</a>
              <p>177</p>
            </SideMenuItem>
            <SideMenuItem>
              <a href="">Favorites</a>
            </SideMenuItem>
          </ul>
        </SideMenu>
      </SideContainer>
    </>
  )
}

export default Sidebar
