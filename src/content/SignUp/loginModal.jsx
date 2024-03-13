import "./LoginModal.css"
export function LoginModal({isVisible, onClose, children}) {
    if (!isVisible) {
        return null
    }

    
    const handleClose = (event) => {
        if(event.target.id === "wrapper") onClose()
    }


    return (
        <div id="wrapper" onClick={handleClose} className="loginModalContainer">
            <div className="z-5">
                <div>
                <p>{children}</p>
                </div>
            </div>
        </div>
    )
}