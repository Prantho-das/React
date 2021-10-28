import React, { useEffect, useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import SingleProduct from '../screens/Product/SingleProduct'
import Product from '../screens/Product/Product'
import Contacts from '../screens/Contacts'
import { FaCartArrowDown } from 'react-icons/fa'
import ProductCart from '../screens/Product/ProductCart'
import NotFound from '../screens/NotFound'
import Loading from '../components/Loading'

function RouteArea() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
    return (
        <>
            <main className='container md:mx-10 mx-auto py-4 relative'>
                <Link to='/cart' className="cart shadow-md rounded-md flex items-center flex-col absolute right-1 top-2 px-4 py-2">
                    <FaCartArrowDown />
                    <hr />
                    <h1 className="text-blue-700 text-lg font-semibold">0</h1>
                </Link>
                {
                    loading ? <Loading className="animate-spin"/> :
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/product' exact component={Product} />
                            <Route path='/contact' exact component={Contacts} />
                            <Route path='/cart' exact component={ProductCart} />
                            <Route path='/category/:id' exact component={ProductCart} />
                            <Route path='/product/:id' component={SingleProduct} />
                            <Route path='*' component={NotFound} />
                        </Switch>
                }
            </main>
        </>
    )
}

export default RouteArea
