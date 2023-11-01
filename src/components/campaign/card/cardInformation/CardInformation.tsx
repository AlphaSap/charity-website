import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import CurrencyPound from "@mui/icons-material/CurrencyPound";
import FlightIcon from '@mui/icons-material/Flight';


function CardInformation() {
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
        <ListItemText primary="Money Raised" secondary="£3000" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FlightIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Expedition" secondary="July 20, 2014" />
      </ListItem>
      </List>
    </>
  );
}

export default CardInformation;
