import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/pessoas/eu/minhafoto-min.png";

// ICONES
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden", 

    [theme.breakpoints.down('sm')]: {  //MOBILE
      padding: theme.spacing(2),
      
    },
    [theme.breakpoints.down('xs')]: {  //MOBILE
      padding: theme.spacing(2),
     
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    


    [theme.breakpoints.down('sm')]: { //MOBILE
      width: "60%",
      margin: theme.spacing(2, 0),
      
    },
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
     
    },
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <StyledTypography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                Diego Ramon
              </StyledTypography>
              <StyledTypography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                I'm Software Engineer
              </StyledTypography>

              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={2}
                pt={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={()=> console.log("github")}>
                    <GitHubIcon />
                    <Typography>GitHub</Typography>
                  </StyledButton>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={()=> console.log("linkedln")} >
                    <LinkedInIcon />
                    <Typography>Linkedln</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
