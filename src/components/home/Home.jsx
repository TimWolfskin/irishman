import React from 'react'
import { useSelector } from 'react-redux'

import Poster from '../poster/Poster'
import Products from '../products/Products'
import Categories from '../categories/Categories'
import Banner from '../banner/Banner'




const Home = () => {
  const {products, categories} = useSelector((state) => state)
  return (
    <>
    <Poster />
    <Products products={products.list} amount={5} title="Trending" />
    <Categories products={categories.list} amount={5} title="Worth seeis" />
    <Banner />
    </>
  )
}

export default Home