import './style.css'
import book from './../../images/book.jpg'
import { useState } from 'react'

type PropsType = {
	
}

export const Form = (props: PropsType) => {

  return (

		<div className="form">

			<form>
      	<label>Имя книги:
        	<input type="text" />
      	</label>

				<label>Опсание книги:
        	<textarea name="" id=""></textarea>
      	</label>
				
				<label>Оценка:
        	<select name="" id="">
						<option value="1">1</option>
  					<option value="2">2</option>
  					<option value="3">3</option>
  					<option value="4">4</option>
  					<option value="5">5</option>
  					<option value="6">6</option>
					</select>
      	</label>


    	</form>

        
  </div>
  )
  
}