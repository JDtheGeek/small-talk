import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Article from './components/articles/Article'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateArticle from './components/articles/CreateArticle'


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/create' component={CreateArticle} />
          <Route path='/articles/:id' component={Article} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
