import React, { Component } from 'react';
import PropTypes from 'prop-types'
class ChildComponent extends Component {

  constructor(props) {
    super();
    this.getData= this.getData.bind(this);
    this.setData= this.setData.bind(this);
    this.state={
      value:[]
    }
  }

  getData()
  {

  }

  setData(details)
  {
    this.setState({value:details})
   
  }
  render() {
 
    return (
        <div>
          <h2>Child Component</h2>
          <div>
            <h3>Context Details passed from parent</h3>
            <span>color :{this.context.color}</span>
            <br/>
            <span>
              {this.context.details.map((obj,index)=>
              <span key={index}>{obj.name} : {obj.id}<br/></span>
              

              )}
            </span>
                 <h3>Details passed from parent to child by calling child function from parent using Refs</h3>
                 <span>
              {this.state.value.map((obj,index)=>
              <span key={index}>{obj.name} : {obj.id}<br/></span>
              

              )}
            </span>
           
            </div>

          </div>
    );
  }
}
ChildComponent.contextTypes = {
  color: PropTypes.string,
  details:PropTypes.array
};

export default ChildComponent;