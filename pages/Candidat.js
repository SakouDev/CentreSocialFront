import React, { useEffect, useState } from 'react'
import Tables from '../components/Table/Table'
import { ApiService } from './api/axios'



export default function Candidat() {


    const [candidats, setCandidats] = useState([])

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


  return (
    <>
        <Tables data = {candidats} headerData={HeaderCandidat}/>
    </>
  )
}
