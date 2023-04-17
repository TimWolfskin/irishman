import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Poster from '../poster/Poster'
import Products from '../products/Products'
import Categories from '../categories/Categories'
import Banner from '../banner/Banner'
import { filterByPrice } from '../../features/products/productsSlice'




const Home = () => {
  const dispatch = useDispatch()
  const {
    products: {list, filtered},
    categories,
  } = useSelector((state) => state)

  useEffect(() => {
    if (!list.length) return;

    dispatch(filterByPrice(100))
  }, [dispatch, list.length])
  return (
    <>
    <Poster />
    <Products products={list} amount={5} title="Trending" />
    <Categories products={categories.list} amount={5} title="Worth seeis" />
    <Banner />
    <Products products={list} amount={5} title="Less then 100$" />
    </>
  )
}

export default Home