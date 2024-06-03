import { styled } from "@mui/material";
import { ReactNode } from "react";

// Definindo a interface para os props
interface StyledButtonProps {
  children: ReactNode;
}

// Definindo o botão estilizado fora do componente para evitar redefinição de variável
const Button = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default StyledButton;
