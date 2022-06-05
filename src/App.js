// import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarB from './NavbarB';
import {BrowserRouter as Routes, Route, Switch} from 'react-router-dom';
import Inshome from './Inshome';
import StuRegistration from './StuRegistration';
import './App.css';
import ParRegistration from './ParRegistration';
import InsRegistration from './InsRegistration';

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
            <InsRegistration/>
          </Route>



          {/* Student Routes */}

          <Route exact path="/studentregistration">
            <StuRegistration/>
          </Route>
          
          

          {/* Parent Routes */}
          
          <Route exact path="/parentregistration">
            <ParRegistration/>
          </Route>
          
          
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
