import "./current-weather.css"

const CurrentWeather=()=>{
    return (
        <div className="weather">
            <div className="top">
                <div>
                <p className="city">Patna</p>
                <p className="weather-description">Sunny</p>
                </div>
                <img alt='weather' className="weather-icon" src="icons/01d.png"/>
            </div>
            <div className="bottom">
                <p className="temperature">34°C</p>
                <div className="details">
                    <div classname="parameter-row">
                        <span classname="parameter-label">Details</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;
