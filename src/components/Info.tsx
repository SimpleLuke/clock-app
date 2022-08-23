import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";
import downArrow from "../assets/desktop/icon-arrow-down.svg";
import upArrow from "../assets/desktop/icon-arrow-up.svg";

import worldTime from "../models/worldtime";

const Info: React.FC<{
  toggle: () => void;
  isToggled: boolean;
  expandData: (obj: {
    timeZone: string;
    year: number;
    week: number;
    number: number;
  }) => void;
}> = ({ toggle, isToggled, expandData }) => {
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

      //Expand card detail
      const expandInfo: {
        timeZone: string;
        year: number;
        week: number;
        number: number;
      } = {
        timeZone: data.timezone,
        year: data.day_of_year,
        week: data.day_of_week,
        number: data.week_number,
      };
      expandData(expandInfo);
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
    // fetchLocation();

    const interval = setInterval(() => {
      fetchLocalTimeHandler();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CSSTransition in={!isToggled} timeout={600} classNames="expanded--info">
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
              <img
                className="info__heading__icon"
                src={sunIcon}
                alt="Sun Icon"
              />
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
            IN {location ? location!.city : "London"},{" "}
            {location ? location!.country : "UK"}
          </h3>
        </div>
        <button onClick={toggle} className="toggle">
          <span className="toggle--text">{isToggled ? "Less" : "More"}</span>
          <span className="toggle--down">
            {!isToggled && <img src={downArrow} alt="Down arrow" />}
            {isToggled && <img src={upArrow} alt="Up arrow" />}
          </span>
        </button>
      </section>
    </CSSTransition>
  );
};

export default Info;
