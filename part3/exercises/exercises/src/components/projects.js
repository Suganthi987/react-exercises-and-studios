import data from "./../data.json";
import { useState } from "react";


function MyProject(){
    const [index, setIndex] = useState(0);
    const data1 = data;
    const data2 = data[index];
    function handleClick() {
        if (index < data.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }
    return (
        <>
        <button onClick = {handleClick}>Next</button>
        <div>
        <h1>JSON Data</h1>
        <p> {data2.recipename}</p>
        <p> {data2.author}</p>
        <p> {data2.photoUrl}</p>
        <p> {data2.alt}</p>
        </div>
        
      </>
    )

}

export default MyProject;