import React from 'react';
import Create from './pages/Create';
// import Homepage from './pages/Homepage';
// import Search from './pages/Search';
// import Login from './pages/Login';
// import Category from './pages/CategorySearch';
//or can you import {Login,Search,Homepage,Landing} from '.pages.'?
import './App.css';

const App = () => (
    <Create />
  // <Router>
  //   <div>
  //     <Nav />
  //     <Switch>
  //       <Route exact path="/" component={Landing} />
  //       <Route exact path="/search" component={Search} />
  //       <Route exact path="/search/:category" component={Category} />
  //       <Route exact path="/login" component={Login} />
  //       <Route exact path="/homepage" component={Homepage} />
  //     </Switch>
  //   </div>
  // </Router>
);


export default App;
