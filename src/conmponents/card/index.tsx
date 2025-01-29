import './style.css'
import book from './../../images/book.jpg'

export const Card = () => {
  return <div className="card">
		<img className='card-img' src={book} alt="" />
		<div className="discription">
			<h3 className='title'>Имя книги</h3>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
			<p> 9 из 10</p>
			<button className='btn' onClick={()=>{}}>Открыть</button>
		</div>

        
  </div>
}