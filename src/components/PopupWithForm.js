function PopupWithForm({isOpen,name,children, buttonTitle, title, onClose, onSubmit}) {

    return (
        <div className={`popup popup_${name} ${isOpen ? "popup_open" : ""}`} >
            <div className="popup__container">
                <button className="popup__close" type="button" aria-label="закрыть окно" onClick={onClose}></button>
                <form className={`popup__form popup__form_type_${name}`} name={`${name}`} onSubmit={onSubmit} >
                    <h2 className={`popup__title popup__title_type_${name}`}>{title}</h2>
                    {children}
                    <button className="popup__submit" type="submit">{buttonTitle}</button>
                </form>
            </div>
        </div>
    )
}
export default PopupWithForm;