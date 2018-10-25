import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <input
        style={{ width: 300 }}
        
        onKeyUp={(e) => {
          let results = this.props.recipesData.recipes.filter(function(entry) {
            return entry.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
          })

          this.props.onFilter(results)
        }}
      />
    )
  }
}

export default SearchBar
