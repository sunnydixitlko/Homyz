import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/companies/companies";
import Residencies from "./components/Residencies/residencies";
import Value from "./components/Values/value.jsx";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/Values/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import "./index.css";
import "./App.css";



function App(){
  return(
   <div className="App">
    <div>
      <div className="white-gradient"/>
<Header/>
<Hero/>
</div>
<Companies/>
<Residencies/>
<Value/>
<Contact/>
<GetStarted/>
<Footer/>
   </div>
  );
}
export default App;