import '../CSS/Modal.css';

const Modal = (props) => {
const {modalClasses,closeModal} = props;
    
return (
<div className={modalClasses}>
<div className="popup">
<div className="close" onClick={closeModal}>×</div>
<h2>For your information</h2>
<div className="content-1">
Fewer available forwards than requested on this formation, we suggest you to choose another formation !
</div>
</div>
</div>
)

}

export default Modal;