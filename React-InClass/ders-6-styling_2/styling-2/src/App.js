import "./App.css";
import StyledComponent from "./components/styledComponent/StyledComponent";
import MaterialUi from "./components/materialUi/MaterialUi"
import {createTheme,ThemeProvider}  from "@mui/material"
import {orange,green} from "@mui/material/colors"
import AppBar from "./components/materialUi/appBar/AppBar"

function App() {
  const benimTemam=createTheme({
    palette:{ 
      primary:{ 
        main:orange[600]
      }, 
      secondary:{ 
        main:green[300]
      }, 
    
    }
  })


  return (
    <ThemeProvider theme={benimTemam}>
     <AppBar/>
      {/* <StyledComponent /> */}
        <MaterialUi/>
     
      </ThemeProvider>
  );
}

export default App;
