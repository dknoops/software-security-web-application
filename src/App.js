import "./App.css";
import { withAuthenticationRequired } from "@auth0/auth0-react";
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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import EditProfile from "./pages/EditProfile";
import DeleteUser from "./api/Delete-User";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/profile"
          component={withAuthenticationRequired(Profile)}
        />
        <Route
          path="/profile/:name/delete"
          component={withAuthenticationRequired(DeleteUser)}
        />
        <Route
          path="/profile/:name/edit"
          component={withAuthenticationRequired(EditProfile)}
        />
        <Route exact path="/cards" component={Cards} />
        <Route
          path="/login"
          component={withAuthenticationRequired(CheckUser)}
        />
        <Route
          path="/submit-card"
          component={withAuthenticationRequired(SubmitCard)}
        />
        <Route
          path="/cards/:id/:operation"
          component={withAuthenticationRequired(GetIdCard)}
        />
        <Route
          exact
          path="/admin"
          component={withAuthenticationRequired(Admin)}
        />
        <Route
          path="/admin/:id/delete"
          component={withAuthenticationRequired(AdminDelete)}
        />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
