function Modal(props){
    function confirmHandler(){
        
    }



    return(
        <div className="modal">
            <h2>Are you sure?</h2>
            <div>
            <button className="btn btn--alt" onClick={props.onClick}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
            </div>
        </div>
    )
}
export default Modal