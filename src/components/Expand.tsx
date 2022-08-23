import { CSSTransition } from "react-transition-group";

const Expand: React.FC<{
  timeZone: string;
  year: number;
  week: number;
  number: number;
  isToggled: boolean;
}> = ({ timeZone, year, week, number, isToggled }) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={isToggled}
      timeout={600}
      classNames="expanded--card"
    >
      <div className="expand-container">
        <div className="expand-container--left">
          <div className="expand-container--left--top">
            <h6 className="expand__title">Current Timezone</h6>
            <h2 className="expand__content">
              {timeZone ? timeZone : "Europe/London"}
            </h2>
          </div>
          <div className="expand-container--left--bottom">
            <h6 className="expand__title">Day of the year</h6>
            <h2 className="expand__content">{year ? year : "235"}</h2>
          </div>
        </div>
        <div className="expand-container--right">
          <div className="expand-container--right--top">
            <h6 className="expand__title">Day of the week</h6>
            <h2 className="expand__content">{week ? week : "2"}</h2>
          </div>
          <div className="expand-container--right--bottom">
            <h6 className="expand__title">Week number</h6>
            <h2 className="expand__content">{number ? number : "34"}</h2>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Expand;
