import ApuposList from '../../components/ApuposList'
import { Separator } from '../../components/Separator'
import { Compose, Content, MainContainer, Sidebar } from './styles'

const Home = () => {
  return (
    <div className="container">
      <MainContainer>
        <Content>
          <Compose>
            <div>
              <h2>O que está acontecendo?</h2>
              <span>140</span>
            </div>
            <textarea></textarea>
            <div>
              <button>apupar</button>
            </div>
          </Compose>
          <h2>Home</h2>
          <Separator />
          <ApuposList />
        </Content>
        <Sidebar>
          <p>a</p>
        </Sidebar>
      </MainContainer>
    </div>
  )
}

export default Home
