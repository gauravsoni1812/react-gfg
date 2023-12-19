import React, { useEffect } from 'react'
import {useSearchParams ,useParams} from "react-router-dom"
const Routing = () => {
    const [searchParams, serSearchParams]=useSearchParams()
    console.log(searchParams.toString());
  return (
    <>
    <h1>Routing</h1>
    <h2>{searchParams.get("name")}</h2>
    <h2>{searchParams.get("sirname")}</h2>
    </>
  )
}

export default Routing;