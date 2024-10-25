import { Header } from "./Components/HomePage/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from "./Components/HomePage/Homepage";
import { AboutUsPage } from "./Components/About_Us/AboutUsPage";
import { SignUp } from "./Components/SignUpPage/SignUp";
import { LogIn } from "./Components/LogInPage/LogIn";
import { ResetPassword } from "./Components/ResetPassword/ResetPassword";
import { FooterAboutUs } from "./Components/About_Us/FooterAboutUs";
import { ContactUs } from "./Components/ContactUS/ContactUs";
import { PricingAndPlans } from "./Components/PricingAndPlans/PricingAndPlans";
import { ProductsDetails } from "./Components/ProductDetails/ProductsDetails";
import { YourCart } from "./Components/YourCart/YourCart";
import { Checkout } from "./Components/Checkout/Checkout";
import { useState } from "react";



function App() {

  const menu = [['/products', 'Products'], ['/plans', 'Plans'], ['/aboutus', 'About'], ['/contact-us', 'Contact us']]

  const [output,setOutput] = useState(0)

  const incFunc =(val)=>{
      setOutput(output+val)
  }
  const decFunc=(val)=>{
    setOutput(output-val)
  }

  return (
    <>

      <BrowserRouter>
        <Header data={menu} />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/aboutus' element={<AboutUsPage />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/plans' element={<PricingAndPlans />} />
          <Route path='/products' element={<ProductsDetails />} />
          <Route path='/cart' element={<YourCart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <FooterAboutUs />
      </BrowserRouter>
    </>
  );
}

export default App;
