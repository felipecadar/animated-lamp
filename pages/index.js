import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import { Typography } from '@material-ui/core'
import TextLoop from "react-text-loop";

export default function Page() {

  return (

    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >

      <Grid item xs={12} >

        <h1>
          <TextLoop>

            <Typography variant="h2" component="h2" > Alemão - Herzlich Willkommen </Typography>
            <Typography variant="h2" component="h2" > Catalão - Benvinguda </Typography>
            <Typography variant="h2" component="h2" > Chinês - 歡迎 /Huānyíng </Typography>
            <Typography variant="h2" component="h2" > Espanhol - Bienvenido </Typography>
            <Typography variant="h2" component="h2" > Eslovaco - Vitajte </Typography>
            <Typography variant="h2" component="h2" > Francês - Bienvenue </Typography>
            <Typography variant="h2" component="h2" > Filipino - Maligayang pagdating </Typography>
            <Typography variant="h2" component="h2" > Finlandês - Tervetuloa </Typography>
            <Typography variant="h2" component="h2" > Húngaro - Fogadtatás </Typography>
            <Typography variant="h2" component="h2" > Holandês - Welkom </Typography>
            <Typography variant="h2" component="h2" > Inglês -  Welcome </Typography>
            <Typography variant="h2" component="h2" > Italiano - Benvenuto </Typography>
            <Typography variant="h2" component="h2" > Irlandês - Fáilte </Typography>
            <Typography variant="h2" component="h2" > Indonésio - Selamat datang </Typography>
            <Typography variant="h2" component="h2" > Japonês - ようこそ /Yōkoso </Typography>
            <Typography variant="h2" component="h2" > Maori - Nau mai </Typography>
            <Typography variant="h2" component="h2" > Norueguês - Velkommen </Typography>
            <Typography variant="h2" component="h2" > Russo - желанный /Zhelannyy </Typography>
            <Typography variant="h2" component="h2" > Sueco - Välkommen </Typography>
            <Typography variant="h2" component="h2" > Tcheco - Vítejte </Typography>
          </TextLoop>

        </h1>


      </Grid>

    </Grid>
  )
}