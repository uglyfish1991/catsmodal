import React, { useState } from "react";
import Modal from 'react-modal'
import CatModal from './CatModal'

Modal.setAppElement('#root')

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