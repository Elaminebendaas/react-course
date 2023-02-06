import { useState } from "react"
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [showModal, setModal] = useState(false);

    function openModal() {
        setModal(true);
    }
    function closeModal (){
        setModal(false);
    }

    return (
     
    <div className="card">
    <h2>{props.text}</h2>
    <div>
        <button className="btn" onClick={openModal}>Delete</button>
    </div>
    {showModal && <Modal onClick={closeModal}/>}
    {showModal && <Backdrop onClick={closeModal}/>}
    </div>
 
    )


}
export default Todo