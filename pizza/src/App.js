import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchAll } from './app/actions/product/productAction';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RouteArea from './routes/RouteArea';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAll())
  }, [])
  return (
    <>
      <Navbar />
      <RouteArea />
      <Footer />
    </>
  );
}

export default App;
