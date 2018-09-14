import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import PropTypes from 'prop-types'

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
          details:[{name:'rohit',id:2},{name:'rahul',id:5}]
        }
        this.getDetailsFrmChild= React.createRef();
      
      }

      getChildContext() {
        return {
          color: "purple",
          details:this.state.details
        };
      } 
      componentDidMount()
      {
        
        this.getDetailsFrmChild.current.setData(this.state.details)
      }
      
  
      render() {
        return (
            <div>
           <h1>Main Component</h1>
           <ChildComponent ref={this.getDetailsFrmChild}/>
        </div>
        );
      }
}

ParentComponent.childContextTypes = {
  color: PropTypes.string,
  details:PropTypes.array
};

export default ParentComponent;