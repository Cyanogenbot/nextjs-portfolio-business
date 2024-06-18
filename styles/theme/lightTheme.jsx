import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  
  palette: {
    mode: 'dark',
    borderColor: 'blue',
    primary: {
        main: '#19227c',
        light: '#514aac',
        dark: '#00004f'
    
      },
      background: {
        main: '#181818',
        cards: '#F8F0E3',
        // paper: 'rgba(255,253,226,0.63)',
      },
      text: {
        // primary: '#222222',
      },
    secondary: {
        main: '#64ffda',
        light: '#ff7539',
        dark:'#14cba8'
    }
  },
  shape: {
    borderRadius: 15,
  }, 
   typography:{

    h3:{
        fontFamily: "quincy-cf",
        fontWeight:'700',
        italic:false,
        fontStyle:"normal",
        fontSize: '5vw',
        
     },
     h5: {
       fontWeight: '400',
       italic: false,
       fontStyle: "normal",
       fontSize: '0.8rem',
       color: '#fff'
     },
    h6:{
      fontWeight:'400',
      italic:false,
      fontStyle:"normal",
      fontSize: '1rem',
  },
  h7:{
    fontWeight:'400',
    italic:false,
    fontStyle:"normal",
    fontSize: '0.8rem',
},
  
    fontFamily: 'Spline Sans Mono',
    fontWeightLight: 300,
    fontWeightRegular: 400,
   },
   overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  },
})
;

export default lightTheme;