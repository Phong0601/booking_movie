import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie } from './utils/homeAction';
import { movies } from './utils/homeSelector';

const Home = () => {
  const dispatch= useDispatch();
  const listMovies = useSelector(movies);
  console.log(listMovies);
  const [config,setConfig]=useState({
    currentPage:'1',
    pageSize:'8'
  })
  const fetchMovies = async()=>{
    dispatch(fetchMovie(config))
  }
  useEffect(()=>{
    fetchMovies();
  },[])
  return (
    <div>Home</div>
  )
}

export default Home