import {React} from "react";
import { Form, Accordion } from "react-bootstrap";

const Addcouponstep = () => {

    return (
      <>
        <h5>Service Categories</h5>
        <p>Coupon will be valid on the following Service</p>
          <Form>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Therapy Services <span className="all_select">Select All</span></Accordion.Header>
                
                <Accordion.Body>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Athletic Therapy / Physiotherapy" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                  <Form.Check type="checkbox" label="Vestibular Rehabilitation " />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                  <Form.Check type="checkbox" label="Video Biomechanical Analysis" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox3">
                  <Form.Check type="checkbox" label="Orthotics and Bracing" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox4">
                  <Form.Check type="checkbox" label="Telemedicine/Telerehab " />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox5">
                  <Form.Check type="checkbox" label="External Therapy " />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox6">
                  <Form.Check type="checkbox" label="Work Fitness Assessment " />
                </Form.Group>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Performance Training</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Concussion Management</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Wellness Services</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                    <Accordion.Header>Classes</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                    <Accordion.Header>Physician Services</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                    <Accordion.Header>Massage Therapy</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
            </Accordion>
          </Form>
        </>
    )
}

export default Addcouponstep;