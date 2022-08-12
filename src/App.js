import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './App.css';
import BodyInnerContainer from './Components/BodyInnerContainer';
import { Route, Routes } from 'react-router-dom';
import CustomerInfo from './Components/CustomerInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='body_container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<BodyInnerContainer />} />
          <Route path='/customers' element={<CustomerInfo />}/>
        </Routes>
        
      </div>
      
    </div>
  );
}

export default App;
