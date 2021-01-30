import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Page from "./components/Page";
import { dark } from './styles/Theme';

function App() {
  const [theme, setTheme] = useState(dark);
  
  return (
    <ThemeProvider theme={theme}>
      <Page setTheme={setTheme} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
