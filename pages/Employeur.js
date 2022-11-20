import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Tables from '../components/Table/Table'
import { ApiService } from './api/axios'



export default function Employeur() {


    const [employeurs, setEmployeurs] = useState(null)

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

    if(employeurs == null) return <CircularProgress size={100} style={{marginTop:'20%'}} />

  return (
    <>
      <Tables data = {employeurs} headerData = {HeaderEmployeur}/>
    </>
  )
}
