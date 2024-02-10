import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast() {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="ForecastDay">Thu </div>
            <WeatherIcon code="01d" size={32}/>
            <div className="ForecastTemperature">
              <span className="ForecastTemperature-max">19°</span>
              <span className="ForecastTemperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}