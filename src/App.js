import './App.css';
import GlobalStyle from './style/GlobalStyle';
import BioComponent from './main/BioPage';
import { ThemeProvider } from './theme/ThemeContext';

function App() {
  return (
      <ThemeProvider>
<div>
      <GlobalStyle />
      <BioComponent />
    </div>
      </ThemeProvider>
    
  );
}

export default App;
