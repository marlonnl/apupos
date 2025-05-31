import ApuposList from '../../components/ApuposList'
import Compose from '../../components/Compose'
import { Separator } from '../../components/Separator'
import Sidebar from '../../components/Sidebar'
import { Content, MainContainer } from './styles'

const Home = () => {
  return (
    <div className="container">
      <MainContainer>
        <Content>
          <Compose />
          <h2>Home</h2>
          <Separator />
          <ApuposList />
        </Content>
        <Sidebar />
      </MainContainer>
    </div>
  )
}

export default Home
