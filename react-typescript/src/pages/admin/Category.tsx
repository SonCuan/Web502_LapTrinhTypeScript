import React from 'react'
import { Link } from 'react-router-dom';
import { ICategory } from '../../interface/category';

type Props = {
  category : ICategory[];
  onDeleteCategory : (id: number) => void
}

const Category= ({category , onDeleteCategory} : Props) => {

  return (
    <> 
     <div className='h1-listCategory'>
      <h1>Danh sách sản phẩm</h1>
     </div>
     <Link to="/admin/authCategory"> <button className='btn btn-success'>Add</button></Link>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Title</th>
            <th>Description</th>
            <th>Images</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map (item  => (
            <tr key={item.id }>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
               <img src={item.thumbnail} alt={item.title} height={"100px"} width={"100px"} /> 
                  </td>
              <td>
                <Link to = {`/admin/authCategory/${item.id}`}><button className='btn btn-warning '>Edit</button></Link>
                <button className='btn btn-danger' onClick={() => onDeleteCategory(Number(item.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </>
  )
}

export default Category;