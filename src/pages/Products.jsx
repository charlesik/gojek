import React from 'react'
import Footer from '../components/Footer'
import Loyalty from '../components/Loyalty'
import Prod from '../components/Prod'
import Product from '../components/Product'
import ProductsTop from '../components/ProductsTop'

export default function Products() {
  return (
    <div>
        <ProductsTop/>
        <Prod/>
        <Loyalty/>
        <Product 
        bg1='dark-blue' 
        bg2='green-400' 
        bgpic="[url('/Transportbg.svg')]"
        title='Transport and Logistics'
        p='With 2 million+ driver partners, we’ve kinda done 13,000 trips between the earth and the moon.'/>
        <Product 
        bg1='green-400' 
        bg2='blue-400' 
        bgpic="[url('/Paymentbg.svg')]"
        title='Payments'
        p='One of the largest fintech companies in Southeast Asia, we make transactions reliable and cashless.'/>
        <Product 
        bg1='blue-400' 
        bg2='red-400' 
        bgpic="[url('/Foodbg.svg')]"
        title='Food & Shopping'
        p='Fill your cart with food, groceries, medicines, electronics and more. Without stepping out.'/>
        <Product 
        bg1='red-400' 
        bg2='pink-400' 
        bgpic="[url('/Entertainmentbg.svg')]"
        title='Entertainment'
        p='Binge-watch your favorite series, book tickets for movies and events, play games, have a good time!'/>
        <Product 
        bg1='pink-400' 
        bg2='purple-400' 
        bgpic="[url('/Businessbg.svg')]"
        title='Business'
        p='Manage your restaurants, run ads, create promos, and do more.'/>
        <Footer/>
    </div>
  )
}
