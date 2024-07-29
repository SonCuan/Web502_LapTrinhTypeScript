import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import api from "../../servis/axios";
import { IProducts } from "../../interface/products";
import { ICategory } from "../../interface/category";

type Props = {
  onData: (data: IProducts) => void;
  category : ICategory[];
};
const AuthForm = ({ category, onData }: Props) => {
  const nav = useNavigate();
  const sChenma = z.object({
    title: z.string().min(6),
    price: z.number(),
    description: z.string(),
    category: z.string(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProducts>({
    resolver: zodResolver(sChenma),
  });

  const { id } = useParams();
  if (id) {
    useEffect(() => {
      (async () => {
        try {
          const res = await api.get(`/products/${id}`);
          reset(res.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [id]);
  }
  const onSubmit = (data: IProducts) => {
    onData({ ...data, id });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{id ? "Sua san pham " : "Them san pham"} </h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          {...register("title", { required: true, minLength: 6 })}
        />
        {errors.title && (
          <span className="text-danger">Tiêu đề phải có ít nhất 6 ký tự.</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputPassword1"
          {...register("price", {
            required: true,
            min: 0,
            valueAsNumber: true,
          })}
        />
        {errors.price?.message && (
          <p className="text-danger">{errors.price?.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          {...register("description")}
        />
      </div>
      <div className="mb-3">
        <select {...register("category")} className="form-select" name="category" id="">
         <option value="">Chọn loại sản phẩm</option>
          {category.map((item) => (
            <option value={item.id} key={item.id}>{item.title}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>
  );
};

export default AuthForm;
