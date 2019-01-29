

import React from 'react';

import Modal from 'react-modal';
import './register.css'
// import { groupPatternsByBaseDirectory } from 'fast-glob/out/managers/tasks';
 
const customStyles = {

  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
Modal.setAppElement('#root')
 
class Register extends React.Component {

  
  constructor(props) {
    super(props);
 
    this.state = {
      modalIsOpen: false,
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      email: '',
      zipcode: '',
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
        <button className="signUpButton" onClick={this.openModal}>Sign Up</button>
        <Modal 
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="registerModal">
          <button className="xButton" onClick={this.closeModal}>x</button>
          <h2 ref={subtitle => this.subtitle = subtitle}>Start your treasure hunting journey!</h2>
         
          <form>
           <div className="userInputTitle">First Name:</div> 
            <input  className="informationInupt"
                    placeholder="Gold"
             
                    onChange={(event, newValue) => this.setState({ firstname: newValue })}/>  
            <div className="userInputTitle">Username:</div>
            <input  className="informationInupt"
                    placeholder="KingOfThePirates"
               
                    onChange={(event, newValue) => this.setState({ username: newValue })}/>
            <br />
            <div className="userInputTitle">Last Name:</div>
            <input className="informationInupt"
                    placeholder="Roger"
                    onChange={(event, newValue) => this.setState({ lastname: newValue })}/>
            <div className="userInputTitle">Password:</div>
            <input className="informationInupt"
                    placeholder="LettersAnd123And!"
                 
                    onChange={(event, newValue) => this.setState({ password: newValue })}/>
            <br />
            <div className="userInputTitle">Email:</div>
            <input className="informationInupt"
                    placeholder="golddroger@gmail.com"
                  
                    onChange={(event, newValue) => this.setState({ email: newValue })} />
            <div className="userInputTitle">ZIP Code:</div>
            <input className="informationInupt"
                    placeholder="00000"
           
                    onChange={(event, newValue) => this.setState({ zipcode: newValue })} />
            <br />

            <button className="doneButton">Done</button>
         
          </form>
         </div>
        </Modal>
      </div>
    );
  }
}
 
export default Register;