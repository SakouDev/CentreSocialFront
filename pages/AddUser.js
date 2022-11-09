import React from 'react'
import CheckDispo from '../components/Checkbox/CheckDispo'
import FormCandidat from '../components/Form/formCandidat'

export default function AddUser() {


  const myArray = [1, 2, 3, 4, 5];

  const index = myArray.indexOf(2);

  const x = myArray.splice(index, 1);

  console.log(`myArray values: ${myArray}`);
  console.log(`variable x value: ${x}`);


  return (
  <>
    <FormCandidat/>
  </>
  ) 
}
