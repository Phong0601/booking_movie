import "../App.scss";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useRouteMatch,
	useHistory,
} from "react-router-dom";
import Home from "features/movies/pages/home";
import Detail from "features/movies/pages/detail";
import Payment from "features/movies/pages/payment";
import Booking from "features/movies/pages/booking_seats";
import Header from "common/components/Header";
import SignIn from "features/authentication/SignIn";
import SignUp from "features/authentication/SignUp";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProfileAction } from "features/authentication/utils/authAction";
import Profile from "features/authentication/Profile";
import Footer from "common/components/Footer";
import UpdateUser from "features/authentication/Profile/components/UpdateUser";

function App() {
	// maintain my account --by Hung

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProfileAction());
	}, []);

	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/detail/:id/:slug" component={Detail} />
					<Route path="/booking/:id" component={Booking} />
					<Route path="/payment" component={Payment} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/profile" component={Profile} />
					<Route path="/update-user" component={UpdateUser} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
