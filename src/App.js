import React, { Component } from 'react'
import recipesData from './recipes'
import Header from './Header'
import SearchBar from './SearchBar'
import DetailedRecipe from './DetailedRecipe'
import { recipesContainerStyle } from './styles'
// 1.1 Import the RecipeCard component here
import RecipeCard from './RecipeCard'

class App extends Component {
  constructor() {
    super()

    this.state = { filteredResults: [], selectedRecipe: undefined }
  }

  handleFilteredResults = (results) => this.setState({ filteredResults: results })

  handleRecipeClick = (recipe) => this.setState({ selectedRecipe: recipe })

  handleCloseRecipe = () => this.setState({ selectedRecipe: undefined })

  render() {
    const { filteredResults } = this.state
    let recipesToShow = filteredResults.length > 0 ? filteredResults : recipesData.recipes

    return (
      <div style={{ textAlign: 'center' }}>
        <Header />

        {!!this.state.selectedRecipe ? (
          <div>
            <button onClick={this.handleCloseRecipe}>Go Back</button>
            <DetailedRecipe recipeData={this.state.selectedRecipe} />
          </div>
        ) : (
          // {/* 4.1 The recipes are a bit of a mess → add the container style */}
          <div>
            <SearchBar recipesData={recipesData} onFilter={this.handleFilteredResults} />
            <div id="recipe-container" style={recipesContainerStyle}>
              {/* Loop through all the recipes */}
              {recipesToShow.map((recipe, index) => (
                // Use the "recipe" variable from the previous line to pass the recipe data
                <div key={index} onClick={() => this.handleRecipeClick(recipe)}>
                  {/* 1.2 Use the RecipeCard component here */}
                  <RecipeCard recipeData={recipe} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
