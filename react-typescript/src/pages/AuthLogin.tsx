import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthFormLogin } from '../interface/products';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import api from '../servis/axios';

type Props = {
    isRegister : boolean
}

const AuthLogin = ({isRegister}: Props) => {
    const nav = useNavigate();
    const sChenma = z.object({
        user : z.string ().min(6).trim(),
        email : z.string().email().trim(),
        password : z.string().min(6).trim(),
      });
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<AuthFormLogin>({
        resolver: zodResolver(sChenma),
      });
    const onSubmit = (data: AuthFormLogin) => {
        (async () => { 
            try {
            
                if(isRegister) {
                    const res = await api.post("/register" , data);
                    console.log(res) ; 
                    if(confirm("Đăng ký thành công , bạn có muốn chuyển đến trang đăng nhập không? ")){
                      nav("/authlogin");
                    }
                }else { 
                    const res = await api.post("/login" , data) ; 
                    localStorage.setItem("user", JSON.stringify(res.data));
                    if(confirm("Bạn đăng nhập thành công, có muốn chuyển đến trang home không? ")) {
                      nav("/");
                    }
                }
            } catch (error) {
                console.log(error);
            }
        })()
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{isRegister  ? "Dang ky " : " Dang nhap"}</h1>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Tên người dùng </label>
    <input type="text" className="form-control" id="user"  {...register("user")}/>
    {errors.user && <p> {errors.user.message}</p>}
  </div>     
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")}/>
    {errors.email && <p> {errors.email.message}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"{...register("password")} />
    {errors.password && <p> {errors.password.message}</p>}
  </div>
  <button type="submit" className="btn btn-primary w-100 ">Submit</button>
</form>
  )
}

export default AuthLogin;