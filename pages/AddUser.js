import { Card } from '@mui/material'
import React from 'react'
import FormCandidat from '../components/Form/formCandidat'
import FormEmployeur from '../components/Form/fromEmployeur'

export default function AddUser() {

  return (
  <>
    <Card style={{display: 'flex', minHeight: '90vh', justifyContent: 'center'}}>
      <FormCandidat/>
      <FormEmployeur/>
    </Card>
  </>
  ) 
}
