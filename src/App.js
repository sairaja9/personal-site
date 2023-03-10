import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';

function Navbar(props) {
  const [activeMenu, setActiveMenu] = React.useState(false);
  let firstSpanClass;
  let secondSpanClass;
  if (activeMenu) {
    firstSpanClass = "filled-span first-active";
    secondSpanClass = "filled-span second-active";
  }
  else {
    firstSpanClass = "filled-span";
    secondSpanClass = "filled-span";
  }
  return (
    <Router>
      <nav id="navbar">
        <Link to="/personal-site" id="logo" onClick={() => window.scrollTo(0, 0)}><p id="logo-text">SR</p></Link>
        <div id="menu-button" onClick={() => setActiveMenu(!activeMenu)}>
          <span class={firstSpanClass}></span>
          <span class="blank-span"></span>
          <span class={secondSpanClass}></span>
        </div>
        <div id="menu">
          {activeMenu ?
            <div id="menu-item-container" onClick={() => setActiveMenu(!activeMenu)}>
              <HashLink to="/personal-site" className="menu-item" onClick={() => window.scrollTo(0, 0)}>Home  →</HashLink>
              <HashLink to="/personal-site/about" className="menu-item" onClick={() => window.scrollTo(0, 0)}>About  →</HashLink>
              <HashLink to="/personal-site/work" className="menu-item" onClick={() => window.scrollTo(0, 0)}>Experiences  →</HashLink>
              <HashLink to="/personal-site/#contact" className="menu-item">Contact  →</HashLink>
            </div>
            : null}
        </div>
      </nav>
      <Routes>
        <Route path="/personal-site/work" element={<Work />} />
        <Route path="/personal-site/about" element={<About />} />
        <Route path="/personal-site" element={<Home />} />
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <Navbar />
  );
}

export default App;