import React, { useEffect, useState } from 'react'
import Tables from '../components/Table/Table'
import { ApiService } from './api/axios'



export default function Employeur() {


    const [employeurs, setEmployeurs] = useState([])

    useEffect(() => {
    ApiService.get('employeurs').then((response)=>setEmployeurs(response.data.data))
    }, [])

    const HeaderEmployeur = 
      {
        option1 : "Name",
        option2 : "SIRET",
        option3 : "CreatedAt",
        option4 : "UpdatedAt",
        option5 : "Active"
      }

  return (
    <>
      <Tables data = {employeurs} headerData = {HeaderEmployeur}/>
    </>
  )
}
