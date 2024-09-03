import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({updateinfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    
    let API_LINK = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "f5158dca632bddd9421a0c7a32f27088";

    let getWeatherInfo = async () =>{
        try{
            let response = await fetch(
                `${API_LINK}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            
            let result = {
                city:city,
                temp: jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        } catch(err){
            throw err;
        }
        }
        
       


    let handleChange = (event) =>{
        setCity(event.target.value)
    }

    let submit = async (event) =>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("")
           let newinfo = await getWeatherInfo();
           updateinfo(newinfo);
        } catch(err){
            setError(true)
        }
    

    }


    return(
      
            <form onSubmit={submit}>
            {/* <h1>Weather App</h1> */}
            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange} style={{background:"white"}}/>
            <br/><br/>
            <Button variant="contained" type="submit" style={{marginBottom:"25px"}}>Search</Button>
            {/* { error && <p style={{color:"red"}}>no such result found</p>} */}
            </form>

       
    )
}