import { useEffect, useState } from 'react'
import Tables from '../components/Table'
import { ApiService } from './api/hello'

export default function Home() {


  // const sasaas = [
  //   { value: 'PreOnBoarding', text: 'PreOnBoarding' },
  //   { value: 'OnBoarding', text: 'OnBoarding' },
  //   { value: 'PreOffBoarding', text: 'PreOffBoarding' },
  //   { value: 'OffBoarding', text: 'OffBoarding' },
  //   { value: 'Delete', text: 'Delete' },
  // ]

  // const data = [{
  //   id : 2,
  //   firstName : "Luc",
  //   name : "Vigneron",
  //   matricule : "000000",
  //   wlan : "LVIGNERON",
  //   stepName : "PreOnBoarding",
  //   stepDate : "04/10/2002",
  //   nextStep : "Menfou2",
  //   nextStepDate : "05/12/2023",
  //   compliante : "haha",
  //   licenseName : "NTM",
  // }]

  const [candidats, setCandidats] = useState([])

  useEffect(() => {
    ApiService.get('candidats').then((response) => {setCandidats(response.data.data)})
  }, [])
  

  return (
    <>
      <h1>HEY SALUT</h1>
      <Tables data = {candidats} />
    </>
  )
}
