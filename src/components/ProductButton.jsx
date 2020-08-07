import React, {useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';



const useStyle = makeStyles(()=> ({
    myButton: {
      
    }

}));

function ProductButton() {
const classes= useStyle();

  const [productLine, setProductLine] = useState(["Open Fusion", "Fine"])
 
    return (

        <div>
        <style type="text/css">
    {`
    .btn-primary {
      background-color: #017179;
      color: white;
      width: 80%;
      height: 4em;
      font-size: 1.2rem;
      
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>
        <DropdownButton className={classes.myButton} id="dropdown-basic-button" title="Dropdown button" background-color="#017179">
        <Dropdown.Item href="#/action-1"></Dropdown.Item>
        {productLine.map(product => <Dropdown.Item href="#/action-1">{product}</Dropdown.Item>)}
      </DropdownButton>
      </div>
  
        
    );
}

export default ProductButton;