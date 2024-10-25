import { useState, useEffect } from "react";
import "./Gallery.css"

function Gallery() {
  // gallery variable
  const [galleriesItem, setGalleriesItem] = useState([])
  const [modalContainer, setModalContainer] = useState([])
  const [modalCloseBtn, setModalCloseBtn] = useState([])
  const [overlay, setOverlay] = useState([])

  // modal variable
  const [modalTitle, setModalTitle] = useState([])
  const [modalText, setModalText] = useState([])

  // modal toggle function
  const galleriesModalFunc = function () {
    modalContainer[0].classList.toggle("active");
    overlay[0].classList.toggle("active");
  }

  useEffect(() => {
    setGalleriesItem(document.querySelectorAll("[data-galleries-item]"))
    setModalContainer(document.querySelectorAll("[data-modal-container]"))
    setModalCloseBtn(document.querySelectorAll("[data-modal-close-btn]"))
    setOverlay(document.querySelectorAll("[data-overlay]"))

    setModalTitle(document.querySelectorAll("[data-modal-title]"))
    setModalText(document.querySelectorAll("[data-modal-text]"))
  }, [])

  // add click event to all modal items
  for (let i = 0; i < galleriesItem.length; i++) {

    galleriesItem[i].addEventListener("click", function () {

      modalTitle[0].innerHTML = this.querySelector("[data-galleries-title]").innerHTML;
      modalText[0].innerHTML = this.querySelector("[data-galleries-text]").innerHTML;

      galleriesModalFunc();

    });

  }

  // add click event to modal close button
  if(modalCloseBtn.length > 0){ modalCloseBtn[0].addEventListener("click", galleriesModalFunc); }
  if(overlay.length > 0){ overlay[0].addEventListener("click", galleriesModalFunc); }

    return (<>
        <section className="galleries">

          <h3 className="h3 galleries-title">Photo Gallery</h3>

          <ul className="galleries-list has-scrollbar">

            <li className="galleries-item">
              <div className="content-card" data-galleries-item>

                <h4 className="h4 galleries-item-title" data-galleries-title>Daniel lewis</h4>

                <div className="galleries-text" data-galleries-text>
                  <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                  </p>
                </div>

              </div>
            </li>

            <li className="galleries-item">
              <div className="content-card" data-galleries-item>

                <h4 className="h4 galleries-item-title" data-galleries-title>Jessica miller</h4>

                <div className="galleries-text" data-galleries-text>
                  <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                  </p>
                </div>

              </div>
            </li>

            <li className="galleries-item">
              <div className="content-card" data-galleries-item>

                <h4 className="h4 galleries-item-title" data-galleries-title>Emily evans</h4>

                <div className="galleries-text" data-galleries-text>
                  <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                  </p>
                </div>

              </div>
            </li>

            <li className="galleries-item">
              <div className="content-card" data-galleries-item>

                <h4 className="h4 galleries-item-title" data-galleries-title>Henry william</h4>

                <div className="galleries-text" data-galleries-text>
                  <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                  </p>
                </div>

              </div>
            </li>

          </ul>

        </section>



        <div className="modal-container" data-modal-container>

          <div className="overlay" data-overlay></div>

          <section className="galleries-modal">

            <button className="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-content">

              <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

              <time dateTime="2021-06-14">14 June, 2021</time>

              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>

          </section>

        </div>
    </>
    )
}

export default Gallery;