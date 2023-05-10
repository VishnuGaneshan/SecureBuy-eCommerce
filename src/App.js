import './App.css';
import Company from './pages/company/Company';
import Customer from './pages/customer/Customer';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Seller from './pages/seller/Seller';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './pages/navbar/Navbar';
import Alert from './components/Alert';
import ProductById from './pages/ProductById';
import Footer from './pages/Footer';

function App() {
  
  return (
    <BrowserRouter>
    <Alert/>
    <Navbar/>
    <div className='container-fluid'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/seller' element={<Seller/>}/>
        <Route path='/product/:productID' element={<ProductById/>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
