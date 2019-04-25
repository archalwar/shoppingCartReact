import React, { Component } from 'react'

export default class Filters extends Component {
  render() {
    return (
      <div className="row">
        
        <div className="col-md-4">
          {this.props.count} products available
        </div>
        <div className="col-md-4">
          <label>Sort By</label>
          <select className="form-control" value={this.props.sort}
            onChange={this.props.handleSortChange}
          >
              <option value="">Select Value</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
          </select>
        </div>
        <div className="col-md-4">
        <label>Size By</label>
          <select className="form-control" value={this.props.size}
            onChange={this.props.handleSizeChange}   >
              <option value="">ALL</option>
              <option value="x">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
          </select>
        </div>
      </div>
    )
  }
}
