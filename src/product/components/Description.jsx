    import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyle = makeStyles(() => ({
    d: {
        
        fontFamily: "'Thasadith', sans-serif",
        fontWeight: "100",
        paddingTop: 20
        
    },
  }));

const Description = (props) => {
    const classes = useStyle();
    return (
    <h1 className={classes.d}>{props.onLoad}</h1>
    );
}

export default Description;