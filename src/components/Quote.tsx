import { useState, useEffect, useCallback } from "react";
import refreshIcon from "../assets/desktop/icon-refresh.svg";
import CSSTransition from "react-transition-group/CSSTransition";

const Quote: React.FC<{ isToggled: boolean }> = ({ isToggled }) => {
  const [quote, setQuote] = useState<{
    id: string;
    author: string;
    en: string;
  }>({ id: "", author: "", en: "" });
  const [isAnimated, setIsAnimated] = useState(false);

  const fetchQuoteHandler = useCallback(async () => {
    setIsAnimated(false);
    const response = await fetch(
      "https://programming-quotes-api.herokuapp.com/Quotes/random"
    );
    const data = await response.json();

    setQuote(data);
    setIsAnimated(true);
  }, []);

  useEffect(() => {
    fetchQuoteHandler();
  }, [fetchQuoteHandler]);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={!isToggled}
      timeout={600}
      classNames="expanded--quote"
    >
      <div className="quote-container">
        <CSSTransition in={isAnimated} timeout={2000} classNames="fade">
          <div>
            <p className="quote-container__quote">{quote.en}</p>
            <p className="quote-container__author">{quote.author}</p>
          </div>
        </CSSTransition>

        <button
          onClick={fetchQuoteHandler}
          className="quote-container__refresh"
        >
          <img src={refreshIcon} alt="Refresh Icon" />
        </button>
      </div>
    </CSSTransition>
  );
};

export default Quote;
