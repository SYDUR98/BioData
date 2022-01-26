const BioData = (props) => {
    return(
        <div className= "BioData">
        <h2>
            CV of {props.name}
        </h2>
        <h2>
            gmail: {props.gmail}
        </h2>
        <h2>
            phone {props.phone}
        </h2>
        <h2>
            github {props.github}
        </h2>
        <ul>
            skill:{props.skills.map(skill => 
                
                <li>
                    {skill}
                </li>
                )}
        </ul>
        <ul>
            interst:{props.intersts.map(interst => 
                <li>
                    {interst}
                </li>)}
        </ul>
        </div>
    )
}

export default BioData