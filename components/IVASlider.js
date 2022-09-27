import * as React from "react";
import { Range, getTrackBackground } from "react-range";
import { Container, Row, Col, Button } from "react-bootstrap";
const STEP = 1000;
const MIN = 0;
const MAX = 20000;
class IVASlider extends React.Component {
    state = { values: [0] };
    render() {
        return (
            <>
                <Row className="">
                    <Col lg={5} className="pe-lg-5 border-end">
                        <h4 className="fw-bold mb-4 wow fadeInUp">How much do you owe?</h4>
                        <Row className="align-items-end g-0">
                            <Col sm xs={12} className="wow fadeInUp">
                                <Range
                                    values={this.state.values}
                                    step={STEP}
                                    min={MIN}
                                    max={MAX}
                                    onChange={(values) => this.setState({ values })}
                                    renderTrack={({ props, children }) => (
                                        <div
                                            onMouseDown={props.onMouseDown}
                                            onTouchStart={props.onTouchStart}
                                            style={{
                                                ...props.style,
                                                display: "flex",
                                                width: "100%",
                                            }}
                                        >
                                            <div
                                                ref={props.ref}
                                                style={{
                                                    height: "10px",
                                                    width: "100%",
                                                    borderRadius: "10px",
                                                    background: getTrackBackground({
                                                        values: this.state.values,
                                                        colors: ["#05DC5B", "#FFEEB9"],
                                                        min: MIN,
                                                        max: MAX,
                                                    }),
                                                    alignSelf: "center",
                                                    marginTop: "20px",
                                                }}
                                            >
                                                {children}
                                            </div>
                                        </div>
                                    )}
                                    renderThumb={({ props, isDragged }) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                height: "23px",
                                                width: "23px",
                                                borderRadius: "23px",
                                                backgroundColor: "#FFF",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                outline: "none ",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "-32px",
                                                    color: "#fff",
                                                    fontSize: "14px",
                                                    padding: "3px 15px",
                                                    borderRadius: "4px",
                                                    backgroundColor: "#212429",
                                                    display: "flex",
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                £ {this.state.values[0].toFixed(0)}
                                                {this.state.values[0].toFixed(0) == 20000 && "+"}
                                            </div>
                                            <div
                                                style={{
                                                    height: "12px",
                                                    width: "12px",
                                                    borderRadius: "23px",
                                                    backgroundColor: isDragged ? "#05DC5B" : "#05DC5B",
                                                }}
                                            />
                                        </div>
                                    )}
                                />
                            </Col>
                            <Col sm="auto" xs={12}>
                                <output id="output" className="range-output ms-5 wow fadeInUp">
                                    £ {this.state.values[0].toFixed(0)}
                                </output>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={7} className="ps-lg-5">
                        <h4 className="fw-bold mb-4 wow fadeInUp">How much you could write off with an IVA*</h4>
                        <div className="d-sm-flex">
                            <div className="range-output me-sm-4 mb-sm-0 mb-3 wow fadeInUp">£ {(this.state.values[0].toFixed(0) * 90) / 100} Debt Write Off </div>
                            <Button variant="light" className="custom-btn apply-btn text-dark ml-4 wow fadeInUp " href="/solution-finder">
                                Do I qualify?
                            </Button>
                        </div>
                    </Col>
                </Row>{" "}
            </>
        );
    }
}
export default IVASlider;
