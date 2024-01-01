import Card from "@mui/material/Card";
import "./CustomCard.css";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardInformation from "./cardInformation/CardInformation";
import CustomLink from "../../CustomLink";

interface CardProp {
  name: string;
  text: string;
  date: string;
  image: string;
  learnMoreRe: string;
  money: Number;
}

function CustomCard(card: CardProp) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 250, objectFit: "cover" }}
          image={card.image}
          title={card.name}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.name}
          </Typography>
          <p className="card-text-content">{card.text}</p>
          <CardInformation money={card.money} date={card.date} />
        </CardContent>
        <CardActions sx={{ marginTop: "auto" }}>
          <Button size="small">donate</Button>
          <CustomLink to={card.learnMoreRe}>
            <Button size="small">Learn More</Button>
          </CustomLink>
          <Button
            size="small"
            disabled={isDateBeforeToday(new Date(card.date))}
          >
            Join expedition
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

function isDateBeforeToday(date: Date) {
  return new Date(date.toDateString()) < new Date(new Date().toDateString());
}

export default CustomCard;
