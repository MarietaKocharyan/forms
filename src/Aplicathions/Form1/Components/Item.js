import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import countries from './Country-capital';

import images from '../images'


const styles = theme => ({
  container: {
    display: 'block',
    flexWrap: 'wrap',
  },
  button: {
    margin: '23px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});
const recapth = images[Math.floor(Math.random() * images.length)];
class FirstForm extends React.Component {
  state = {
    city: 'Yerevan',
    name: 'Test123',
    phonenumber: 'number',
    password: 'secretpassword',
    confirmpass: 'secretpassword'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form 
        className={classes.container}
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          alignItems: "center",
        }}
        >
        <TextField
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            maxWidth: "400px",
            minWidth: "400px",
          }}
        />

        <TextField
          label="Phone number"
          value={this.state.phonenumber}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type='onlytext'
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            maxWidth: "400px",
            minWidth: "400px",
          }}
        />

        <TextField
          id="outlined-email-input"
          label="Email"
          value={this.state.email}
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          helperText="(Please enter valid Email)"
          style={{
            marginLeft: "48px",
            marginRight: "8px",
            maxWidth: "400px",
            minWidth: "445px",
          }}
        />

        <TextField
          id="outlined-password-input"
          label="Pasword"
          value={this.state.password}
          className={classes.textField}
          type="password"
          onChange={this.handleChange('password')}
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            maxWidth: "400px",
            minWidth: "400px",
          }}
        />
        <TextField
          label="Confirm Password"
          value={this.state.confirmpass}
          className={classes.textField}
          type="text"
          onChange={this.handleChange('confirmpass')}
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          type="text"
          style={{
            marginLeft: "48px",
            marginRight: "8px",
            maxWidth: "400px",
            minWidth: "445px",
          }}
        />
      
        <TextField
          id="outlined-select-currency-native"
          select
          label="Country"
          className={classes.textField}
          value={this.state.city}
          onChange={this.handleChange('city')}
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            maxWidth: "400px",
            minWidth: "400px",
          }}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Select your country"
          margin="normal"
          variant="outlined"
        >
          {countries.map(option => (
            <option key={option.country} value={option.city}>
              {option.city}
            </option>
          ))}
          {}
        </TextField>
        <div className="footer">
        <img 
        style={{
          marginLeft: "50px",
        }}
        src={recapth}
        >
        </img>
        <TextField
          id="outlined-bare"
          className={classes.textField}
          defaultValue=""
          margin="normal"
          variant="outlined"
          style={{
            marginLeft: "22px",
            maxWidth: "400px",
            flexDirection: "column",
            helperText: "color: #f44336",
          }}
          helperText="Please enter the 
           text exactly as shwon."
        >
        </TextField>
        <Button
          variant="contained" 
          color="primary" 
          className={classes.button}
          style={{
            marginRight: "-167px"
          }}
          >
        Registr
        </Button>
        </div> 
    </form>
    );
  }
}

FirstForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FirstForm);