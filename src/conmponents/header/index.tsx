import './style.css'
import logo from '../../images/Logo.jpg'


export const Header = () => {

  return (
    <div className="header">

      <img src={logo} alt="Logo" width={100}/>

      <h1>Тестовое от Никиты</h1>

      <button className="btn-cards">Сменить тему</button>

    </div>
  )
}
