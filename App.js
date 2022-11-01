import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

import './App.css';
import {Container} from './components/index'
import {Header,Footer} from './sections/index';
import {Home , Profile} from './Pages/index';

function App() {
  return (

    <div className="App">
      <Router>
        <Header/>
        <Container>

          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/Profile' element={ <Profile/> } />
          </Routes>

        </Container>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
