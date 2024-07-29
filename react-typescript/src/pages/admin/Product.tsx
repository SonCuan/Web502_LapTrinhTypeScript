import React from 'react'
import { Link } from 'react-router-dom';
import { IProducts } from '../../interface/products';
import { ICategory } from '../../interface/category';

type Props = {
  products : IProducts[];
  onDelete : (id: number) => void
  category : ICategory[];
}

const Product = ({category, products , onDelete} : Props) => {

  return (
    <> 
     <div className='h1-listproducts'>
      <h1>Danh sách sản phẩm</h1>
     </div>
     <Link to="/admin/authform"> <button className='btn btn-success'>Add</button></Link>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Images</th>
            <th>Categories</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map (item  => (
            <tr key={item.id }>
              <td>{item.id}</td>
              <td><Link to = {`/detail/${item.id}`}> {item.title}</Link></td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
               <img src={item.thumbnail} alt={item.title} height={"100px"} width={"100px"} /> 
                  </td>
                  <td>{category.find(category => category.id == item.category)?.title  }</td> 
              <td>     
                <Link to = {`/admin/authform/${item.id}`}><button className='btn btn-warning w-100'>Edit</button></Link>
                <button className='btn btn-danger w-100' onClick={() => onDelete(Number(item.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </>
  )
}

export default Product;