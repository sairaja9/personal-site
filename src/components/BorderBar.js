function BorderBar(props){
    let bgColor = "#333333";
    if (props.bgColor){bgColor = props.bgColor}
    let barStyle = {
        backgroundColor: bgColor
    }
    return(
        <div className="border-bar" style={barStyle}>
            <div className="border-bar-container">
                {props.children}
            </div>
        </div>
    );
}

export default BorderBar;