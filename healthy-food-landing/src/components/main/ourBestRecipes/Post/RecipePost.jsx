import './PostRecipe.css'
import './ResponsiveCardRecipe.css'

export const RecipePost = (props) => {
    return (
       <div className="postWrapper">
           <div className="leftInfo">
               <img src={props.src} alt={props.alt}/>

           </div>
           <div className="rigthInfo">
               <h2>{props.title}</h2>
               <button>See Recipe</button>
           </div>
       </div>
    )
}