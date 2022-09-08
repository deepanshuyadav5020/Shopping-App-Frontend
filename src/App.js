import './App.css';
import {Header} from '../src/shared/widgets/Header'
import {Banner} from '../src/shared/widgets/banner'
import {Goals} from '../src/shared/widgets/goals_section'
import { Products } from './modules/Products/Products';
import {ActionAreaCard} from '../src/shared/widgets/Card'
import { Footer } from './shared/widgets/footer';
import SignIn from './pages/Login';
import { SignUp } from './pages/Register';
function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <Goals/>
    <Products title = "Trending Now"/>
    <Products title = "Just Launched"/>
    <Products title = "Best Sellers"/>
    <Products title = "Whey Protein"/>
    <Footer/>
    {/* <SignIn/> */}
      {/* <SignUp/> */}
    </>
  );
}

export default App;
