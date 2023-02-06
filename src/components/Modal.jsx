function Modal(props){
    return(
        <div className="modal">
            <h2>Are you sure?</h2>
            <div>
            <button className="btn btn--alt" onClick={props.onClick}>Cancel</button>
            <button className="btn">Confirm</button>
            </div>
        </div>
    )
}
export default Modal