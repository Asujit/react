import React from 'react'
import { useLocation } from 'react-router'

const LocationPage = () => {

    const location = useLocation();

    console.log("Current Location", location);
  return (
    <div>Location</div>
  )
}

export default LocationPage