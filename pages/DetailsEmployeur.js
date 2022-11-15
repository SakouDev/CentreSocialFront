import { Card, CardContent, Divider, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ApiService } from './api/axios'

export default function DetailsCandidat() {

  const router = useRouter()
  const [details, setDetails] = useState(null)


  useEffect(() => {
    ApiService.get(`employeurs/${router.query.id}`)
    .catch(error => console.log(error))
    .then((response) => setDetails(response.data.data))
  }, [])

  if(details == null) return <h1>Loading...</h1>

  console.log('aled',details)
  const options = {weekday : 'short', month: 'short', day: 'numeric', year: 'numeric'}
  
  return (
    <>
      {/* 
          <h2>Disponibilites : </h2>
          {details.User.Disponibilites.map(element => {
            return(
              <li>{element.namePeriod}</li>
            )
          })}
        </ul>

      </ul> */}
      <Card style={{minHeight:'88vh', backgroundColor:'#1976d2', padding:5}}>
        <Typography align='center' variant="h2" color={'white'}>Détails d'un Employeur</Typography>
        <CardContent style={{width:'100%', display:'flex', flexDirection:'row'}}>
          <CardContent style={{width:'70%', padding:0}}> {/* Left */}
            <CardContent style={{padding:0, marginBottom:25}}>
              <Card style={{flex:1}}>
              <h1>Profil Employeur :</h1>
              <Divider light />
              <div style={{display:'flex', width:'95%', margin:25}}>
                <div style={{width:'40%', display:'flex', justifyContent:'center',alignSelf:'center'}}>
                  <div>
                    <Typography align='left' variant="h5">Nom : {details.name}</Typography>
                    <Typography align='left' variant="h5">SIRET : {details.siret}</Typography>
                  </div>
                </div>
                <div style={{width:'60%', display:'flex', justifyContent:'center'}}>
                  <div>
                    <Typography align='left' variant="h5">id : {details.id}</Typography>
                    <Typography align='left' variant="h5">UserId: {details.UserId}</Typography>
                    <Typography align='left' variant="h5">createdAt : {new Date(details.createdAt).toLocaleDateString("fr-FR", options)}</Typography>
                    <Typography align='left' variant="h5">updatedAt :{new Date(details.updatedAt).toLocaleDateString("fr-FR", options)}</Typography>
                  </div>
                </div>
              </div>
              </Card>
            </CardContent>
            <CardContent style={{padding:0}}>
              <Card>
                <h1>Profil Utilisateur :</h1>
                <Divider light />
                <div style={{display:'flex', width:'100%', padding:25}}>
                  <div style={{width:'40%', display:'flex',alignItems:'center', justifyContent:'center'}}>
                    <div>
                      <Typography align='left' variant="h5">phone : {details.User.phone || 'Non renseigné'}</Typography>
                      <Typography align='left' variant="h5">address : {details.User.address}</Typography>
                      <Typography align='left' variant="h5">zipCode :{details.User.zipCode}</Typography>
                      <Typography align='left' variant="h5">city : {details.User.city}</Typography>
                      <Typography align='left' variant="h5">mail : {details.User.mail}</Typography>
                      {/* <Typography align='left' variant="h5">image : {details.User.image}</Typography> */}
                      
                    </div>
                  </div>
                  <div style={{width:'60%', display:'flex',alignItems:'center', justifyContent:'center'}}>
                    <div>
                      <Typography align='left' variant="h5">id : {details.User.id}</Typography>
                      <Typography align='left' variant="h5">role :{details.User.role}</Typography>
                      <Typography align='left' variant="h5">visibility : {details.User.visibility = details.User.visibility ? "True" : "False"}</Typography>
                      <Typography align='left' variant="h5">createdAt : {details.User.createdAt}</Typography>
                      <Typography align='left' variant="h5">updatedAt :{details.User.updatedAt}</Typography>
                    </div>
                  </div>
                </div>
              </Card>
            </CardContent>
          </CardContent>
          <CardContent style={{width:'30%', padding:0, marginLeft:10}}> {/* Right */}
            <CardContent style={{width:'100%', padding:0}}>
              <Card style={{height:'100%'}}>
                <h2 style={{alignSelf:'center'}}>Disponibilites : </h2>
                <Divider light />
                <div style={{display:'flex', width:'95%', marginTop:25}}>
                  <div style={{width:'100%', justifyContent:'center', padding:5}}>
                    {details.User.Disponibilites.map(element => {
                      return(
                        <Typography variant='h5'>{element.namePeriod}</Typography>
                      )
                    })}
                  </div>
                </div>
              </Card>
            </CardContent>
          </CardContent>
        </CardContent>
      </Card>
        
    </>
  )
}
