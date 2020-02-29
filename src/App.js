import React from 'react';
import Nav from './Components/nav';
import Banner from './Components/banner';
import LayoutContent from './Components/LayoutContent';


const App=()=> {
  return (
    <div>
      <Nav/>
      <Banner/>
      <LayoutContent/>
      <h1>React app</h1>
    </div>
  );
}

export default App;
