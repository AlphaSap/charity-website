import Card from "@mui/material/Card";
import "./CustomCard.css";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";

interface CardProp {
  name: string;
  text: string;
  date: string;
}

// <Grid item margin={3} flexGrow={200}>
function CustomCard(card: CardProp) {
  return (
    <> 
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image="current.png" title={card.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">donate</Button>
        </CardActions>
      </Card>
    </>
  );
  // </Grid>
}

export default CustomCard;
