
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Produits from './pages/Produits'
import Login from './pages/Login'
import{BrowserRouter ,Routes,Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import { useState } from 'react'
import ProductDetails from './pages/ProductDetails'
import Frontend from './pages/Frontend'
import Backend from './pages/Backend'
import Technologies from './pages/Technologies'
import Products from './pages/Products'
import NavBar from './components/NavBar'
function App() {
  const [isLoggedIn ,setLogged]=useState(false)
  // const [cart,setCart]=useState([])
  
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Login changementDEtat={setLogged}/>}></Route>
    //     <Route path='/home' element={<PrivateRoute isConnected={isLoggedIn}><Home/></PrivateRoute> }/>
    //     <Route path='/products' element={<PrivateRoute  isConnected={isLoggedIn}><Produits LogOut={setLogged}/></PrivateRoute> }/>
    // the one above has a comment
    //     <Route path='products/:id' element={<ProductDetails/>}/>
    //     <Route path='/products' element={<Produits/>} />
    //     <Route path='/technologies' element={<Technologies/>}>
    //           <Route path='interface' element={<Frontend/>}/>
    //           <Route path='serveur' element={<Backend/>}/>
    //     </Route>
    //     <Route path='*' element={<NotFound/>}/>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <NavBar
        // cart={cart}
        // setCart={setCart}
      />
      <Products 
      // cart={cart}
      // setCart={setCart}
      />
    </div>
  )
}

export default App
