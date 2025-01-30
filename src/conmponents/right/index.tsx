import { BookType } from '../../App'
import './style.css'
import imgBook from './../../images/book.jpg'

type PropsType = {
  book: BookType
  show: boolean
}


export const Right = (props: PropsType) => {

  return <div className="main">

    { props.show && (
      <>
        <img className='main_img' src={imgBook} alt="Book" />

		      <div className="discription">

			      <h3 className='main_title'>{props.book.title}</h3>
      
			      <p>{props.book.discription}</p>

            <p>Оценка читателей: {props.book.rating} из 10 </p>
			
		      </div> 
      </>
    )}

      

  </div>
}