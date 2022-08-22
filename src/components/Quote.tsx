import refreshIcon from "../assets/desktop/icon-refresh.svg";

const Quote = () => {
  return (
    <div className="quote-container">
      <p className="quote-container__quote">
        “The science of operations, as derived from mathematics more especially,
        is a science of itself, and has its own abstract truth and value.”
      </p>
      <p className="quote-container__author">Ada Lovelace</p>
      <button className="quote-container__refresh">
        <img src={refreshIcon} alt="Refresh Icon" />
      </button>
    </div>
  );
};

export default Quote;
