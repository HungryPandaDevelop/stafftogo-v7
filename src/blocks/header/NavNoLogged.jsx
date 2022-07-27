import { Link, useLocation, } from 'react-router-dom';

const NavNoLogged = () => {
  const location = useLocation();

  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <>
      <div className="cell-stub col-3 col-lg-1"></div>
      <nav className="nav col-4">
        <ul>
          <li><Link className={(pathMathRoute('/') ? 'active' : '')} to="/">Главная</Link></li>
          <li><Link className={(pathMathRoute('/authorization') ? 'active' : '')} to="/authorization">Войти</Link></li>
          <li><Link className={(pathMathRoute('/registration') ? 'active' : '')} to="/registration">Регистрация</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default NavNoLogged