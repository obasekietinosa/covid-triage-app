import React from 'react'
import './SelectLanguageModal.css'

export default function PCPurchaseModal(props) {
  return (
    <div className="Modal-wrapper"
      style={{
          display: props.show ? 'block' : 'none',
          opacity: props.show ? '1' : '0'
      }}
    >
      <div className="Modal">
          <div className="Modal-body">
              <p>
                  Select Language
              </p>
              <hr/>
              <p>
                  Choisir la langue
              </p>
          </div>
          <div className="Modal-footer">
              <button onClick={ () => {props.selectLanguage("en")}} className="btn my-2 btn-primary">
                English
              </button>
              &nbsp;&nbsp;
              <button onClick={ () => {props.selectLanguage("fr")}} className="btn my-2 btn-primary">
                French
              </button>
          </div>
      </div>
    </div>
  )
}
