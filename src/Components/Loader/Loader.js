import Spinner from "react-bootstrap/Spinner";
import "./loader.css";
function Loader({ message, variant, isButton }) {
  if (isButton) {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        {message && <span>{message}</span>}
        <Spinner animation="border" role={variant ? variant : "status"} />
      </div>
    );
  } else {
    return (
      <div
        style={{
          textAlign: "center",
        }}
        className="loader-custom"
      >
        {message && <span>{message}</span>}
        <Spinner animation="border" role={variant ? variant : "status"} />
      </div>
    );
  }
}

export default Loader;
