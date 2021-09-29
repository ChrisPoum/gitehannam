import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useState } from "react"
import ScrollToTop from "./components/ScrollToTop";
import PublicRoute from "./components/PublicRoute";
import NotFound from "./components/NotFound";
import Header from "components/Header";
import DisplayJumbotron from "components/DisplayJumbotron";
import Footer from "components/Footer";
import Home from "./pages/Home";
import Booking from "pages/Booking";
import AboutUs from "pages/AboutUs";
import Contacts from "pages/Contacts";
import MentionsLegales from "pages/MentionsLegales";

const App = () => {
	const [language, setLanguage] = useState('fr');
    
	return (
		<section className='App'>
			<Router>
				<ScrollToTop />
				<Header setLanguage={setLanguage} language={language}/>
				<DisplayJumbotron />
				<Switch>
					<PublicRoute
						restricted={false}
						component={Home}
						path="/"
						exact
						/>
					<PublicRoute
						restricted={false}
						component={Booking}
						path="/booking"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={AboutUs}
						path="/aboutus"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={Contacts}
						path="/contacts"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={MentionsLegales}
						path="/mentionslegales"
						exact
					/>
					<PublicRoute
						restricted={false}
						component={NotFound}
          />
				</Switch>
				<Footer />
			</Router>
		</section>
	);
};
    
export default App;
