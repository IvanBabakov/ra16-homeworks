import React from 'react';
import './App.css';
import Main from './components/Main';

function App() {
  const response = {
    allCurrentNews: [
      {
        name: 'Now in Mass Media',
        href: '#',
        content: [
          {id: 1, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga.', img: {href: '#', alt: 'icon'}, href:'#'},
          {id: 2, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga.', img: {href: '#', alt: 'icon'}, href:'#'},
          {id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga.', img: {href: '#', alt: 'icon'}, href:'#'},
          {id: 4, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga.', img: {href: '#', alt: 'icon'}, href:'#'},
          {id: 5, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga.', img: {href: '#', alt: 'icon'}, href:'#'}
        ]
      },
      {
        name: 'in Germany',
        href: '#',
        content: []
      },
      {
        name: 'Our recommendation',
        href: '#',
        content: []
      }
    ],
    navLinks: [
      {
        href: 'https://github.com/',
        name: 'Видео'
      },
      {
        href: 'https://github.com/',
        name: 'Картинки'
      },
      {
        href: 'https://github.com/',
        name: 'Карты'
      },
      {
        href: 'https://github.com/',
        name: 'Маркет'
      }
    ],
    allWidgets: [
      {
        id: 1,
        name: 'Погода',
        conten: []
      },
      {
        id: 2,
        name: 'Посещаемое',
        conten: []
      },
      {
        id: 3,
        name: 'Карта Германии',
        conten: []
      },
      {
        id: 4,
        name: 'Телепрограмма',
        conten: []
      },
      {
        id: 5,
        name: 'Эфир',
        conten: []
      }        
    ],
    banner: {
      content: []
    }
  }
  
  return (
    <div className="App">
      <Main data={response}/>
    </div>
  );
}

export default App;
