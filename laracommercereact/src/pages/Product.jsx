import React from 'react'
import { Table } from 'react-bootstrap';
import { Button } from '../Global';
import { HiTrash } from "react-icons/hi";
import { AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
function Product() {
    return (
        <>
            <h1>Product</h1>
            <hr />
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Dealer</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>tv</th>
                        <th>this is a good tv</th>
                        <th>prantho</th>
                        <th><img src="" alt='tv'/></th>
                        <th>222</th>
                        <th>20</th>
                        <th className='d-flex justify-space-between'>
                            <Button className='btn btn-danger text-white'><HiTrash/></Button>
                            <Link to='/product/1' className='btn btn-info mx-2'><AiFillEdit/></Link>
                        </th>
                    </tr>

                </tbody>
            </Table>
        </>
    )
}

export default Product
