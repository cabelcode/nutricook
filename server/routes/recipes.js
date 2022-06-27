const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

const { APP_KEY, APP_ID } = process.env;
var result;


const getData = async (search) => {
    let response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    return response.data;
}   

router.get('/search/:search', async(req, res, next) => {

    let search = req.params.search;
    search = search.replace(/['"`]+/g, '');

    result = await getData(search);

    let data = [];
    result.hits.forEach( item => {
        let recipe = item.recipe;
        let uri =  recipe.uri;

        //gets the id from the uri
        let id = uri.substring(uri.indexOf('recipe_')).replace('recipe_', '');

        let newItem = {
            id: id,
            title: recipe.label,
            image: recipe.image,
            images: recipe.images,
            source: recipe.source,
            source_url: recipe.url,
            servings: recipe.yield,
            ingredientLines: recipe.ingredientLines,
            nutrients: recipe.totalNutrients

        }
        data = [...data, newItem ];
    });
    res.send({data: data});
} )

module.exports = router;