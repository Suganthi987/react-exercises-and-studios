import styles from './Description.module.css';
import React from 'react';
export default class RecipeDescription extends React.Component{
    render(){
        return (
    <div> 
      <div>
         <h1>Cinnamon Rolls</h1>
         <p>cinnamon sugar dusted bread rolled and baked in the oven!</p>
      </div>
      <RecipeAuthor />
   </div>
        )
    }
}

export const RecipeAuthor = () => {
    let authorLink= "https://www.joyofbaking.com/";
    let authorName="Stephanie Jaworski";
    let authorPhoto="https://www.joyofbaking.com/images/Stephanie2015.jpg";
    return (
   <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>www.joyofbaking.com</a> 
      </div>
   </div>
);
}

