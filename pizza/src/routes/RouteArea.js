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
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import {useSelector} from "react-redux"
function RouteArea() {
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
    const state = useSelector(state =>state.cart)
    return (
        <>
            <main className='container md:mx-10 mx-auto py-4 relative'>
                <Link to='/cart'>
                    <div className="cart z-50 shadow-md rounded-md flex items-center flex-col absolute right-1 top-2 px-4 py-2" >
                        <FaCartArrowDown />
                        <h1 className="text-blue-700 text-lg font-semibold">{state.cart.length}</h1>
                    </div>
                </Link>
                {
                    loading ? <Loading /> :
                        <AnimatePresence exitBeforeEnter>
                            <Switch location={location} key={location.key}>
                                <Route path='/' exact component={Home} />
                                <Route path='/product' exact component={Product} />
                                <Route path='/contact' exact component={Contacts} />
                                <Route path='/cart' exact component={ProductCart} />
                                <Route path='/category/:id' exact component={ProductCart} />
                                <Route path='/product/:id' component={SingleProduct} />
                                <Route path='*' component={NotFound} />
                            </Switch>
                        </AnimatePresence>
                }
            </main>
        </>
    )
}

export default RouteArea
