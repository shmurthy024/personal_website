import React from 'react';
import Home from './pages/Home';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";


class App extends React.Component{
    render(){
        return(
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path ="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/Resume" component={Resume}/>
                </Switch>
            
            </Router>
   
                
            
        );
    };
};


export default App;