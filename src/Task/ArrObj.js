function ArrObj (props) {
    function renderData() {
        let {arr} = props;
        if(arr.length > 0) {
            return arr.map((value, key) =>{
                return(
                    <li key={key}>
                        {value}
                    </li>
                )
            })
        }
    }
    // return (
    //     <div>
    //         <p>Map theo Arr</p>
    //         <ul>
    //             {renderData()}
    //         </ul>
    //     </div>
    // )



    function renderDataObj() {
        let {obj} = props;
        if(Object.keys(obj).length > 0) {
            return Object.keys(obj).map((key, index) => {
                return(
                    <li key={key}>
                        {obj[key]}
                    </li>
                )
            })
        }
    }
    return (
        <div>
            <p>Map theo obj</p>
            <ul>
                {renderDataObj()}
            </ul>
            <p>Map theo arr</p>
            <ul>
                {renderData()}
            </ul>
        </div>
    )
}


export  default ArrObj;