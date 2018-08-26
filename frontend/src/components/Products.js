import React, { Component } from 'react'
import { connect } from 'react-redux';

import {getProducts} from '../actions/index';

class Products extends Component {
    componentWillMount = () => {
        this.props.getProducts().then(res => {
            console.log(res);
        })
    }
  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    )
  }
}
function mapStateToProps(state) {
    return {
        getProducts: state.getProducts
    }
}
export default connect(mapStateToProps, {getProducts})(Products);