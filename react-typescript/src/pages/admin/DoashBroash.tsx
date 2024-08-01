import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const DoashBroash = (props: Props) => {
  return (
    <div className='container-doashbroash'>
        <ul>
            <li><Link to ="/"> Home </Link></li>
        </ul>
        <ul>
            <li><Link to ="/admin/product">Product</Link></li>
        </ul>
        <ul>
            <li><Link to ="/admin/category">Category</Link></li>
        </ul>
        <ul>
            <li>Settings</li>
        </ul>
    </div>
  )
}

export default DoashBroash;