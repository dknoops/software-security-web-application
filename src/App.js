import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import Cards from "./pages/CardsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/cards" component={Cards} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
