import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import api from '../servis/axios';


type Props = {}
type FormValues={
  title:string,
  price:number,
  description:string
}
const AuthForm = (props: Props) => {
  const nav = useNavigate(); 
  const sChenma = z.object({
    title : z.string().min(6),
    price : z.number().min(6),
    description : z.string()
  });
  const {
    register  ,
    handleSubmit, 
    reset,
    formState : {errors}
  } = useForm<FormValues>()
  const onSubmit = async (data : FormValues) => {
    try {
      const res = await api.post("/products" , data);
      reset(res.data);
      alert("Them san pham thanh cong");
      nav("/");
    } catch (error) {
      console.error("Erorr adding products" , error);
      alert("Erorr adding products");
    }
  }
  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      <h1>Them san pham </h1>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control"{...register("title" , {required : true,minLength:6})} />
    {errors.title && <span className="text-danger">Tiêu đề phải có ít nhất 6 ký tự.</span>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input type="number" className="form-control" id="exampleInputPassword1" {...register("price",{required:true,min:0})  } />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1" {...register("description")} />
  </div>
  <button type="submit" className="btn btn-primary w-100">Submit</button>
</form>
  )
}

export default AuthForm;