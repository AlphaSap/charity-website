import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import CurrencyPound from "@mui/icons-material/CurrencyPound";
import FlightIcon from "@mui/icons-material/Flight";

interface CardInformationProp {
  money: Number;
  date: string;
}

function CardInformation(prop: CardInformationProp) {
  return (
    <>
      <List
        sx={{
          width: "100%",
          bgcolor: "inherit",
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CurrencyPound />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Money Raised" secondary={"£" + prop.money} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FlightIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Expedition" secondary={prop.date} />
        </ListItem>
      </List>
    </>
  );
}

export default CardInformation;
