import { Card, Typography } from '@mui/material'
import React from 'react'

export default function Homepage() {
  return (
    <Card>
        <img style={{width:'100%'}} src={'https://centresocialeclate.centres-sociaux.fr/files/2022/04/image-site-internet-2022-web.jpg'}/>
        <Typography style={{margin:'1%'}} variant="h3">
        Bienvenue sur le dashboard pour le centre social Éclaté ! 
        </Typography>  
        <Typography style={{margin:'1%'}} variant="h4">
        Vous pouvez trouver sur la gauche un menu avec toutes les informations et fonctionnalité du site.
        </Typography>
        <Typography style={{margin:'1%'}} variant="h4">
        (N'hésitez pas à ouvrir ce menu pour voir plus de détails)
        </Typography>
  </Card>
  )
}
