import React from 'react';
import './App.css';
import Main from './components/Main';

function App() {
  const response = {
    allCurrentNews: [
      {
        name: 'Now in Mass Media',
        content: [
          {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga.', icon:'', href:'#'},
          {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga.', icon:'', href:'#'},
          {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga.', icon:'', href:'#'},
          {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga.', icon:'', href:'#'},
          {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fuga.', icon:'', href:'#'}
        ]
      },
      {
        name: 'in Germany',
        content: []
      },
      {
        name: 'Our recommendation',
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
        name: 'col_widget col_1',
        conten: []
      },
      {
        id: 2,
        name: 'col_widget col_2',
        conten: []
      },
      {
        id: 3,
        name: 'col_widget col_3',
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
