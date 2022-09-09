import {configureStore} from '@reduxjs/toolkit'
import bookingReducer from 'features/movies/pages/booking_seats/utils/bookingSlice'
import detailReducer from 'features/movies/pages/detail/utils/detailSlice'
import homeReducer from 'features/movies/pages/home/utils/homeSlice'

const store = configureStore({
    reducer:{
        movieHome: homeReducer.reducer,
        movieDetail:detailReducer.reducer,
        movieBooking:bookingReducer.reducer
    }
})
export default store