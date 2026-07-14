import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Button, Container, MenuItem } from "@mui/material";

type Props = {
  openForm: () => void;
}

export default function NavBar({openForm}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(123deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
      }}>
        <Container maxWidth='xl'>
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box>
              <Button color="inherit"
              sx={{display: 'flex', gap: 2}}>
                <Group fontSize="large" />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Reactivities</Typography>
              </Button> 
            </Box>  
            <Box sx={{display: 'flex'}}>         
              <Button 
              color="inherit"
              sx={{
                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'
                }}>
                  Activities
              </Button>
              <Button 
              color="inherit"
              sx={{
                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'
                }}>
                  About
              </Button>
              <Button 
              color="inherit"
              sx={{
                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'
                }}>
                  Contact
              </Button>
            </Box>
            <Button size="large" variant="contained" color="warning" onClick={openForm}>Create activity</Button>
          </Toolbar>
        </Container>        
      </AppBar>
    </Box>
  )
}
