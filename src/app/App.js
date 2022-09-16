import "../App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "features/movies/pages/home";
import Detail from "features/movies/pages/detail";
import Payment from "features/movies/pages/payment";
import Booking from "features/movies/pages/booking_seats";
import Header from "common/components/Header";
function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/detail/:id/:slug" component={Detail} />
					<Route path="/booking" component={Booking} />
					<Route path="/payment" component={Payment} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
