import {useEffect, useRef} from "react";

function ReseferenceUSE(){
    const divRef = useRef();
    useEffect(() => {
        setTimeout(
            () =>{

                // document.getElementById('result').innerText = 200;
                divRef.current.innerText = 2000000000000;
                console.log(divRef.current);
                //ref.current gives access to the current element
            }
        ,5000)
    }, []);

    const incomeTax = 1000;

    return(
       <div>
           Your income tax returns are <div ref={divRef}>{incomeTax}</div>
       </div>

)
}
export default ReseferenceUSE