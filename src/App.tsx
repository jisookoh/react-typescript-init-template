import { ThemeProvider } from "styled-components";
import AppRoutes from "@routes/index";
import theme from "@styles/theme";
import GlobalStyle from "@styles/globalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
