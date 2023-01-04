function Banner(props){
    return(
        <div className="banner">
            <div className="banner-heading">
                <h3 className="banner-title">{props.bannerTitle}</h3>
                {props.buttonLink ? <a href={props.buttonLink} target="_blank" rel="noreferrer"><button className='unfilled-button'>{props.buttonText}</button></a> : null}
            </div>
            <div className='banner-text'>{props.children}</div>
        </div>
    );
}

export default Banner;