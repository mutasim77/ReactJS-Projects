import "./header.css";
import "./ResponsiveHeader.css";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Header = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <header>
      <div className="wraper">
        <div className="logo">
          <h1>Healthy Food</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">HEALTHY RECIPES</a>
            </li>
            <li>
              <a href="/">BLOG</a>
            </li>
            <li>
              <a href="/">JOIN</a>
            </li>
          </ul>
          <div className="btn">
            <button type="text" onClick={openModal}>REGISTER</button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="modal">
                <h1>Register your recipe</h1>
                <label>Your Recipe</label>
                <input type="text" />
                <label>Author's name</label>
                <input type="text" />
                <button type="text" className='modalBtn' onClick={() => { 
                  alert('recipe recevied');
                  closeModal();
                }}>REGISTER RECIPE</button>
              </div>
              </Modal>
          </div>
        </nav>
      </div>
    </header>
  );
};
