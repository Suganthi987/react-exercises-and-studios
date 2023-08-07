import './styles.css';

function Button() {
 function onLearnMore(){
   alert("SplishSplash");
 }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;