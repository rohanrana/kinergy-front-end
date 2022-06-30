import Spinner from 'react-bootstrap/Spinner';

function Loader({ message, variant }) {
    return (
        <div>
            {message && <span>{message}
            </span>}
            <Spinner animation="border" role={variant ? variant : "status"} />

        </div>

    );
}

export default Loader;