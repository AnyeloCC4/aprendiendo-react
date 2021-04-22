import logo from '../logo.svg'

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <img src={logo} alt="Logo"/>
      <a href="#">Home</a>
      <a href="#">Blog</a>
      <a href="#">About</a>
    </nav>
  </header>

)

export default Header;