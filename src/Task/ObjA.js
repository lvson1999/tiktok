function ObjA(props) {

    function renderDataObj() {
        let {objdoncap} = props;
        if(Object.keys(objdoncap).length > 0) {
                return (
                    <li>
                        <p>-ID: {objdoncap.id}</p>
                        <p>-Name: {objdoncap.name}</p>
                        <p>-Username:  {objdoncap.username}</p>
                        <p>-Email:  {objdoncap.email}</p>
                        <p>-address: </p>
                        <p>+street: {objdoncap.address.street}</p>
                        <p>+suite: {objdoncap.address.suite}</p>
                        <p>-phone: {objdoncap.phone} </p>
                        <p>-website: {objdoncap.website} </p>
                        <p>-company:  </p>
                        <p>+name: {objdoncap.company.name} </p>
                        <p>+catchPhrase: {objdoncap.company.catchPhrase} </p>

                        
                    </li>
                )
          
        }
    }




    return (
        <div>
            <h1>Obj don cap</h1>
            <ul>
                {renderDataObj()}
            </ul>
        </div>
    )
}

export default ObjA;