import { useEffect, useState } from "react";

import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";
import downArrow from "../assets/desktop/icon-arrow-down.svg";

import worldTime from "../models/worldtime";

const Info = () => {
  const [timeData, setTimeData] = useState<worldTime>();
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState<{ city: string; country: string }>();

  //Fetch Time from API
  const fetchLocalTimeHandler = async () => {
    const response = await fetch("http://worldtimeapi.org/api/ip");
    const data = await response.json();

    if (response.ok) {
      const { datetime, client_ip } = data;
      setTimeData(data);

      setIp(client_ip);

      //Clock time
      const date = new Date(datetime);
      setTime(
        date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );

      //Greetings

      const hour = Number(
        date.toLocaleTimeString("en-US", { hour: "2-digit", hour12: false })
      );

      if (hour >= 5 && hour < 12) {
        setGreeting("Morning");
      } else if (hour >= 12 && hour < 18) {
        setGreeting("Afternoon");
      } else {
        setGreeting("Evening");
      }
    } else {
      setTime("12:00");
      setGreeting("Afternoon");
    }
  };

  //Fetch location from API

  const fetchLocation = async () => {
    const response = await fetch(
      `https://api.ipbase.com/v2/info?apikey=mxlNYo3o6QzD0eVEzurJlMJLFRw2ExCfqqZ0VKCi&language=en&ip=${ip}`
    );
    const data = await response.json();

    if (response.ok) {
      console.log(data);

      const city = data.data.location.city.name;
      const country = data.data.location.country.name;

      console.log(city, country);
      setLocation({ city, country });
    } else {
      setLocation({ city: "London", country: "UK" });
    }
  };

  useEffect(() => {
    fetchLocalTimeHandler();
    fetchLocation();

    const interval = setInterval(() => {
      fetchLocalTimeHandler();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="info-container">
      <div className="info">
        <div className="info__heading">
          {greeting === "Evening" ? (
            <img
              className="info__heading__icon"
              src={moonIcon}
              alt="Moon Icon"
            />
          ) : (
            <img className="info__heading__icon" src={sunIcon} alt="Sun Icon" />
          )}
          <h4 className="info__heading__h4">
            GOOD {greeting ? greeting : "AFTERNOON"}, IT’S CURRENTLY
          </h4>
        </div>
        <div className="info__clock">
          <h1>
            <span className="info__clock__time">{time ? time : "12:00"}</span>
            <span className="info__clock__zone">
              {timeData ? timeData!.abbreviation : "BST"}
            </span>
          </h1>
        </div>
        <h3 className="info__location">
          IN {location?.city}, {location?.country}
        </h3>
      </div>
      <button className="toggle">
        <span className="toggle--text">More</span>
        <span className="toggle--down">
          <img src={downArrow} alt="Down arrow" />
        </span>
      </button>
    </section>
  );
};

export default Info;
