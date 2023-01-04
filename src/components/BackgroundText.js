function BackgroundText(props){
    let bgColor = "#111111";
    let textColor = "#888888";
    if (props.bgColor){bgColor = props.bgColor}
    if (props.textColor){textColor = props.textColor}
    let bgStyle={
        backgroundColor: bgColor
    }
    let textStyle = {
        color: textColor
    }
    return(
        <div className="backdrop" style={bgStyle}>
            <div className = "color-text-container" style={textStyle}>
                {props.children}
            </div>
        </div>
    );
}

export default BackgroundText;