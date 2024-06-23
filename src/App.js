import { Header } from "./Components/HomePage/Header";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Homepage } from "./Components/HomePage/Homepage";
import { AboutUsPage } from "./Components/About_Us/AboutUsPage";
import { SignUp } from "./Components/SignUpPage/SignUp";
import { LogIn } from "./Components/LogInPage/LogIn";
import { ResetPassword } from "./Components/ResetPassword/ResetPassword";
// import { FooterAboutUs } from "./Components/About_Us/FooterAboutUs";
import { ContactUs } from "./Components/ContactUS/ContactUs";
import { PricingAndPlans } from "./Components/PricingAndPlans/PricingAndPlans";

function App() {
  return (
   <>
     <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/aboutus' element={<AboutUsPage/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/log-in' element={<LogIn/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/plans' element={<PricingAndPlans/>}/>
    </Routes>
    {/* <FooterAboutUs/> */}
   </BrowserRouter>
   </>
  );
}

export default App;
