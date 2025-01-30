import React, { useState } from 'react';
import { Cards } from './conmponents/cards';
import { Header } from './conmponents/header';
import { Right } from './conmponents/right';
// import book from './../images/book.jpg'

export type BookType = {
  title: string
  discription: string
  rating: number
  // image: object
}

let book: BookType = {
  title: 'Преступление и наказание',
  discription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur et temporibus beatae, velit sunt laboriosam provident debitis quibusdam nemo dolorem eius ipsam incidunt, in, asperiores enim? Aut cum id tempora? Est obcaecati itaque nihil vero optio nam doloremque tenetur assumenda, vel hic nesciunt quasi quis eaque ipsa ratione consequatur recusandae asperiores iure molestiae quam fuga voluptatibus? Rem consequuntur nihil vero.Voluptatum dignissimos nesciunt, libero impedit delectus mollitia asperiores possimus. Explicabo debitis atque voluptatibus qui error impedit laboriosam, a autem cum, aut incidunt inventore! Alias perferendis exercitationem quas similique assumenda unde.',
  rating: 9,
  // image: {book}
}

function App() {

  let [showContent, setShowContent] = useState(false)

  function onClick(){
    setShowContent(!showContent)
  }

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Cards click={onClick}/>
        <Right book={book} show={showContent}/>
      </div>
      

    </div>
  );
}

export default App;
