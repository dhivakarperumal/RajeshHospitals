import React from "react";
import './Sin.css';
import { Container, Row, Col } from "react-bootstrap";


function Sings2() {
    return (
        <>

            <Container>
                <Row>
                    <Col md={7} lg={12}>
                        <div className="boxes_models">
                            <div className="elem">
                                <div className="head">
                                    <h3 className="mb-3 text-center mt-4">CREATE ACCOUNT</h3>
                                    <div className="inputs_levels">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div className="inputs_levels">
                                        <input type="email" placeholder="Your Email" />
                                    </div>

                                    <div className="inputs_levels">
                                        <input type="password" placeholder="Password" />
                                    </div>
                                    <div className="inputs_levels">
                                        <input type="password" placeholder="Repeate Your PassWord" />
                                    </div>
                                    {/* <div className="inputs_levels1">
                                        <h6  className="leve" ><input type="checkbox"  /></h6> 
                                        <p className="text-center"> I agrre all statements</p>
                                    </div> */}
                                   <div className="text-center">
                                            <button className="btns">SIGN UP</button>
                                   </div>


                                </div>
                                {/* <div className="text-center">
                                            <h5 className="mt-5">< a href="">Have Already An Account? Login Hera!</a> </h5>
                                   </div> */}
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>


        </>
    )
}
export default Sings2