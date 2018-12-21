import React, { Component } from "react";
import "./Modal.css";
import {Button, Modal, Popover, Tooltip, OverlayTrigger} from "react-bootstrap";


class Trigger extends Component {
    
    state = {
        show: false
      };
    
  
    handleClose = () => {
      this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show:true })
    }

    render() {
        const popover = (
          <Popover id="modal-popover" title="popover">
            {this.props.popoverText}
          </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">Email Form</Tooltip>;
    
        return (
          <div>
            <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            <span className="modalTitle">{this.props.title}</span>
            </Button>
    
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>{this.props.text}</h4>
                <div>
                  {this.props.textBody}
                </div>
    
                {/* <h4>{this.props.popover}</h4>
                <p>
                  there is a{' '}
                  <OverlayTrigger overlay={popover}>
                    <a href="#popover">popover</a>
                  </OverlayTrigger>{' '}
                  here
                </p> */}
    
                <h4>Send Me an Email!</h4>
                  <p>
                    Please send me an{' '}
                    <OverlayTrigger overlay={tooltip}>
                      <a href="/#emailForm">email</a>
                    </OverlayTrigger>{' '}
                    regarding any questions/interests!
                  </p>
    
                {/* <hr /> */}
    
                {/* <h4>Overflowing text to show scroll behavior</h4>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                  ac consectetur ac, vestibulum at eros.
                </p> */}
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
    };
};
  
export default Trigger;