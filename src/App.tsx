import React from 'react';
import './App.css';
import Dropdown from "./components/Dropdawn/Dropdown";



function App() {

    let items = ['Red', 'Blue', 'Yellow', 'Green']
    let defaultTitle = 'Color'

  return (
    <div className="App">
      <Dropdown items={items}/>
      <div style={{border:'2px solid brown'}}>
          <div className="item" style={{border:'2px solid blue'}}>1</div>
          <div className="item" style={{border:'2px solid blue'}}>2</div>
          <div className="item" style={{border:'2px solid blue'}}>3</div>
      </div>
        <div className="overflow">
            visible ЭтотТекстВылезаетСправаЭтотТекстВылезаетСправа
            Этот текст вылезает снизу Этот текст вылезает снизу
            Этот текст вылезает снизу Этот текст вылезает снизу
        </div>
    </div>
  );
}

export default App;
