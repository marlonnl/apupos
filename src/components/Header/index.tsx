import { HeaderMenu, HeaderStyle } from './styles'

const Header = () => {
  return (
    <>
      <div className="container">
        <HeaderStyle>
          <h1>apupos</h1>
          <HeaderMenu>
            <ul>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">profile</a>
              </li>
              <li>
                <a href="">settings</a>
              </li>
              <li>
                <a href="">sing out</a>
              </li>
            </ul>
          </HeaderMenu>
        </HeaderStyle>
      </div>
    </>
  )
}

export default Header
