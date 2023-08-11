import { useState } from 'react';


export default function StatusChange () {

   const [notes, setNotes] = useState("");
const [recipeStatus, setRecipeStatus] = useState(false);

   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setRecipeStatus(true);

   }

   return (
      <div style={{paddingTop: "50px"}}>
                   {setRecipeStatus?
      
      (<label>  Add your notes here <input type="text" value={notes} onChange={handleChange} /></label>) :( <p>I have not tried this recipe!</p>) }
         <form onSubmit={handleSubmit}>

            
            <input type="submit" onClick = {handleSubmit}/>
         </form>

         {/* <p>My Recipe Notes aren't here!</p> */}

         {/* <p>I have not tried this recipe!</p> */}
      </div>
   );
}