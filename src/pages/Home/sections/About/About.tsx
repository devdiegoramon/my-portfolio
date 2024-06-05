import Avatar from "../../../../assets/images/pessoas/eu/minhafoto-min.png";

// Material UI
import {
  Box,
  Container,
  Grid,
  Typography,
  styled,
  IconButton,
} from "@mui/material";

import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    minHeight: "100vh",
    display: "flex",
    position: "relative",
    overflow: "hidden",
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(12), // Ajuste de margem inferior
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "55%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    position: "relative",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      margin: theme.spacing(2, 0),
    },
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: "0.5rem",
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
    bottom: theme.spacing(10), // SEMPRE ALINHAR COM HERO
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      bottom: theme.spacing(6),
    },
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
    marginTop: theme.spacing(2),
    gap: theme.spacing(2), // Espaçamento entre os botões
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: theme.spacing(1),
      gap: theme.spacing(1),
    },
  }));

  const StyledButton = styled("a")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    alignItems: "center",
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
    },
    "& .MuiTypography-root": {
      fontSize: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.2rem",
      },
    },
  }));

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  }));

  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative" textAlign="center">
              <Box
                position="absolute"
                width={"150%"}
                top={-100}
                right={0}
                zIndex={1}
              >
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
              <StyledButton
                href="https://github.com/devdiegoramon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledIconButton>
                  <GitHubIcon fontSize="inherit" />
                </StyledIconButton>
                <Typography variant="body1">GitHub</Typography>
              </StyledButton>

              <StyledButton
                href="https://www.linkedin.com/in/sdiegoramon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledIconButton>
                  <LinkedInIcon fontSize="inherit" />
                </StyledIconButton>
                <Typography variant="body1">LinkedIn</Typography>
              </StyledButton>
            </ButtonContainer>

            <Grid
              container
              display="flex"
              justifyContent="center"
              spacing={2}
              pt={3}
            ></Grid>
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
