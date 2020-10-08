import React from 'react';
import CardOne from './components/CardOne';
import CardTwo from './components/CardTwo';
import Card from './components/Card';

function App() {
  const itemsOne = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id accusamus voluptatem nam autem excepturi dolores totam quisquam.',
    title: 'Hello, React!',
    style: {width: '18rem'},
    img: 'https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe',
    link: 'google.com'
  }

  const itemsTow = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quidem. Sequi harum atque alias placeat hic pariatur quis voluptas, perferendis quibusdam est aliquam dolor quidem ea deserunt culpa maxime assumenda!',
    title: 'Special Offer',
    style: {width: '18rem'},
    link: 'google.com'
  }

  return (
    <div className="App">
      <Card link={itemsOne} text={itemsOne.text} title={itemsOne.title} style={itemsOne.style}>
        <img src={itemsOne.img} className="card-img-top" alt="React-logo" />
      </Card>
      <Card link={itemsTow.link} text={itemsTow.text} title={itemsTow.title} style={itemsTow.style} />
    </div>
  );
}

export default App;
