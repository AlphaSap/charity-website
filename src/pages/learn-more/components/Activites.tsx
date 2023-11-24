import { Box} from "@mui/material"

function Activites(prop: { image: string }) {
  const d = "url(".concat(prop.image).concat(")");
  return (
    <>
      <Box sx={{ backgroundImage: d , width: 'auto', height: '100vh'}} >
      
      </Box>
    </>
  )
}


export default Activites
