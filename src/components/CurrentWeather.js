import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloud,
    faWind,
    faBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faSmog,
} from '@fortawesome/free-solid-svg-icons';

function CurrentWeather(props) {

    let weatherIcon = null;
    if (props.main === 'Thunderstorm') {
        weatherIcon = <FontAwesomeIcon icon={faBolt} />;
    } else if (props.main === 'Drizzle') {
        weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if (props.main === 'Rain') {
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if (props.main === 'Snow') {
        weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
    } else if (props.main === 'Clear') {
        weatherIcon = <FontAwesomeIcon className='text-warning' icon={faSun} />;
    } else if (props.main === 'Clouds') {
        weatherIcon = <FontAwesomeIcon icon={faCloud} />;
    } else {
        weatherIcon = <FontAwesomeIcon icon={faSmog} />;
    }

    return (

        <div>

            <h5 className="text-danger pt-3 text-center">{props.error}</h5>
            {props.city &&
                <div className="row my-5 font__color">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 py-4 box__color text-center">
                        {props.city && <h2 className="">{props.city}, {props.country}</h2>}
                        {props.date && <h4>{props.date}</h4>}
                        <div className="row">
                            <div className="col-6">
                                {props.icon && <div className="text-center text-white text__size">{weatherIcon}</div>}</div>
                            <div className="col-6 my-auto">
                                {props.temperature && <h1 className="">{Math.round(props.temperature)}°C</h1>}
                                {props.feelsLike && <h5>Feels like: {Math.round(props.feelsLike)}°C</h5>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {props.description && <h2 className="weather__description"> {props.description}</h2>}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 py-4 font-italic">
                        <div className="row">
                            <div className="col-6 my-auto">
                                {props.humidity && <div className="img__size h5 mx-auto">
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const humidity = isVisible ? props.humidity : 0;
                                            return (
                                                <CircularProgressbarWithChildren
                                                    value={humidity}
                                                    styles={buildStyles({
                                                        strokeLinecap: 'round',
                                                        textSize: '16px',
                                                        pathTransitionDuration: 0.5,
                                                        textColor: '#164C6E',
                                                        trailColor: '#d6d6d6',
                                                        backgroundColor: '#164C6E',

                                                    })}

                                                >
                                                    <div className="my-auto text-center">
                                                        <p>Humidity:</p>
                                                        <p>{humidity} %</p>
                                                    </div>
                                                </CircularProgressbarWithChildren>

                                            );
                                        }}
                                    </VisibilitySensor>
                                </div>}
                            </div>

                            <div className="col-6 text-left py-2 pl-4">
                                {props.wind && <p className="h5"> <FontAwesomeIcon icon={faWind} /> {props.wind} mph</p>}
                                {props.clouds && <p className="h5"><FontAwesomeIcon icon={faCloud} /> {props.clouds} %</p>}
                                {props.sunrise && <p className="h5"> Sunrise: {props.sunrise}</p>}
                                {props.sunset && <p className="h5"> Sunset: {props.sunset}</p>}
                            </div>
                        </div>
                    </div>
                </div>

            }

        </div >
    )
}

export default CurrentWeather;
