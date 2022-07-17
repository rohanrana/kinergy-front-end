import Spinner from "react-bootstrap/Spinner";
import "./loader.css";
function Loader({ message, variant, isButton }) {
  if (isButton) {
    return (
      <div>
        {message && <span>{message}</span>}
        <Spinner animation="border" role={variant ? variant : "status"} />
      </div>
    );
  } else {
    return (
      <div className="loader-custom">
        {message && <span>{message}</span>}
        <Spinner animation="border" role={variant ? variant : "status"} />
      </div>
    );
  }
}

export default Loader;
