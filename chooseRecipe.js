

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    let result = '';
    let bakery = bakeryA.concat(bakeryB);
    recipes.forEach(function (dish) {
        let count = 0;
        for (var i = 0; i < bakery.length; i++) {
            for (var j = 0; j < dish.ingredients.length; j++) {
                if (bakery[i] === dish.ingredients[j]) {
                    count += 1;
                    if (count === dish.ingredients.length) {
                        return result = dish.name;
                    }
                }
            }
        }
    })
    return result;
}

/*
const chooseRecipie = (bakeryA, bakeryB, recipies) => {
    return recipies.find(({ ingredients: [ ingredient1, ingredient2 ]}) => 
        bakeryA.includes(ingredient1) && bakeryB.includes(ingredient2) ||
        bakeryA.includes(ingredient2) && bakeryB.includes(ingredient1)).name
};
*/


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));