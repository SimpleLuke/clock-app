type Props = {
  children?: React.ReactNode;
  isNight: boolean;
};

const Card: React.FC<Props> = ({ children, isNight }) => {
  return (
    <div className={`container ${isNight ? "container--night" : ""}`}>
      {children}
    </div>
  );
};

export default Card;
