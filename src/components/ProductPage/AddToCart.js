import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Button from "@material-ui/core/Button";
import {useSnackbar} from "notistack";
import {add} from "cart-localstorage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: 5
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function AddToCart({name, price, id, image, cod}) {
  const img = image.fluid.src
  const classes = useStyles();

  const [value, setValue] = useState(1)

  const {enqueueSnackbar} = useSnackbar()

  const handleClickVariant = (variant, value) => {
    if (value >= 2) {
      enqueueSnackbar('Produsele au fost adăugate în coș', {
        variant,
        autoHideDuration: 2200,
      })
    } else {
      enqueueSnackbar('Produsul a fost adăugat în coș', {
        variant,
        autoHideDuration: 2200,
      })
    }
  }

  return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" style={{ color: 'red' }}>
              {price} MDL
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="add" onClick={() => setValue(value + 1)}>
              <AddIcon/>
            </IconButton>
            <IconButton aria-label="value" disabled style={{ color: `rgba(0, 0, 0, 0.54)` }}>
              {value}
            </IconButton>
            <IconButton aria-label="remove" onClick={() => setValue(value - 1)} disabled={value <= 1}>
              <RemoveIcon/>
            </IconButton>
            <Button
                size={"large"}
                variant="contained"
                color="primary"
                style={{marginRight: 10}}
                onClick={() => {
                  setValue(1)
                  handleClickVariant('success', +value)
                  add({
                    id,
                    name,
                    price,
                    img,
                    cod,
                  }, +value)
                }}
            >Adaugă in coș</Button>
          </div>
        </div>
      </Card>
  );
}