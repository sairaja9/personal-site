function SplitLanding(props){
    let titleClass = "mini-landing-title";
    let subtitleClass = "mini-landing-subtitle";
    let bgColor = "ffffff";
    let textColor = "111111";
    let totalHeight = "75vh";
    if (props.bgColor){bgColor = props.bgColor}
    if (props.textColor){textColor = props.textColor}
    if (props.titleClass){titleClass = props.titleClass}
    if (props.subtitleClass){subtitleClass = props.subtitleClass}
    if (props.totalHeight){totalHeight = props.totalHeight}
    let splitLandingStyle={
        backgroundColor: bgColor,
        color: textColor,
        height: totalHeight,
    }
    return(
        <div className="split-landing" style={splitLandingStyle}>
            <div className="split-landing-text">
                {props.title ? <h1 className={titleClass}>{props.title}</h1> : null}
                {props.subtitle ? <h1 className={subtitleClass}>{props.subtitle}</h1> : null}
                {props.arrow ? <h2 className="split-landing-arrow">⌄</h2> : null}
            </div>
            <img src={props.image} alt="split-landing-img" className="split-landing-img"/>
        </div>
    );
}

export default SplitLanding;