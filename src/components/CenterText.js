function CenterText(props){
    return(
        <div className="center-container">
            <div className="center-text">
                {props.children}
            </div>
        </div>
    );
}

export default CenterText;