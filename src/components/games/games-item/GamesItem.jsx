import "./GamesItem.css"

// props needed: category, imgurl, title, postURL
function GamesItem(props) {
    return (
    <li className="game-item  active">
        <a href={props.postURL}>

            <figure className="game-img">
                <img src={props.imageURL} loading="lazy"/>
            </figure>

            <h3 className="game-title">{props.title}</h3>

            <p className="game-category">{props.category}</p>

        </a>
    </li>
    )
}

export default GamesItem;