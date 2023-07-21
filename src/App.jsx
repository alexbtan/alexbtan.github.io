import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks,
  Hero, Navbar, Tech, Works, StarsCanvas }
from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div className="bg-white bg-cover
        bg-no-repeat bg-center relative z-0">
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Works />
        <Experience />
      </div>
    </BrowserRouter>
  )
}

export default App
