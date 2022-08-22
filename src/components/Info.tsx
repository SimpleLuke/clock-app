import sunIcon from "../assets/desktop/icon-sun.svg";
import downArrow from "../assets/desktop/icon-arrow-down.svg";

const Info = () => {
  return (
    <section className="info-container">
      <div className="info">
        <div className="info__heading">
          <img className="info__heading__icon" src={sunIcon} alt="Sun Icon" />
          <h4 className="info__heading__h4">GOOD MORNING, IT’S CURRENTLY</h4>
        </div>
        <div className="info__clock">
          <h1>
            <span className="info__clock__time">11:37</span>
            <span className="info__clock__zone">BST</span>
          </h1>
        </div>
        <h3 className="info__location">IN LONDON, UK</h3>
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
