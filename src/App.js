import { Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
              <Sidebar/>
          </div>
          <div className="col-lg-9 app__main-content">
              <Navbar/>
              <Route exact path="/">
                <About/>
              </Route>
              <Route path="/resume">
                <Resume/>
              </Route>
              <Route path="/projects" component={Projects}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
