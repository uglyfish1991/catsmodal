import React, { useState, useContext } from "react";
import Modal from 'react-modal';
import { Context } from "../contexts/Counter";

const CatModal = ({ cat, index }) => {
    const [context,setContext] = useContext(Context)
    let favCat=cat.breeds[0].name

    const [modalIsOpen, setIsOpen] = useState(false)
    let subtitle;

    const openModal = () => {
        setIsOpen(true);
        console.log(modalIsOpen)
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed. I don't know what this means it was in the docs? Read this more. Made it bright so I could see it - still can't see it
        subtitle.style.color = '#00ff00';
    }

    const closeModal = () => {
        setIsOpen(false);
        console.log(modalIsOpen)
    }

    return (
        <>
            <button onClick={openModal}>Learn more?</button>
            <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} contentLabel="Example Modal" className="modal">
                <button onClick={closeModal} className="close-button">X</button>
                <div className="modal-box">
                    <div className="modal-row">
                        <img src={cat.url} alt="A Cat" className="modal-cat-image" />
                        <div>
                            <h3>All About The {cat.breeds[0].name}</h3>
                            <p>{cat.breeds[0].temperament}</p>
                            <p>{cat.breeds[0].description}</p>
                        </div>
                    </div>
                    <div className="modal-row-b">
                        Adopt a {cat.breeds[0].name}
                        <input type="number" min="0" max="5"></input>
                        <button type="submit">Adopt</button>
                        <button onClick={()=> setContext(favCat)}>Fav this cat</button>
                    </div>
                </div>
            </Modal>
        </>
    )

}

export default CatModal;