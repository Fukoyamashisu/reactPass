import React, { Component } from 'react';
import { Button, Input, Form, InputGroup, InputGroupAddon, InputGroupText,Progress } from 'reactstrap';
import '../scss/password.sass';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {button} from '../actions/index';


class Password extends Component {

  constructor(props) {
    super(props);
    this.indicator = this.indicator.bind(this);
    this.check = this.check.bind(this);
  }


  indicator = e =>{
    const text = e.target.value;
    const passStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[$@$!%*?&§£])[A-Za-z\d$@$!%*?&£§]{7,}/.exec(text);
    const passMedium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*)[a-zA-Z\d]{7,}$/.exec(text);
    const passLight = /^[a-z\d]{1,5}$/.exec(text);
    const length = e.target.value.length;
    const object = {
      button:true,
      light:false,
      medium:false,
      strong:false,
      length: length,
      value:0
    };
    if(passStrong !== null){
      object.strong = true;
      object.value = 100;
    }else if(passMedium !== null){
      object.medium = true;
      object.value = 66;
    }else if(passLight !== null){
      object.light = true;
      object.value = 33;
    }else{
      object.button = false;
    }
    this.props.button(object);
  }

  check = e =>{
    e.preventDefault();
    alert("Mot de Passe accepté");
    document.getElementsByTagName('form')[0].reset();
  }



  render() {
    console.log();

    return (
      <div>
        <Form onSubmit={e => this.check(e)}>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <InputGroup>
              <Input id="Password" placeholder="Enter password" onChange={e =>this.indicator(e)} />
              <InputGroupAddon addonType="append">
                <InputGroupText>{this.props.pass.length} char</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            {this.props.pass.strong &&
            <small className="form-text passwordHelp">Mot de passe fort !</small>
            }
            {this.props.pass.medium &&
            <small className="form-text passwordHelp">Mot de passe moyen !</small>
            }
            {this.props.pass.light &&
            <small className="form-text passwordHelp">Mot de passe faible !</small>
            }
          </div>
          <div>
            <Progress value={this.props.pass.length} color="warning"/>
          </div>
          <div>
            <Progress animated color="danger" value={this.props.pass.value} />
          </div>
          {this.props.pass.submit &&
          <div className="row justify-content-center">
            <Button id="passButton" type="submit" className="btn display">Submit</Button>
          </div>
          }
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state){

  return{
    pass:state.pass
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({button:button}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Password);
