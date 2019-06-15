import React from 'react';
import './App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import AppContent from "./pages";
// import {Row,Container} from 'react-bootstrap'
const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

function App() {

  return (
    <div className="App">
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <AppContent />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
