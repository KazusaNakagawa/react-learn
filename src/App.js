import React from 'react';

// function App() {
//   const react = 'React lear'
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>{react}</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }
const App = () => {
  return (
    <div>
      < Cat/>
      < Cat/>
      < Cat/>
      < Cat/>
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
