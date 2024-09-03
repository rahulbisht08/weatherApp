import InfoBox from "./infoBox";
import SearchBox from "./searchBox";
import { useState } from "react";

export default function Weather(){
    const [weatherinfo,setWeatherinfo] = useState({
        "city": "faridabad",
        "temp": 29.05,
        "tempMin": 29.05,
        "tempMax": 29.05,
        "humidity": 94,
        "feelsLike": 36.05,
        "weather": "mist"
    })

    let updateinfo = (newinfo) =>{
        setWeatherinfo(newinfo);
    }


    return(
        <div className="weather">
            <h1>City-Weather</h1>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weatherinfo}/>

        </div>
    )
}