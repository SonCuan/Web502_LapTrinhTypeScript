import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { IProducts } from "./interface/products";
import api from "./servis/axios";
import AuthForm from "./pages/admin/AuthForm";
// import Header from './layouts/Header';
// import Footer from './layouts/Footer';
import AuthLogin from "./pages/AuthLogin";
import DoashBroash from "./pages/admin/DoashBroash";
import Product from "./pages/admin/Product";
import AuthCategory from "./pages/admin/AuthCategory";
import { ICategory } from "./interface/category";
import Category from "./pages/admin/Category";
import Shop from "./pages/ShopDanhMuc/Shop";

function App() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  const nav = useNavigate();
  useEffect(() => {
    (async () => {
      const res = await api.get("/products");
      setProducts(res.data);
      const result = await api.get("/categories");
      setCategory(result.data);
    })();
  }, []);

  //  Phan them san pham
  const handleDelete = (id: number) => {
    (async () => {
      try {
        if (confirm("Ban co chac muon xoa khong ")) {
          const res = await api.delete(`/products/${id}`);
          setProducts(products.filter((products) => products.id !== id));
          alert("Xoa thanh cong ");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const onEdit = async (data: IProducts) => {
    try {
      const res = await api.patch(`/products/${data.id}`, data);
      const newProducts = await api.get("/products");
      setProducts(newProducts.data);
      alert("Sua thanh cong");
      nav("/admin/product");
    } catch (error) {
      console.log(error);
    }
  };
  const onAdd = async (data: IProducts) => {
    try {
      const res = await api.post("/products", data);
      const newProducts = await api.get("/products");
      setProducts(newProducts.data);
      alert("Them thanh cong");
      nav("/admin/product");
    } catch (error) {
      console.log(error);
    }
  };
  const handleCategory = async (data: ICategory) => {
    try {
      if (data.id) {
        const result = await api.patch(`/categories/${data.id}`, data);
        const newCategory = await api.get("/categories");
        setCategory(newCategory.data);
        alert("Sua thanh cong");
        nav("/admin/category");
      } else {
        const res = await api.post("/categories", data);
        setCategory([...category, res.data]);
        alert("Them thanh cong");
        nav("/admin/category");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteCategory = (id: number) => {
    (async () => {
      try {
        if (confirm("Ban co chac muon xoa khong ")) {
          const res = await api.delete(`/categories/${id}`);
          setCategory(category.filter((category) => category.id !== id));
          alert("Xoa thanh cong ");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home product={products} />} />
        {/* <Route path='/header' element = {<Header />} />
        <Route path='/footer ' element = {<Footer />} /> */}
        <Route path="/detail/:id" Component={Detail} />
        <Route path="/authlogin" element={<AuthLogin isRegister={false} />} />
        <Route path="/authregister" element={<AuthLogin isRegister={true} />} />
        <Route path="/shop/:id" element={<Shop />} />
        {/* Admin  */}
        <Route path="/admin" element={<DoashBroash />} />
        <Route
          path="/admin/authform/:id"
          element={<AuthForm onData={onEdit} category={category} />}
        />
        <Route
          path="/admin/authform"
          element={<AuthForm onData={onAdd} category={category} />}
        />
        <Route
          path="/admin/product"
          element={
            <Product
              products={products}
              onDelete={handleDelete}
              category={category}
            />
          }
        />
        <Route
          path="/admin/category"
          element={
            <Category
              category={category}
              onDeleteCategory={handleDeleteCategory}
            />
          }
        />
        <Route
          path="/admin/authCategory"
          element={<AuthCategory onDataCategory={handleCategory} />}
        />
        <Route
          path="/admin/authCategory/:id"
          element={<AuthCategory onDataCategory={handleCategory} />}
        />
      </Routes>
    </>
  );
}
export default App;
