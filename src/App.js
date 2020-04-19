import React from 'react';
import LandingPage from './screens/LandingPage';
import Login from './screens/Login';
import Register from './screens/Register';
import StudentHomeNav from './screens/studentArea/studentHomeNav'
import StudentHome from './screens/studentArea/studentHome';
import studentOpportunities from './screens/studentArea/studentOpportunities';
import companies from './screens/studentArea/companies';
import events from './screens/studentArea/events';
import studentProfile from './screens/studentArea/studentProfile';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/studentArea/studentHomeNav" exact component={StudentHomeNav} />
        <Route path="/studentArea/studentHome" exact component={StudentHome} />
        <Route path="/studentArea/studentOpportunities" exact component={studentOpportunities} />
        <Route path="/studentArea/companies" exact component={companies} />
        <Route path="/studentArea/events" exact component={events} />
        <Route path="/studentArea/studentProfile" exact component={studentProfile} />
      </Switch>
    </Router>
  );
}

export default App;
