import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./infoBox.css"

export default function InfoBox({info}){
    let img = "https://plus.unsplash.com/premium_photo-1665772800584-d2da6dba1e4b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // let info={
    //     "city": "delhi",
    //     "temp": 29.05,
    //     "tempMin": 29.05,
    //     "tempMax": 29.05,
    //     "humidity": 94,
    //     "feelsLike": 36.05,
    //     "weather": "mist"
    // }

    let summer = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU=";
    let winter = "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D"
    let rainy = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D"

    return (
        <div className='info'>
            {/* <h1>Weather</h1> */}
            <div className='container'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={info.humidity > 80 ? rainy : (info.temp) > 30 ? summer:winter}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? <ThunderstormIcon/> : (info.temp) > 30 ? <WbSunnyIcon/>:<AcUnitIcon/>}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
                <div>Temperature :{info.temp}</div>
                <div>Min :{info.tempMin}&deg;C</div>
                <div>Max :{info.tempMax}&deg;C</div>
                <div>Feels Like :{info.feelsLike}&deg;C</div>
                <div>Humidity :{info.humidity}%</div>
                <div>Weather :{info.weather}</div>
                <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</div>

              </Typography>
            </CardContent>
           
          </Card>
          </div>
          </div>
    )
}