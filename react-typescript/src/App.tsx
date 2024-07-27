import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Detail from './pages/Detail';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { IProducts } from './interface/products';
import api from './servis/axios';
import AuthForm from './pages/AuthForm';
// import Header from './layouts/Header';
// import Footer from './layouts/Footer';
import AuthLogin from './pages/AuthLogin';

export interface ITodo{
  id:number,
  title:string,
  
}
function App() {
  const [products, setProducts ]  = useState<IProducts[]>([]) 
  const nav = useNavigate();
  useEffect (() => { 
    (async() => { 
      const res = await api.get("/products");
      setProducts(res.data);
    })()
  },[]);
//  Phan them san pham 
 const handleDelete = (id:number) => {
   (async () => { 
    try {
      if(confirm ("Ban co chac muon xoa khong ")){ 
        const res = await api.delete(`/products/${id}`);
        setProducts(products.filter((products) => products.id !== id));
        alert ("Xoa thanh cong ");
      }
    } catch (error) {
      console.log(error);
    }
   })()
 }
  const onEdit = async (data : IProducts) => {
    try {
      const res = await api.patch(`/products/${data.id}`, data);
      const newProducts = await api.get("/products");
      setProducts(newProducts.data);
      alert("Sua thanh cong");
      nav("/");
    } catch (error) {
      console.log(error);
    }
  }
  const onAdd = async (data : IProducts) => {
    try {
      const res = await api.post("/products", data);
      const newProducts = await api.get("/products");
      setProducts(newProducts.data);
      alert("Them thanh cong");
      nav("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <> 
        <header className="App-header">
          <ul>
           <li>
                <Link to ="/">Home </Link>
           </li>
           <li>
                <Link to ="/authlogin">Login </Link>
           </li>
           <li>
                <Link to ="/authregister">Register </Link>
           </li>
          </ul>
        </header>
      <Routes> 
        <Route path = "/" element ={<Home onDelete={handleDelete} products={products} /> } />
        {/* <Route path='/header' element = {<Header />} />
        <Route path='/footer ' element = {<Footer />} /> */}
        <Route path ="/detail/:id" Component ={Detail } />
        <Route path = "/authform/:id" element={<AuthForm  onData={onEdit}/>} />
        <Route path ="/authform" element={<AuthForm onData={onAdd} />} />
        <Route path = "/authlogin" element = {<AuthLogin isRegister={false} />} />
        <Route path = "/authregister" element = {<AuthLogin isRegister={true} />} />
      </Routes>
    </>
  )
}

export default App;