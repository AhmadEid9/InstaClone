import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/pages/signin/register';
import Navbar from './components/base/navbar/navbar';
import Signin from './components/pages/signin/signin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
          
      </header>
      <main className='App-main'>
        <Routes>
          <Route path='/register' element={<><Register/></>}/>

          <Route path='/signin' element={<Signin/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
