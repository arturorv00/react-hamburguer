import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.show !== this.props.show;
  }
  render() {
    return (
      <Aux>
        <div className={this.props.show ? 'Modal show' : 'Modal'}>
          {this.props.children}
        </div>
        {this.props.show && <Backdrop clicked={this.props.modalClosed} />}
      </Aux>
    );
  }
}

export default Modal;
