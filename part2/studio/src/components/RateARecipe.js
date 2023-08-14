let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];



function RateARecipe(props) {
    let stars1 = 1<props.rating<5?GiveRating(props):null;
  function GiveRating(props) {
    
    return <h3>{stars[props.rating - 1]}</h3>;
    
  } 
  return stars1;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
