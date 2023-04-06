import Header from "./container/Header";
import Hero from "./container/Hero"
 import Work from "./container/Work";
import Connect from "./container/Connect"
import Footer from "./container/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <div class="container">
     <Hero/>
        <Work/>
        <Connect/>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
