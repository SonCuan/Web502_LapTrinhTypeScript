import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import api from "../../servis/axios";
import { ICategory } from "../../interface/category";

type Props = {
  onDataCategory: (data: ICategory) => void;
};
const AuthCategory = ({ onDataCategory }: Props) => {
  const nav = useNavigate();
  const sChenma = z.object({
    title: z.string().min(6),
    description: z.string(),
    thumbnail: z.string(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICategory>({
    resolver: zodResolver(sChenma),
  });

  const { id } = useParams();
  if (id) {
    useEffect(() => {
      (async () => {
        try {
          const res = await api.get(`/categories/${id}`);
          reset(res.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [id]);
  }
  const onSubmit = (data: ICategory) => {
    onDataCategory({ ...data, id });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{id ? "Sua danh muc " : "Them danh muc "} </h1>
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
        <label htmlFor="thumnail" className="form-label">
          thumbnail
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          {...register("thumbnail")}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>
  );
};

export default AuthCategory;
