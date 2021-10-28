import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import toastify, { description } from '../helper'
import { Button, Spinner, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HiTrash } from 'react-icons/hi'
import { AiFillEdit } from 'react-icons/ai'
import { Helmet } from 'react-helmet'

function Search() {
    const [sResult, setsResult] = useState([])
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const searchTag = ((history.location.search).split('='))[1]
    if (!searchTag) {
        history.goBack()
    }
    const deleteProduct = (id) => {
        alert(id)
    }
    const searchResult = async () => {
        setLoading(true)
        try {
            let res = await axios.post('/api/search', { searchTag })
            setsResult([...res.data])
            setLoading(false)
        } catch (error) {
            toastify('info', 'Please Wait Some Time')
            setLoading(false)
        }
    }
    useEffect(() => {
        searchResult()
    }, [searchTag])
    return (
        <>
            <Helmet>
                <title>lararcommerce | {searchTag}</title>
            </Helmet>
            <h3>{searchTag}</h3>
            <div className='d-flex justify-content-center my-2'>
                {
                    loading && <Spinner className='mx-auto' animation="border" variant="success" size="lg" />
                }
            </div>

            {
                !loading ?
                    sResult.length > 0 ?
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
                                {
                                    sResult.map((data, i) => {
                                        return (
                                            <tr key={i}>
                                                <th>{++i}</th>
                                                <th>{data.product_name}</th>
                                                <th>{description(data.product_description)}</th>
                                                <th>{data.user_product.name}</th>
                                                <th><img src={`${process.env.REACT_APP_SERVER_URL}${data.product_img}`} alt='tv' /></th>
                                                <th>{data.product_price}</th>
                                                <th>{data.product_quantity}</th>
                                                <th className='d-flex justify-space-between'>
                                                    <Button onClick={() => deleteProduct(data.id)} className='btn btn-danger text-white'><HiTrash /></Button>
                                                    <Link to={`/product/${data.id}`} className='btn btn-info mx-2'><AiFillEdit /></Link>
                                                </th>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                        : <h1>Nothing Found</h1>
                    : null
            }
        </>
    )
}

export default Search
