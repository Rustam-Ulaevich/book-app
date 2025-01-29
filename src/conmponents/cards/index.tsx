// import { v1 } from "uuid"
import { Card } from "../card"
import './style.css'
import { useState } from "react"

type CardType = {
  id: string
  title: string
  status: number
}


export const Cards = () => {

let [arrCard, setArrCard] = useState<Array<CardType>>(
  [{id: Math.random().toString(), title: 'Преступление и наказание', status: 9 },]
)

function addCard(){
  setArrCard([...arrCard, {id: Math.random().toString(), title: 'Новая книга', status: 0 }])
}

// сделать card 

  return <div className="cards">
    
    {arrCard.map( i => <Card/>)}

    <button className="cards__btn" onClick={() => addCard()}>Добавить книгу!</button>    

  </div>
}