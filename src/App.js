import React from 'react';
import Navbar from './components/navBar';
import MainContent from './components/mainContent';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <header>
      <Navbar/>
      </header>
      <MainContent/>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
