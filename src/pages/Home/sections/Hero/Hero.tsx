import { Button, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/pessoas/eu/minhafoto-min.png";

// ICONES
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: '100vh',
  }))

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container>


          <Grid container spacing={2}>

            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography color='primary' variant='h1' textAlign='center'>Diego Ramon</Typography>
              <Typography color='primary' variant='h2' textAlign='center'>I'm Software Engineer</Typography>
              <Button>
              <GitHubIcon/>
                 GitHub</Button>
              <Button>
                <LinkedInIcon/> 
                    Linkedin</Button>
            </Grid>

          </Grid>


        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
