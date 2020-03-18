import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './Components/nav';
import LoginMain from './Pages/LoginMain';
import Footer from './Components/footer';
import Banner from './Components/banner';
import SkillSlider from './Components/SkillSlider';


const App=()=> {
  
    
  return (
        <Router>
          <Switch>
            <Route path='/' exact render={props=>
              <div>
                <Nav/>
                <Banner/>
                <SkillSlider/>
                <Footer/>
              </div>
            }/>
            <Route path='/Login' component={LoginMain}/>
          </Switch>
        </Router>
  );
}

export default App;
