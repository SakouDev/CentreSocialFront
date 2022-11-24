import { Button, Card, CardContent, CircularProgress, TextField } from "@mui/material"
import { Box } from "@mui/system"
import Link from "next/link"
import { useRouter } from "next/router"
import * as React from 'react'
import { useCookies } from "react-cookie"
import { ApiService } from "./api/axios"
import LoginIcon from '@mui/icons-material/Login';


export default function Login({setIsLogged}) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const router = useRouter()
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
      setLoading(false)
    }, [])
    

    function HandleSubmit(event){
        setLoading(true)
        event.preventDefault()
        const data = 
            {
                mail: event.target.mail.value,
                password: event.target.password.value,
            }
        ApiService.post(`login`, data)
        .then(element =>{
            setCookie('user', [element.data.accessToken, element.data.refreshToken], "/")
            setIsLogged(true)
            router.push('/')
        })
        
    }

    if(loading) return <CircularProgress size={100} style={{marginTop:'20%'}} />
    
    return (
        <>
        <Card>
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={HandleSubmit}
            >
                <CardContent>
                    <h1>Connexion</h1>
                    <TextField
                        required
                        id="outlined-required"
                        label="Mail"
                        type="text"
                        name="mail"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Mot de passe"
                        type="password"
                        name="password"
                    />
                </CardContent>
                <CardContent>
                    <Button variant="contained" color="success" type="submit">
                        Se connecter <LoginIcon style={{marginLeft:5}}/>
                    </Button>
                </CardContent>
            </Box>
            <img src="https://europa.eu/youth/sites/default/files/styles/eyp_esc_detail_page/public/vp/organisation/logo_cse.jpg?itok=cav_hBFF"
            />
        </Card>
        </>
    )
}