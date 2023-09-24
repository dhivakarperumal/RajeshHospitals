import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Los.css';

function Logs1()
{
    return(
        <>
        
        <Container>
                <Row>
                    <Col md={7} lg={12}>
                        <div className="boxes_models1">
                            <div className="elem1">
                                <div className="head1">
                                    <h3 className="mb-3 text-center mt-4">LOGIN</h3>
                                    <div className="inputs_levels1">
                                        <input type="email" placeholder="Your Email" />
                                    </div>

                                    <div className="inputs_levels1">
                                        <input type="password" placeholder="Password" />
                                    </div>
                                   
                                    
                                   <div className="text-center">
                                            <button className="btns">LOGIN</button>
                                   </div>


                                </div>
                               
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        
        </>
    )
}
export default Logs1