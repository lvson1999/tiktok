function ObjB (props) {
    function renderData() {
        let {objdacap} = props;
        if(objdacap.length > 0) {
            return objdacap.map((value, key) => {
                return(
                    <li key={key}>
                        <p>-ID: {value.id}</p>
                        <p>-Name: {value.name}</p>
                        <p>-Username: {value.username}</p>   
                        <p>-email: {value.email}</p>   
                        <p>-address:</p>
                            <p>+street: {value.address.street}</p>   
                            <p>+street: {value.address.suite}</p>   
                        
                        <p>-phone: {value.phone}</p>   
                        <p>-website: {value.website}</p>   
                        <p>-company:</p>
                            <p>+street: {value.company.name}</p>   
                            <p>+street: {value.company.catchPhrase}</p>   
                        
                    </li>
                )
            })
        }

    }

    




    return (
        <div>
            <h1>Obj da cap  </h1>
            <ul>
                {renderData()}
            </ul>
            
        </div>

    )

}

export default ObjB;