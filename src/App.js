

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {
  BrowserRouter, Route, Routes

} from 'react-router-dom'
import Video from './Components/Video';



function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' index element={
            <>
              <Navbar />
              <Home />

            </>
          } />

          <Route path='/video' element={
            <>

              <Video />
            </>
          } />


        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
