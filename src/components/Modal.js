import '../CSS/Modal.css';

//Appears when a team has less available forwards than required in the formation.
//To precise the issue, in modern football it is really simple to know who is a goalkeeper, defender and defensive midfielders.
// But for forwards, offensive midfielders and wingers, it is sometime complicated to distinguish them. 
//FPL has always kept a clear rule about it, only strikers are considered as forward, 
//so it explains why there is a lack of forwards and may create such issue.

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