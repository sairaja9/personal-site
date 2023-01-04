function SubNav(props){
    return(
        <div className="sub-nav">
            <div className="sub-nav-container">
                {props.children}
            </div>
        </div>
    );
}

export default SubNav;