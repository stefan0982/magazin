import React           from 'react';
import { makeStyles }  from '@material-ui/core/styles';
import Card            from '@material-ui/core/Card';
import CardContent     from '@material-ui/core/CardContent';
import Typography      from '@material-ui/core/Typography';
import ContextConsumer from "../../Context";

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    color: 'black',
  }
});

export default function DeliveryCard() {
  const classes = useStyles();
  return (
      <ContextConsumer>
        {( { data } ) => {
          return (
              <Card className={classes.root}
                    variant="outlined">
                <CardContent>
                  <Typography variant="body1"
                              component="p">
                    {data.language ? ` Produsele noastre pot fi procurate la Magazinul bisericesc aflat pe adresa str. Mitropolit Varlaam
                    76
                    (intersecție cu str. Armenească, colț cu Piața centrală).` :
                        `Наши товары можно купить в Православном церковном магазине который находится по адресу ул. Митрополит Варлаам 76 (на перекрестке с ул. Арменяскэ).`}

                    <br/><br/>
                    {data.language ? `Momentan nu livrăm la domiciliu. În legătură cu acest fapt prețul tuturor produselor este din start
                    cu
                    reducere de 40-60 %.` :
                        `На текущий момент у нас нету доставки на дом. В связи с этим цены изначально, на все наши товары, со скидкой 40-60 %.`}

                  </Typography>
                </CardContent>
              </Card>
          )
        }}


      </ContextConsumer>
  );
}

