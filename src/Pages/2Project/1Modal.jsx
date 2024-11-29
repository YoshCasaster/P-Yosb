import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { MdVideoLibrary } from "react-icons/md";
import { FaDownload,FaMoneyBillAlt } from "react-icons/fa";
import "./1modal.css";

function Modal({ active, data, onClose }) {
  return (
    <div className={`project-detail ${active ? "active" : ""}`}>
      <div
        className={`overlay ${active ? "active" : ""}`}
        onClick={onClose}
      ></div>
      <section className="projects-modal">
        <button className="close-btn" data-modal-close-btn="" onClick={onClose}>
          <GrClose />
        </button>
        <div className="info">
          <div className="project-image">
            <img
              src={data.photo}
              alt={data.photo}
              width="80"
              data-modal-img
            ></img>
          </div>
          <div className="project-info">
            <h3 className="project-name">{data.name}</h3>
            <p className="project-text">{data.text}</p>
            <h2 className="detail-title">
              <FaArrowAltCircleRight/>
              <p>Keterangan</p>
            </h2>
            {data.property.map((item, index) => (
              <p className="project-property" key={index}>🟦 {item}</p>
            ))}
            <h2 className="detail-title">
              <FaArrowAltCircleRight/>
              <p>Spesifikasi</p>
            </h2>
            {data.learn.map((item, index) => (
              <p className="project-learn" key={index}>🟩 {item}</p>
            ))}
          </div>
          <div className="tutorial-button-container">
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tutorial-button"
            >
              <MdVideoLibrary size={25} />
              Tutorial
            </a>
          </div>
          <div className="download-button-container">
            <a
              href={data.download}
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              <FaDownload size={25} />
              Free Download
            </a>
          </div>
          <div className="langganan-button-container">
            <a
              href={data.langganan}
              target="_blank"
              rel="noopener noreferrer"
              className="langganan-button"
            >
              <FaMoneyBillAlt size={25} />
              Beli Langganan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Modal;
