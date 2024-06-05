import Avatar from "../../../../assets/images/pessoas/eu/minhafoto-min.png";

// Material UI
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

// INICIO DO CÓDIGO

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    padding: theme.spacing(4),
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      margin: theme.spacing(2, 0),
    },
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  }));

  const NameTypography = styled(StyledTypography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
  }));

  const JobTitleTypography = styled(StyledTypography)(() => ({
    marginTop: 0,
  }));

  const StyledIconContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    bottom: theme.spacing(8),
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      bottom: theme.spacing(4), 
    },
  }));

  const StyledIcon = styled(KeyboardDoubleArrowDownIcon)(({ theme }) => ({
    fontSize: "4rem",
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  }));

  const StyledGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
  }));

  return (
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

          <StyledGrid item xs={12} md={7}>
            <NameTypography
              color="primary.contrastText"
              variant="h1"
              textAlign="center"
            >
              Diego Ramon
            </NameTypography>
            <JobTitleTypography
              color="primary.contrastText"
              variant="h2"
              textAlign="center"
            >
              I'm Software Engineer
            </JobTitleTypography>

            <Grid
              container
              display="flex"
              justifyContent="center"
              spacing={2}
              pt={3}
            >
            </Grid>
          </StyledGrid>
        </Grid>
      </Container>
      <StyledIconContainer>
        <StyledIcon />
      </StyledIconContainer>
    </StyledHero>
  );
};

export default Hero;
