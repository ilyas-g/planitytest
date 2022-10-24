import { useEffect } from 'react';
import inputs from './input.json';

import './App.css';

function App() {

  const sortable = (a, b) => {
    if (a.start < b.start) { return -1; }
    if (a.start > b.start) { return 1; }
    return 0;
  };

  let innerWidth = window.innerWidth;
  let innerHeight = window.innerHeight;

  function handleResize() {
    console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <div className="App">

      {inputs.sort(sortable).map((input, index) => {
        return (
          <div className='bloc' key={index}>

            {input.map((inp, index) => {

              let boxStyle = {
                backgroundColor: "#4a5771",
                color: "#ffffff",
                border: "1px solid #ffffff",
                width: index === 0 ? innerWidth : innerWidth / (index + 1),
                height: innerHeight,
              };
              return (
                <div style={boxStyle} key={index}>
                  <p>{boxStyle.width}</p>
                  {inp.id} - {index}
                </div>
              );
            })}

            {/* <div style={boxStyle} key={index}>
              <p>{boxStyle.width}</p>
              {input.id} - {index}
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default App;
