import './styleSheet.css';
const StyleSheet = (props) => {
const isSecenek= props.secenek ? "once":"sonra"
  
  return (
    <div>
      <img className="logo"
     src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
        alt="clarusway-logo"
      />
      <h1 className="header">Regular-style --- STYLESHEET </h1>
 
     <p className={isSecenek }>Welcome to Clarusway</p>
      </div>
  );
};

export default StyleSheet;
