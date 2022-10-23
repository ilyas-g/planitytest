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

      {/* <div className='box'>
        1
      </div> */}

      {inputs.sort(sortable).map((input, index) => {

        let boxStyle = {
          backgroundColor: "#4a5771",
          color: "#ffffff",
          border: "1px solid #ffffff",
          marginBottom: '20px',
          width: index === 0 ? innerWidth : innerWidth / (index + 1),
          // width: innerWidth / (index + 1),
          // width: innerWidth,
          height: innerHeight,
        };

        // boxStyle.width = innerWidth / index;
        // console.log(boxStyle.width);
        return (
          <div style={boxStyle} key={index}>
            <p>{boxStyle.width}</p>
            {input.id} - {index}
          </div>
        );
      })}
    </div>
  );
}

export default App;
