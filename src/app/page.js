import 'remixicon/fonts/remixicon.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image'
import Hero from './components/ui/hero'
import Service from './components/ui/service'
import TopCatgories from './components/ui/topcatogories'
import Products from './components/ui/products'
import Gallery from './components/ui/gallery'
import SpecialProducts from './components/ui/specialproducts'
import Blog from './components/ui/blog'
import Partner from './components/ui/partner'
import Notfound from './notfound/Notfound'

export default function Home() {
  return (
  <div>
   <Hero/>
   <Service/>
   <TopCatgories/>
   <Products/>
   <Gallery/>
     <SpecialProducts/>
   <Blog/>
   <Partner/>
   <Notfound/>
 </div>





  )
}
