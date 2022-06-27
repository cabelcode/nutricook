import Spinner from "../components/spinner";
function Card({ id, title, img, source, sourceURL, servings, ingredients, nutrients}) {
    console.log(sourceURL);
    return ( 
        <div className="card">
            <a href={sourceURL} className="card-img">
                <img src={img} alt={title} rel="noreferrer"  target="_blank"/>
                <div className="img-fallback">
                    <Spinner/>
                </div>
            </a>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <div className="recipe-nutrients">
                    <div className="nutrients-sugar">
                        <div>{nutrients.SUGAR.quantity.toFixed(3)} <span className="unit">g</span></div>
                        <p className="recipe-nutrients-title">Sugar</p>
                    </div>
                    <div className="nutrients-calories">
                        <div>{nutrients.ENERC_KCAL.quantity.toFixed(3)} <span className="unit">kcal</span></div>
                        <p className="recipe-nutrients-title">Calories</p>
                    </div>
                    <div className="nutrients-fat">
                        <div>{nutrients.FAT.quantity.toFixed(3)} <span className="unit">g</span></div>
                        <p className="recipe-nutrients-title">Fat</p>
                    </div>
                </div>
                <div className="recipe-other-info">
                    <p className="card-text recipe-serving">
                        Servings: {servings}
                    </p>
                    <a href={sourceURL} target='_blank' className="card-text recipe-source" rel="noreferrer" >By: {source}</a>
                </div>
            </div>
        </div>
     );
}

export default Card;