function Card(props){
    let cardImgStyle = {
        width: "300px",
        height: "375px",
        position: "relative",
        backgroundImage: "url(" + props.cardImg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
        backgroundPositionX: "center"
    }
    return(
        <div className="card">
            <div className="card-img" style={cardImgStyle}></div>
            <h3 className="regular-text">{props.cardText}</h3>
            <p className="light-text">{props.cardDes}</p>
        </div>
    );
}

export default Card;