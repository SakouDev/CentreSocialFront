import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ApiService } from './api/axios'

export default function DetailsCandidat() {

  const router = useRouter()
  const [details, setDetails] = useState(null)

  function DeleteCandidat(){
    ApiService.delete('candidats', router.query.id)
  }


  useEffect(() => {
    ApiService.get(`candidats/${router.query.id}`)
    .catch(error => console.log(error))
    .then((response) => setDetails(response.data.data))
  }, [router.query.id])

  console.log(details)

  if(details == null) return <h1>Loading...</h1>

  const options = {weekday : 'short', month: 'short', day: 'numeric', year: 'numeric'}
  
  return (
    <>
      <Card style={{minHeight:'88vh', backgroundColor:'rgb(0,105,255,0.4)', padding:5}}>
        <Typography align='center' variant="h2" color={'white'}>Détails d'un Candidat</Typography>
        <CardContent style={{width:'100%', display:'flex', flexDirection:'row'}}>
          <CardContent style={{width:'70%', padding:0}}> {/* Left */}
            <CardContent style={{padding:0, marginBottom:25}}>
              <Card style={{flex:1}}>
              <h1>Profil Candidat :</h1>
              <Divider light />
              <div style={{display:'flex', width:'95%', margin:25}}>
                <div style={{width:'40%', display:'flex', justifyContent:'center',alignSelf:'center'}}>
                  <div>
                    <Typography align='left' variant="h5">Prénom  : {details.firstName}</Typography>
                    <Typography align='left' variant="h5">Nom : {details.lastName}</Typography>
                    <Typography align='left' variant="h5">Date de Naissance : {details.birthday}</Typography>
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
                  <div style={{width:'40%', display:'flex', justifyContent:'center',alignSelf:'center'}}>
                    <div>
                      <Typography align='left' variant="h5">phone : {details.User.phone || 'Non renseigné'}</Typography>
                      <Typography align='left' variant="h5">address : {details.User.address}</Typography>
                      <Typography align='left' variant="h5">zipCode :{details.User.zipCode}</Typography>
                      <Typography align='left' variant="h5">city : {details.User.city}</Typography>
                      <Typography align='left' variant="h5">mail : {details.User.mail}</Typography>
                      <Typography align='left' variant="h5">image : {details.User.image}</Typography>
                      
                    </div>
                  </div>
                  <div style={{width:'60%', display:'flex',justifyContent:'center',alignSelf:'center'}}>
                    <div>
                      <Typography align='left' variant="h5">id : {details.User.id}</Typography>
                      <Typography align='left' variant="h5">role :{details.User.role}</Typography>
                      <Typography align='left' variant="h5">visibility : {details.User.visibility = details.User.visibility ? "True" : "False"}</Typography>
                      <Typography align='left' variant="h5">createdAt : {new Date(details.User.createdAt).toLocaleDateString("fr-FR", options)}</Typography>
                      <Typography align='left' variant="h5">updatedAt :{new Date(details.User.updatedAt).toLocaleDateString("fr-FR", options)}</Typography>
                    </div>
                  </div>
                </div>
              </Card>
            </CardContent>
          </CardContent>
          <CardContent style={{width:'30%', padding:0, marginLeft:10}}> {/* Right */}
            <CardContent style={{width:'100%', padding:0,marginBottom:25}}>
              <Card>
                <h2 style={{alignSelf:'center'}}>Diplome : </h2>
                <Divider light />
                <div style={{display:'flex', width:'95%', marginTop:25}}>
                  <div style={{width:'100%', justifyContent:'center', padding:5}}>
                    {details.User.Diplomes.map((element,i) => {
                      return(
                        <Typography key={i} align='center' variant='h5'>{element.certificate}</Typography>
                      )
                    })}
                  </div>
                </div>
              </Card>
            </CardContent>
            <CardContent style={{width:'100%', padding:0}}>
              <Card style={{height:'100%'}}>
                <h2 style={{alignSelf:'center'}}>Disponibilites : </h2>
                <Divider light />
                <div style={{display:'flex', width:'95%', marginTop:25}}>
                  <div style={{width:'100%', justifyContent:'center', padding:5}}>
                    {details.User.Disponibilites.map((element,i) => {
                      return(
                        <Typography key={i} variant='h5'>{element.namePeriod}</Typography>
                      )
                    })}
                  </div>
                </div>
              </Card>
            </CardContent>
          </CardContent>
        </CardContent>
        <CardActions style={{marginLeft:10}}>
          <Button variant="contained" color='error' onClick={() => DeleteCandidat()}>
            <Link  
              href={{
                pathname : "/",
                query: { table : `Candidat` },
              }}>Supprimer
            </Link>
          </Button>
          <Button variant="contained" color='secondary'>
            <Link
              href={{
                pathname : "/",
                query: {
                  table : `Operation`,
                  select : `Candidat`,
                  id: router.query.id
                },
              }}>Modifier
            </Link>
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
