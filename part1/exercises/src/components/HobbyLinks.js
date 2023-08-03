export default function HobbyLinks()
{
    let hobbyLinks = ["https://www.joyofbaking.com/", "https://www.nutrition.gov/topics/exercise-and-fitness"];
    return (
        <div>
            <p> Hobbies </p>
            <ol>
        <li><a href = {hobbyLinks[0]}>cooking and baking</a></li>
        <li><a href = {hobbyLinks[1]}>exercise</a></li>
        </ol>
        </div>
    );
}