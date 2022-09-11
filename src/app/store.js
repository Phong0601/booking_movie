import {configureStore} from '@reduxjs/toolkit'
import bookingSlice from 'features/movies/pages/booking_seats/utils/bookingSlice'
import detailSlice from 'features/movies/pages/detail/utils/detailSlice'
import homeSlice from 'features/movies/pages/home/utils/homeSlice'

const store = configureStore({
    reducer:{
        movieHome: homeSlice.reducer,
        movieDetail:detailSlice.reducer,
        movieBooking:bookingSlice.reducer
    }
})
export default store