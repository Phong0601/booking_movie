import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "features/movies/pages/booking_seats/utils/bookingSlice";
import detailSlice from "features/movies/pages/detail/utils/detailSlice";
import bannerSlice from "features/movies/pages/home/components/Banner/utils/bannerSlice";
import nowShowingMovieSlice from "features/movies/pages/home/components/NowShowingMovie/utils/nowShowingMovieSlice";
import homeSlice from "features/movies/pages/home/utils/homeSlice";

const store = configureStore({
	reducer: {
		movieHome: homeSlice.reducer,
		// Add banner reducer --by Hung
		bannerHome: bannerSlice.reducer,
		// Add nowShowingMovie reducer --by Hung
		nowShowingMovieHome: nowShowingMovieSlice.reducer,

		movieDetail: detailSlice.reducer,
		movieBooking: bookingSlice.reducer,
	},
});
export default store;
