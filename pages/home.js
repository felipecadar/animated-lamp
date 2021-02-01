import React from 'react';
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Typography, Paper, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { BorderStyle } from '@material-ui/icons';
import { FormControlLabel, FormGroup, Checkbox } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    typbox: {
        margin: theme.spacing(2),
        textAlign: "center"
    },
    textbox: {
        margin: theme.spacing(2)
    },
    nquest: {
        textAlign: "center",
        fontSize: 50

    },
    divider: {
        margin: theme.spacing(2),
        // borderStyle: "solid"
    }

}));


function Home() {
    const router = useRouter()
    const classes = useStyles()

    const [session, loading] = useSession()
    if (!loading && !session) router.push('/Login')

    return (
        <Grid container direction="column" alignItems="center" justify="flex-start">
            <Grid item container direction="row" alignItems="center" justify="flex-start">
                <Grid item xs={10} md={3} className={classes.typbox}>
                    <Typography variant="h3">1 enunciado</Typography>
                    <div>
                        <TextField
                            inputProps={{ min: 0, style: { textAlign: 'center', fontSize: 40 } }} // the change is here
                            id="standard-number"
                            type="number"
                            required
                            placeholder="X"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Typography variant="h3">questões</Typography>
                    </div>
                </Grid>
                <Grid item xs={10} md={7} className={classes.textbox}>
                    <TextField

                        fullWidth
                        id="outlined-multiline-static"
                        multiline
                        rows={10}
                        rowsMax={20}
                        placeholder="João tinha {1000} fatias de pizza..."
                        variant="outlined"
                    />
                </Grid>
            </Grid>

            <Grid container direction="row" alignItems="center" justify="flex-start">
                <Grid item xs={10} md={3} className={classes.typbox}>
                    <Typography variant="h3">Função</Typography>
                </Grid>
                <Grid item xs={10} md={7} className={classes.textbox}>
                    <TextField

                        fullWidth
                        id="outlined-multiline-static"
                        multiline
                        rows={1}
                        rowsMax={20}
                        placeholder="{1000} * 2"
                        variant="outlined"
                    />
                </Grid>

            </Grid>

            <Grid container direction="row" alignItems="center" justify="flex-start">
                <Grid item xs={10} md={3} className={classes.typbox}>
                    <Typography variant="h3">Objetivos</Typography>
                </Grid>
                <Grid item xs={10} md={7} className={classes.textbox}>
                    <FormGroup column>
                        <FormControlLabel
                            control={<Checkbox checked={false} name="checkedA" />}
                            label="Inteiros"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} name="checkedA" />}
                            label="Reais"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} name="checkedA" />}
                            label="Naturais"
                        />
                    </FormGroup>
                </Grid>

            </Grid>

        </Grid>
    )
}


export default Home