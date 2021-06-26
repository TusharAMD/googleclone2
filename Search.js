import React, {useState} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './Search.css';
function Search() {

    const [input, setInput]=useState("");
    const search = (e) =>{
      console.log(input);
      window.location.href = `https://www.google.com/search?q=${input}`
    };
    const theme = createMuiTheme({      
        typography: {
          button: {
            textTransform: 'none'
          }
        }
      });
    return (
        <div className='search'>
            <div className='search_input'>
            <SearchIcon />
            <input value={input} onChange={e => setInput(e.target.value)}/>   
            <MicIcon />
            </div>

            <div className='search_buttons'>
            <ThemeProvider theme = {theme}>
            <Button onClick={search} variant="contained" >Google Search</Button>
            <Button variant="contained" >I'm Feeling Lucky</Button>
            </ThemeProvider>
            </div>
        </div>
    );
}

export default Search;