import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes'
import Layout from './components/layout/Layout'
import { Zoom } from 'react-preloaders'
import { LevelContextProvider } from './context/LevelContext'

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <LevelContextProvider>
            <Layout>
              {routes.map((route) => {
                return (
                  <Route
                    path={route.path}
                    key={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                )
              })}
            </Layout>
          </LevelContextProvider>
        </Switch>
      </Router>
      <Zoom />
    </React.Fragment>
  )
}

export default App
