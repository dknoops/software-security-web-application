import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import Cards from "./pages/CardsPage";
import SubmitCard from "./pages/SubmitCard";
import GetIdCard from "./api/Get-Id-Card";
import CheckUser from "./api/Check-User";
import Admin from "./pages/Admin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminDelete from "./api/Admin-Delete";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/cards" component={Cards} />
        <Route path="/login" component={CheckUser} />
        <Route path="/submit-card" component={SubmitCard} />
        <Route path="/cards/:id/:operation" component={GetIdCard} />
        <Route exact path="/admin" component={Admin} />
        <Route path="/admin/:id/delete" component={AdminDelete} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
