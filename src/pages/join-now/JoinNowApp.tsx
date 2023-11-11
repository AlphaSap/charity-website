import Navbar from '../../components/navbar/Navbar.tsx'
import Footer from '../../components/footer/Footer.tsx'
import { Box, Toolbar } from '@mui/material'
import JoinForm from './components/JoinForm.tsx'

function JoinNowApp() {
  return (
    <>
      <Navbar />
      <Box>
        <Toolbar />
        <Toolbar />
        <JoinForm />
      </Box>
      <Footer />
    </>
  )
}

export default JoinNowApp 
