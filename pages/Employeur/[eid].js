import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ApiService } from '../api/axios'

const Post = () => {
  const router = useRouter()
  const { eid } = router.query

  const [details, setDetails] = useState(null)

  useEffect( () => {
      ApiService.get(`employeurs/${eid}`)
      .catch(error => console.log(error))
      .then(response => setDetails(response.data.data))
  }, [])

  if(details == null) return <h1>Loading...</h1>
   

  return (
    <>
      <ul>
        <h1>Employeur :</h1>

        <li>id : {details.id}</li>
        <li>UserId: {details.UserId}</li>
        <li>name : {details.name}</li>
        <li>SIRET : {details.siret}</li>
        <li>createdAt : {details.createdAt}</li>
        <li>updatedAt :{details.updatedAt}</li>

        <h1>Utilisateur : </h1>
        
        <li>id : {details.User.id}</li>
        <li>address : {details.User.address}</li>
        <li>zipCode :{details.User.zipCode}</li>
        <li>city : {details.User.city}</li>
        <li>image : {details.User.image}</li>
        <li>mail : {details.User.mail}</li>
        <li>password : {details.User.password}</li>
        <li>role :{details.User.role}</li>
        <li>visibility : {details.User.visibility = details.User.visibility ? "True" : "False"}</li>
        <li>createdAt : {details.User.createdAt}</li>
        <li>updatedAt :{details.User.updatedAt}</li>

        <ul>
          <h2>Disponibilites : </h2>
          {details.User.Disponibilites.map(element => {
            return(
              <li>{element.namePeriod}</li>
            )
          })}
        </ul>

      </ul>
    </>
  )
}
export default Post