import { CSSTransition } from "react-transition-group";
import { useEffect } from "react";

const Expand: React.FC<{
  timeZone: string;
  year: number;
  week: number;
  number: number;
  isToggled: boolean;
  night: boolean;
}> = ({ timeZone, year, week, number, isToggled, night }) => {
  const containerStyle: string = night
    ? "expand-container expand-container--night"
    : "expand-container";
  const titleStyle: string = night
    ? "expand__title expand__title--night"
    : "expand__title";
  const contentStyle: string = night
    ? "expand__content expand__content--night"
    : "expand__content";

  //   console.log(containerStyle);
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={isToggled}
      timeout={600}
      classNames="expanded--card"
    >
      <div className={containerStyle}>
        <div className="expand-container--left">
          <div className="expand-container--left--top">
            <h6 className={titleStyle}>Current Timezone</h6>
            <h2 className={contentStyle}>
              {timeZone ? timeZone : "Europe/London"}
            </h2>
          </div>
          <div className="expand-container--left--bottom">
            <h6 className={titleStyle}>Day of the year</h6>
            <h2 className={contentStyle}>{year ? year : "235"}</h2>
          </div>
        </div>
        <div className="expand-container--right">
          <div className="expand-container--right--top">
            <h6 className={titleStyle}>Day of the week</h6>
            <h2 className={contentStyle}>{week ? week : "2"}</h2>
          </div>
          <div className="expand-container--right--bottom">
            <h6 className={titleStyle}>Week number</h6>
            <h2 className={contentStyle}>{number ? number : "34"}</h2>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Expand;
