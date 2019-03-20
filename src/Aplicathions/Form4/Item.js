import React from 'react';
import PropTypes, { resetWarningCache } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

});



class ThirdForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            id: ''
        };
    }

    handleReset  = _ => {
        this.setState({
            value: ''
        })
    }
  handleChange = value => event => {
    this.setState({
        value: event.target.value,
    });
  };

  handelCheck = () => {
    const { value } = this.state;
    console.log(value)

    switch(typeof value) {
        case typeof value=== 'number':
            this.setState({
                id: '0'
            })
        // case 'value === NaN':
        //     return 'id=1';
        // case 'value === ':
        //     return 'id=2';
        // case 'value === string':
        //     return 'id = 3';
        // case 'value === 0':
        //     return 'id = 4'
        default:
         return 'error'
    };
}
  render() {
    const { classes } = this.props;
    console.log(this.state)
    return ( 
      <form className={classes.container} noValidate autoComplete="off">
        <div id="textofnumber">
            <h1>I’m thinking of a number between 1 and 100</h1>
        </div>
        <TextField
            id="outlined-name"
            label=""
            className={classes.textField}
            value={this.state.value}
            onChange={this.handleChange('value')}
            margin="normal"
            variant="outlined"
            style={{
                width: "240px"
            }}
        />
        <Button 
            variant="contained" 
            className={classes.button}
            style={{
                width: "85px",
                height: "34px",
                margin: "24px",
            }}
            onClick={this.handelCheck}
        >
            Test it
        </Button>
        <Button 
            id="reset"
            variant="contained" 
            className={classes.button}
            style={{
                width: "225px",
                height: "34px",
                margin: "24px",
            }}
        >
            Show Additional Tests
        </Button>
        <Button 
            variant="contained" 
            className={classes.button}
            onClick={this.handleReset}
            style={{
                width: "85px",
                height: "34px",
                margin: "24px",
            }}
        >
            Reset 
        </Button>

      </form>
    );
  }
}

ThirdForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThirdForm);
