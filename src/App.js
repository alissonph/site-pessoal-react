import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Page from "./components/Page";
import { light, dark } from './styles/Theme';

function App() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
      setTheme(theme === dark ? light : dark);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Page toggleTheme={toggleTheme} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
