import { Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/pessoas/eu/minhafoto-min.png";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: '100vh',
  }))

  const StyledImg = styled("img")(() => ({
    width: "30%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container>


          <Grid container spacing={2}>

            <Grid item xs={4}>
              <StyledImg src={Avatar} />
            </Grid>

            <Grid item xs={8}>
              <Typography color='primary' variant='h1'>Diego Ramon</Typography>
              <Typography color='primary' variant='h2'>I'm Software Engineer</Typography>
            </Grid>

          </Grid>


        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
