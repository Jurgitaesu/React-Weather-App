import React from 'react'

function Forecast(props) {
    return (

        <div className="text-center font__color">
            {
                props.date1 &&
                <div className="h5">Four days forecast:</div> &&
                <div className="row justify-content-center my-5">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 box__color m-3 py-2">
                        {props.date1 && <p className="h4">{props.date1}</p>}
                        {props.icon1 && <img className="img-fluid" src={`http://openweathermap.org/img/w/${props.icon1}.png`} alt="weather icon" />}
                        {props.temperature1 && <p className="h5">{Math.round(props.temperature1)}°C</p>}
                        {props.description1 && <p className="h5">{props.description1}</p>}
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 box__color m-3 py-2">
                        {props.date2 && <p className="h4">{props.date2}</p>}
                        {props.icon2 && <img className="img-fluid" src={`http://openweathermap.org/img/w/${props.icon2}.png`} alt="weather icon" />}
                        {props.temperature2 && <p className="h5">{Math.round(props.temperature2)}°C</p>}
                        {props.description2 && <p className="h5">{props.description2}</p>}
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 box__color m-3 py-2">
                        {props.date3 && <p className="h4">{props.date3}</p>}
                        {props.icon3 && <img className="img-fluid" src={`http://openweathermap.org/img/w/${props.icon3}.png`} alt="weather icon" />}
                        {props.temperature3 && <p className="h5">{Math.round(props.temperature3)}°C</p>}
                        {props.description3 && <p className="h5">{props.description3}</p>}
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 box__color m-3 py-2">
                        {props.date4 && <p className="h4">{props.date4}</p>}
                        {props.icon4 && <img className="img-fluid" src={`http://openweathermap.org/img/w/${props.icon4}.png`} alt="weather icon" />}
                        {props.temperature4 && <p className="h5">{Math.round(props.temperature4)}°C</p>}
                        {props.description4 && <p className="h5">{props.description4}</p>}
                    </div>
                </div>

            }
        </div >

    )
}

export default Forecast;
