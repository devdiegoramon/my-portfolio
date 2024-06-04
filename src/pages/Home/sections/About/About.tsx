import Avatar from "../../../../assets/images/pessoas/eu/minhafoto-min.png";

// Material UI
import { Box, Container, Grid, Typography, styled, IconButton, Button, Link } from "@mui/material";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// INICIO DO CÓDIGO

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    minHeight: "100vh",
    display: "flex",
    position: "relative",
    overflow: "hidden",
    padding: theme.spacing(4),
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "55%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    [theme.breakpoints.down("sm")]: {
      width: "50%",
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
    marginTop: theme.spacing(2),
  }));

  const InfoTypography = styled(StyledTypography)(() => ({
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
  }));

  const StyledIcon = styled(KeyboardDoubleArrowDownIcon)(({ theme }) => ({
    fontSize: "4rem",
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  }));

  const ButtonContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    gap: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }));

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    fontSize: "2rem",
    color: theme.palette.primary.contrastText,
  }));

  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative" textAlign="center">
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <StyledImg src={Avatar} />
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <NameTypography
              color="primary.contrastText"
              variant="h1"
              textAlign="center"
            >
              Diego Ramon
            </NameTypography>
            <InfoTypography
              color="primary.contrastText"
              variant="h2"
              textAlign="center"
            >
              Where to find me?
            </InfoTypography>
            
            <ButtonContainer>
              <Link href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                <StyledButton>
                  <StyledIconButton>
                    <GitHubIcon />
                  </StyledIconButton>
                  <Typography variant="body1">GitHub</Typography>
                </StyledButton>
              </Link>
              <Link href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
                <StyledButton>
                  <StyledIconButton>
                    <LinkedInIcon />
                  </StyledIconButton>
                  <Typography variant="body1">LinkedIn</Typography>
                </StyledButton>
              </Link>
            </ButtonContainer>

            <Grid
              container
              display="flex"
              justifyContent="center"
              spacing={2}
              pt={3}
            >
            </Grid>
          </Grid>
        </Grid>
        <StyledIconContainer>
          <StyledIcon />
        </StyledIconContainer>
      </Container>
    </StyledAbout>
  );
};

export default About;
