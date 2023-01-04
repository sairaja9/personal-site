function VariableSpacer(props){
    let spaceHeight = "150px";
    if (props.spaceHeight){spaceHeight = props.spaceHeight};
    return(
        <div style={{height:spaceHeight}}> </div>
    );
}

export default VariableSpacer;