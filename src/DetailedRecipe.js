import React, { Component } from 'react'
import { recipeCardStyle, recipeCardImageStyle } from './styles'

class DetailedRecipe extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: 20 }}>
        <h1>{this.props.recipeData.title}</h1>

        <div style={{ textAlign: 'left', flexDirection: 'row', marginBottom: 10 }}>
          {this.props.recipeData.labels.map((item, index) => (
            <span
              style={{
                backgroundColor: '#f7ded4',
                padding: 5,
                marginRight: 10,
                borderRadius: 6,
              }}
              key={index}
            >
              {item}
            </span>
          ))}
        </div>

        <img style={{ marginBottom: 10, height: 300 }} src={this.props.recipeData.image} />

        <h3>Ingredients</h3>
        <div style={{ textAlign: 'left' }}>
          {this.props.recipeData.ingredients.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <h3>Instructions</h3>
        <div style={{ textAlign: 'left' }}>
          {this.props.recipeData.directions.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default DetailedRecipe
