import { useState } from 'react';

export default function BoardAssignment () {
   const boards = ["baking","sweetbread","yeastedwhitebread"];
   const [boardName,setName] = useState("no boards yet"); 
   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <>
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         
       { boards.map( board =>
       <option value={board}> {board} </option>)
}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
      </>
   );
}