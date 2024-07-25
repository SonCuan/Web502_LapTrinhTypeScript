import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home';
import Detail from './components/Detail';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { IProducts } from './interface/products';
import api from './servis/axios';
import AuthForm from './components/AuthForm';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

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
      const idComfirm = confirm("Ban co muon xoa khong ?")
      if (idComfirm) {
        await api.delete(`/products/${id}`);
        setProducts(products.filter((product) => product.id !== id));
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
  
      <Routes> 
        <Route path = "/" element ={<Home onDelete={handleDelete} products={products} /> } />
        {/* <Route path='/header' element = {<Header />} />
        <Route path='/footer ' element = {<Footer />} /> */}
        <Route path ="/detail/:id" Component ={Detail } />
        <Route path = "/authform/:id" element={<AuthForm  onData={onEdit}/>} />
        <Route path ="/authform" element={<AuthForm onData={onAdd} />} />
      </Routes>
    </>
  )
}

export default App;