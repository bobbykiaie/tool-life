    import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyle = makeStyles(() => ({
    d: {
        
        fontFamily: "'Thasadith', sans-serif",
        fontWeight: "100",
        paddingTop: 20
        
    },
  }));

const Description = () => {
    const classes = useStyle();
    return (
    <h1 className={classes.d}>Welcome to the Applied Medical Tool Life Data Tracker. Please select your product line from the drop down button below to get started</h1>
    );
}

export default Description;