import { useEffect } from "react"
import "./Gallery.css"

const GalleryItem = (props) => {
  let modalContainer = null
  let overlay = null

  useEffect(() => {
    modalContainer = document.getElementById(props.modalId)
    overlay = document.getElementById(props.overlayId)
  }, [])

  const toggleModal = () => {
    if (modalContainer){
      modalContainer.classList.toggle("active")
      overlay.classList.toggle("active")
    }
  }

  return(
  <>
    <li className="galleries-item" onClick={toggleModal}>
      <div className="content-card"   
      style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.imageURL})`}} 
      data-galleries-item>

        <h4 className="h4 galleries-item-title" data-galleries-title>{props.title}</h4>

        <div className="galleries-text" data-galleries-text>
          <p>{props.content}</p>
        </div>
      </div>
    </li>
    <div id={props.modalId} className="modal-container" data-modal-container>
      <div id={props.overlayId} className="overlay" onClick={toggleModal} data-overlay></div>
      <section className="galleries-modal">
        <button onClick={toggleModal} className="modal-close-btn" data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>{props.title}</h4>
          <time dateTime="1999-01-01">{props.imageDate}</time>
          <div data-modal-text>
            <p>{props.content}</p>
          </div>
          <div className="modal-img-container">
            <img className="modal-img" src={props.imageURL}/>
          </div>
        </div>
      </section>
    </div>
  </>
  )
}

function Gallery() {
  
  const content1 = "I went on a road trip from Vancouver to Calgary during Covid in 2020. This was a picture I took in front of the famous Lake Louise."

  const content2 = "Caught a crazy sunset in Toronto. I was interning for RBC back then and lived in downtown Toronto for around 4 months. Can't say I like Toronto that much, but at the time of this picture, I just escaped from Waterloo after being in school for 1 year, so Toronto felt like a breath of fresh air."

  const content3 = "This is the view from the Shanghai Citrix office at Lu Jia Zui. I was visiting a couple of other Shanghai tech company offices including Microsoft and eBay. All of the offices looks really nice, and lots of good food choices nearby."

  const content4 = "The Whiterock Pier at night. The pier is only a 10-min drive from my house, we sometimes just go and take a little walk near the shore. This was just a bit before Christmas as well so I think there was some sort of event going on. Lots of decorations that night."

  const content5 = "There is a park near the Waterloo campus, and there's a small zoo within the park. There are usually some alpacas in there, I was rocking the same hair style as my dude here in the picture back then."

  return (
    <>
      <section className="galleries">

        <h3 className="h3 galleries-title">Photo Gallery</h3>

        <ul id="gallery-list" className="galleries-list has-scrollbar">
          <GalleryItem 
          modalId="gallery-item-1" overlayId="gallery-item-1-overlay"
          imageURL="/images/gallery/lake-louise.jpg" title="Lake Louise, Alberta" content={content1}
          imageDate="July 12, 2020"/>
          <GalleryItem 
          modalId="gallery-item-2" overlayId="gallery-item-2-overlay"
          imageURL="/images/gallery/toronto-1.jpg" title="Toronto, Ontario" content={content2}
          imageDate="February 25, 2024"/>
          <GalleryItem 
          modalId="gallery-item-3" overlayId="gallery-item-3-overlay"
          imageURL="/images/gallery/stown-1.jpg" title="Shanghai, China" content={content3}
          imageDate="December 19, 2021"/>
          <GalleryItem 
          modalId="gallery-item-4" overlayId="gallery-item-4-overlay"
          imageURL="/images/gallery/whiterock-1.jpg" title="White Rock, B.C." content={content4}
          imageDate="December 22, 2023"/>
          <GalleryItem 
          modalId="gallery-item-5" overlayId="gallery-item-5-overlay"
          imageURL="/images/gallery/waterloo-1.jpg" title="Waterloo, Ontario" content={content5}
          imageDate="September 16, 2023"/>
        </ul>

      </section>
    </>
    )
}

export default Gallery;