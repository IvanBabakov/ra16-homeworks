import React from 'react';
import './App.css';
import Main from './components/Main';

function App() {
  const response = {
    currentNews: [
      {
          name: 'widget_1',
          content: [
              {
                  icon: 'H',
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex animi laboriosam cum adipisci nam commodi distinctio, voluptates dolorum fuga.',
                  link: 'google.com'
              }
          ]
      },
      {
          name: 'widget_2',
          content: [
              {
                  icon: 'IMG',
                  text: 'Different Add'
              }
          ]
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
  ]
  }
  
  return (
    <div className="App">
      <Main data={response}/>
    </div>
  );
}

export default App;
