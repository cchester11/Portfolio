import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Navigation'
import Projects from './components/Projects';

function App() {
  const [tabs] = useState ([
    {
      name: "Projects"
    },
    {
      name: "LinkedIn"
    }
  ])

  const [currentTab, setCurrentTab] = useState(tabs[0])
  return (
    <div>
      <Nav
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      >
      </Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
