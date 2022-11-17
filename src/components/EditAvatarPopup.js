import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonText }) {
    const avatarLink = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarLink.current.value
        })
    }
    
    return (
        <PopupWithForm
            title="Обновить аватар"
            name="change-avatar"
            buttonTitle={buttonText}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <input
                className="popup__input popup__input_field_avatar-link"
                ref={avatarLink}
                type="url"
                name="avatar"
                id="avatar-link-input"
                required
                placeholder="Ссылка на картинку" />
            <span className="popup__error-message avatar-link-input-error"></span></PopupWithForm>
    )
}