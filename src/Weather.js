import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="search">
        <input
          type="search"
          placeholder="Enter a city.."
          required
          className="search-input"
        />
        <input type="submit" placeholder="Search" className="search-button" />
      </form>
      <h1>New York</h1>
      <ul>
        <li>Thursday 11:00</li>
        <li> Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img className="image"
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          <span className="temperature">5</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
