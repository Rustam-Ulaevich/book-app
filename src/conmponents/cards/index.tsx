// import { v1 } from "uuid"
import { Card } from "../card"
import { Form } from "../form"
import './style.css'
import { useState } from "react"

type CardType = {
  id: string
  title: string
  status: number
}
type PropsType = {
  click: ()=>void
}

export const Cards = (props: PropsType) => {

let [arrCard, setArrCard] = useState<Array<CardType>>(
  [{
    id: Math.random().toString(), 
    title: 'Преступление и наказание', 
    status: 9 
  },]
)

let [showContent, setShowContent] = useState(false)
  
  function onClick(){
    setShowContent(!showContent)
  }

function addCard(){
  setArrCard([...arrCard, 
    {id: Math.random().toString(), title: 'Новая книга', status: 0 }  ])

}


  return <div className="container">

      <div className="content">

        { !showContent && arrCard.map( i => <Card click={props.click}/>) }

        { showContent && <Form />}

      </div>

      <button className="button" onClick={() => onClick()}>Добавить книгу!</button>

    </div>


   
}