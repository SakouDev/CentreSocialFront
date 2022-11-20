import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Tables from '../components/Table/Table'
import { ApiService } from './api/axios'



export default function Candidat() {


    const [candidats, setCandidats] = useState(null)

    useEffect(() => {
      ApiService.get('candidats').then((response)=>setCandidats(response.data.data))
    }, [])

    const HeaderCandidat = 
      {
        option1 : "Name",
        option2 : "Birthday",
        option3 : "CreatedAt",
        option4 : "UpdatedAt",
        option5 : "Active"
      }
    
    if(candidats == null) return <CircularProgress size={100} style={{marginTop:'20%'}} />

  return (
    <>
        <Tables data = {candidats} headerData={HeaderCandidat}/>
    </>
  )
}
