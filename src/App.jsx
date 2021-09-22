import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PublicRoute from "./components/PublicRoute";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";

const App = () => {
    
	return (
		<section className='App'>
			<Router>
				<ScrollToTop />
				<Switch>
					<PublicRoute
						restricted={false}
						component={Home}
						path="/"
						exact
						/>
					<PublicRoute
              restricted={false}
              component={NotFound}
            />
				</Switch>
			</Router>
		</section>
	);
};
    
export default App;
