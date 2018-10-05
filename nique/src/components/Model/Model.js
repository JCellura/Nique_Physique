import React, { Component } from "react";
import "./Model.css";
import {Button, Modal} from "react-bootstrap";


class Trigger extends Component {
    
    state = {
        show: false
      };
    
  
    handleHide = () => {
      this.setState({ show: false });
    }

    render() {
      return (
        <div className="modal-container">
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.setState({ show: true })}
          >
            12 Week program
          </Button>
  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
            style={{color:"black", width:"fit-content"}}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Program Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li>Nutrition program designed for your current weight and body composition.</li>
                    <li>HIIT/LISS Cardiovascular Endurance Plan</li>
                    <li>Full Detailed Workout Program</li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
export default Trigger;