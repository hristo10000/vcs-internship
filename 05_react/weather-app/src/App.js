
import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
function App() {
 return (
  <div className="App">
  <main>
  <h1>
       Ico's Weather
     </h1>
     <h2>
       A really well build and original live weather forecast react app
     </h2>
     <Forecast />
  </main>
  <footer>
     Page created by Hristo Ivanov(future Senior Full Stack Developer)
  </footer>
</div>
 );
}
export default App;