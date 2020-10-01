import React from 'react';
import CardOne from './components/CardOne';
import CardTwo from './components/CardTwo';
import Card from './components/Card';

function App() {
  const itemsOne = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id accusamus voluptatem nam autem excepturi dolores totam quisquam.',
    title: 'Hello, React!',
    style: {width: '18rem'}
  }

  const itemsTow = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quidem. Sequi harum atque alias placeat hic pariatur quis voluptas, perferendis quibusdam est aliquam dolor quidem ea deserunt culpa maxime assumenda!',
    title: 'Special Offer',
    style: {width: '18rem'}
  }

  return (
    <div className="App">
      <CardOne style={itemsOne.style}>
        <img src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe" className="card-img-top" alt="React-logo" />
        <Card text={itemsOne.text} title={itemsOne.title}/>
      </CardOne>
      <br />
      <CardTwo style={itemsTow.style}>
        <Card text={itemsTow.text} title={itemsTow.title}/>
      </CardTwo>
    </div>
  );
}

export default App;
