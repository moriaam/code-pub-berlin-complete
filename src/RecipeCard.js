import React, { Component } from 'react'
import { recipeCardStyle, recipeCardImageStyle } from './styles'
import placeholderImage from './react-logo.png'

class RecipeCard extends Component {
  render() {
    return (
      // 4.2 Much better! But still not very nice → add the card’s style here`
      <div style={recipeCardStyle}>
        {/* 2 Display the placholder image */}
        {/* <img src={placeholderImage} /> */}
        
        {/* 3.1 Present the recipe's title */}
        {this.props.recipeData.title}
        {/* 3.2  Present the recipe's image */}
        {/* 4.3 style the images */}
        <img src={this.props.recipeData.image} style={recipeCardImageStyle} />

      </div>
    )
  }
}

export default RecipeCard
