import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home';
import Detail from './components/Detail';
import { Route, Routes } from 'react-router-dom';
import { IProducts } from './interface/products';
import api from './servis/axios';
import AuthForm from './components/AuthForm';

export interface ITodo{
  id:number,
  title:string,
  
}
function App() {
  const [products, setProducts ]  = useState<IProducts[]>([]) 
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
  return (
    <> 
  
      <Routes> 
        <Route path = "/" element ={<Home onDelete={handleDelete} products={products} /> } />
        <Route path ="/detail/:id" Component ={Detail } />
        <Route path ="/authform" element={<AuthForm />} />
      </Routes>
    </>
  )
}

export default App;