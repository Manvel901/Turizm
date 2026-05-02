import Header from './components/Layout/Header/Header.jsx';
import Footer from './components/Layout/Footer/Footer.jsx';
import Main from './components/Layout/Main/Main.jsx';

import React from 'react';

function App() {
  return (
    <React.Fragment>

      <div className="app">
      <Header /> 
      <Main />
      <Footer />
    </div>
    </React.Fragment>  
  );
}

export default App;
