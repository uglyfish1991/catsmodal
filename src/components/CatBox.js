import React, { useState } from "react";
import Modal from 'react-modal'
import CatModal from './CatModal'

Modal.setAppElement('#root')

//absolutely no idea how to refactor this. Feel like there is something I can do. Do I make a different component to render that manages the modal? Is this handling two things? (Yes - the list of cats and the modal for each cat - but is this okay?)


const CatBox = ({ cat, index, }) => {
  return(
    <div className="cat-card" key={index}>
      <img src={cat.url} alt="A Cat" />
      <div className="cat-content">
        <p>{cat.breeds[0].name}</p>
        <CatModal cat={cat} index={index} />
    </div>
  </div>
  )

}

export default CatBox;