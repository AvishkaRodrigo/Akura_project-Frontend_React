// import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarB from './NavbarB';
import {BrowserRouter as Routes, Route, Switch} from 'react-router-dom';
import Inshome from './Inshome';
import Registration from './Registration';
import './App.css';

function App() {
  return (
    <div className="app">
    {/* <Ins_Home/> */}
    <NavbarB/>
    <div className="Main-content">
      <Routes>
        <Switch>

          {/* Unspecified Routes */}
          <Route exact path="/">

            <Registration/>
          </Route>
          <Route exact path="/registration">
          </Route>


          {/* Student Routes */}

          
          

          {/* Parent Routes */}
          
          
          
          
          {/* Instructor Routes */}
          <Route exact path="/inshome">
              <Inshome/>
          </Route>



          {/* Admin Routes */}
          
          
          
          
          {/* Staff Routes */}


        </Switch>
      </Routes>
    </div>
    
  </div>
    
  );
}

export default App;
