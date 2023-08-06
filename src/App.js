import './App.css';
import Company from './pages/company/Company';
import Customer from './pages/customer/Customer';
import Home from './pages/home/Home';
import Seller from './pages/seller/Seller';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import Alert from './components/Alert';
import ProductById from './pages/ProductById';
import Footer from './pages/Footer';
import { useDispatch } from 'react-redux';
import { setCurrentAccount } from './pages/login/accountSilce';
import { getCurrentAccount } from './web3Config/walletConnect';

function App() {
  const dispatch = useDispatch();

  const autoSetAccount = () => {
    setTimeout(async ()=>{
      const account = await getCurrentAccount();
      dispatch(setCurrentAccount(account));
      autoSetAccount();
    }, 5000);
  }

  autoSetAccount();
  
  return (
    <BrowserRouter>
    <Alert/>
    <Navbar/>
    <div className='container-fluid'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/company/*' element={<Company/>}/>
        <Route path='/customer/*' element={<Customer/>}/>
        <Route path='/seller/*' element={<Seller/>}/>
        <Route path='/product/:productID' element={<ProductById/>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
