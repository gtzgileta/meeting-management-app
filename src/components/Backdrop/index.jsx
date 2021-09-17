import './Backdrop.css';

const Backdrop = ({ children, onClick }) => (
    <div className="backdrop" onClick={ onClick }>
        {children}
    </div>
);

export default Backdrop;