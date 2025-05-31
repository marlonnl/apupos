import { MiniAvatar, SideContainer, StatsBar, UserBar } from './styles'

const Sidebar = () => {
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
      </SideContainer>
    </>
  )
}

export default Sidebar
