import Backdrop from '../Backdrop';
import './Modal.css';

const Modal = ({ handleClose, children }) => (
    <Backdrop onClick={handleClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
                type="button"
                className="close"
                onClick={handleClose}
                ></button>
            {children}
        </div>
    </Backdrop>
);

export default Modal;