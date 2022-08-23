const Expand: React.FC = () => {
  return (
    <div className="expand-container">
      <div className="expand-container--left">
        <div className="expand-container--left--top">
          <h6 className="expand__title">Current Timezone</h6>
          <h2 className="expand__content">Europe/London</h2>
        </div>
        <div className="expand-container--left--bottom">
          <h6 className="expand__title">Day of the year</h6>
          <h2 className="expand__content">295</h2>
        </div>
      </div>
      <div className="expand-container--right">
        <div className="expand-container--right--top">
          <h6 className="expand__title">Day of the week</h6>
          <h2 className="expand__content">5</h2>
        </div>
        <div className="expand-container--right--bottom">
          <h6 className="expand__title">Week number</h6>
          <h2 className="expand__content">42</h2>
        </div>
      </div>
    </div>
  );
};

export default Expand;
