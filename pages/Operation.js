import { Button, Card } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import FormCandidat from '../components/Form/formCandidat'
import FormEmployeur from '../components/Form/fromEmployeur'
import { ApiService } from './api/axios'

export default function Operation() {

  const router = useRouter()

  

  return (
  <>
      {(!router.query.select) && (
        <>
          <Button color='primary'>
            <Link
              href={{
                pathname : "/",
                query: {
                  table : `Operation`,
                  select : `Candidat`
                },
              }}>Candidat
            </Link>
          </Button>
          <Button color='primary'>
            <Link
              href={{
                pathname : "/",
                query: {
                  table : `Operation`,
                  select : `Employeur`
                },
              }}>Employeur
            </Link>
          </Button>
        </>
      )}
    
      {(router.query.select == "Candidat") && (
        <Card style={{display: 'flex',width : '50%', minHeight: '90vh', justifyContent: 'center', position:'relative',left : '25%'}}>
          <FormCandidat/>
        </Card>
      )}
      {(router.query.select == "Employeur") && (
        <Card style={{display: 'flex',width : '50%', minHeight: '90vh', justifyContent: 'center', position:'relative',left : '25%'}}>
          <FormEmployeur/>
        </Card>
      )}
  </>
  ) 
}
