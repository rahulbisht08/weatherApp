import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchBox from './searchBox';
import InfoBox from './infoBox';
import Weather from './weather';

function App() {

  // let track = () =>{
  //   console.log("traked");
  // }

  return (
    <>
    <div>
     
       {/* <SearchBox/>
       <InfoBox/> */}

       <Weather/>
    </div>
   
    </>
  )
}

export default App


 {/* <h1>Material Ui</h1>
      <Button variant="contained" startIcon={<DeleteIcon />}
        onClick={track}>Click me</Button>
      &nbsp;
      &nbsp;

      <Button variant="contained" startIcon={<DeleteIcon />}
        onClick={track} disabled>Click me</Button>
       */}
