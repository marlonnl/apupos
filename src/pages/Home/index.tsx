import { Compose, Content, MainContainer, Sidebar } from './styles'

const Home = () => {
  return (
    <div className="container">
      <MainContainer>
        <Content>
          <Compose>
            <h2>O que está acontecendo?</h2>
            <span>140</span>
          </Compose>
        </Content>
        <Sidebar>
          <p>a</p>
        </Sidebar>
      </MainContainer>
    </div>
  )
}

export default Home
