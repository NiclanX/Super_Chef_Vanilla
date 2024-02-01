fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Map over the recipes array and create HTML representation for each recipe
        const recipeHTML = data.recipes.map(recipe => {
            return `
                <a href="${recipe.name}.html">
                    <div id="heroCard">
                        <img src="${recipe.image_url}" alt="" loading="lazy">
                        <h4>${recipe.title}</h4>
                        <p>Preptime / Serving: 30mins</p>
                    </div>      
                </a>
                
            `;
        }).join(''); // Convert array of HTML strings to a single string

        // Assuming there's a container with id="recipe-container" where you want to display the recipes
        document.getElementById('sorter').innerHTML = recipeHTML;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });


