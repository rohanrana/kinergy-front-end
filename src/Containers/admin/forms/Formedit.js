import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';



const Formedit = () => {

return (
	<>
	 	<Container fluid>
		 	<Row>
			 	<Col lg={12} sm={12} xs={12}>
				   <div className="appointment-card">
				    <div className="d-flex justify-content-between align-item-center">
				   	 <div className="content">
				   	 	<h5 className="edit-fth">Medical History Questionaire</h5>
				   	 	<p className="m-0 edit-ftp">Linked to 4 Service Categories</p>
				   	 </div>
				   	 <div className="btn-edt-del">
				   	 	<span className="black-text me-3 formedit-dlt"><i className="fa-solid fa-trash"></i> Delete Form</span>
	                     <Link to="/edit-form"><span className="black-text formedit-edit"><i className="fa-solid fa-edit"></i> Edit Form</span></Link>
				   	 </div>
				   	 </div>
				   </div>
			   </Col>
		   	</Row>
		   	<Row>
		   		<Col lg={12} sm={12} xs={12}>
		   			<div className="appointment-card">
		   				<div className="edit-card-content">
							<p>Form Linked to:</p>
							<h5>Therapy Services</h5>
						</div>
						<div className="d-flex align-item-center d-wrap">
							<div className="edit-card">
								<p>Athletic Therapy / Physiotherapy</p>
							</div>
							<div className="edit-card">
								<p>Telemedicine/ <br />Telerehab</p>
							</div>
							<div className="edit-card">
								<p>Video Biochemical Analysis</p>
							</div>
							<div className="edit-card">
								<p>Vestibular <br />Rehablitation</p>
							</div>
							<div className="edit-card">
								<p>Orthotics and <br />Bracing</p>
							</div>
							<div className="edit-card">
								<p>Enternal <br />Therapy</p>
							</div>
							<div className="edit-card">
								<p>Work Fitness <br />Assessment</p>
							</div>
						</div>
							<div className="edit-card-content">
								<h5 className="msg">Massage Therapy</h5>
							</div>
							<div className="d-flex align-item-center d-wrap">
								<div className="edit-card">
									<p>Relaxation <br />Massage</p>
								</div>
								<div className="edit-card">
									<p>Sports <br />Massage</p>
								</div>
								
						</div>
						<div className="edit-card-content">
								<h5 className="msg">Performance Training</h5>
							</div>
							<div className="d-flex align-item-center d-wrap">
								<div className="edit-card">
									<p>Remote <br />Training</p>
								</div>
								<div className="edit-card">
									<p>Personal <br />Training</p>
								</div>
								<div className="edit-card">
									<p>Performance <br />Training</p>
								</div>
								
						</div>
		   			</div>
		   		</Col>
		   	</Row>
   		</Container>   
   </>
 )
	
}
export default Formedit;