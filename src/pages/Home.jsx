import '../css/App.css'
import HeroSection from "../sections/herosection";
import Footer from "../sections/footer";
import Others from "../sections/others";
import About from "../sections/about";
import Videos from "../sections/videos";

function App() {
   return (
    <div className="App">
      <HeroSection />
      <About />
      <Videos />
      <Others />
      <Footer />
    </div>
  )
}

export default App
