import React, { useState } from "react";

import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Progress,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import classnames from "classnames";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import { addDeputy } from "../../store/actions/deputiesActions";

import { useDispatch } from "react-redux";

const FormWizard = () => {
  const [activeTabProgress, setactiveTabProgress] = useState(1);
  const [progressValue, setprogressValue] = useState(33);
  const [deputy, setDeputy] = useState({
    name: "",
    email: "",
    deputyType: "",
    notes: "",
    location: "",
    ownerName: "",
    ownerPhone: "",
    coordinatorName: "",
    coordinatorPhone: "",
    CEOName: "",
    CEOPhone: "",
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setDeputy({ ...deputy, [e.target.name]: e.target.value });
  };

  function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 3) {
        setactiveTabProgress(tab);

        if (tab === 1) {
          setprogressValue(33);
        }
        if (tab === 2) {
          setprogressValue(67);
        }
        if (tab === 3) {
          setprogressValue(100);
        }
      }
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Wizard" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Wizard with progressbar</h4>

                  <div id="progrss-wizard" className="twitter-bs-wizard">
                    <ul className="twitter-bs-wizard-nav nav-justified nav nav-pills">
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTabProgress === 1,
                          })}
                          onClick={() => {
                            toggleTabProgress(1);
                          }}
                        >
                          <span className="step-number mr-2">01</span>
                          Seller Details
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTabProgress === 2,
                          })}
                          onClick={() => {
                            toggleTabProgress(2);
                          }}
                        >
                          <span className="step-number mr-2">02</span>.
                          <span>Company Document</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTabProgress === 3,
                          })}
                          disabled
                        >
                          <span className="step-number mr-2">03</span>
                          Confirm Detail
                        </NavLink>
                      </NavItem>
                    </ul>

                    <div id="bar" className="mt-4">
                      <Progress
                        color="success"
                        striped
                        animated
                        value={progressValue}
                      />
                      <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" />
                    </div>
                    <TabContent
                      activeTab={activeTabProgress}
                      className="twitter-bs-wizard-tab-content"
                    >
                      <TabPane tabId={1}>
                        <Form>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-firstname-input14">
                                  الاسم
                                </Label>
                                <Input
                                  name="name"
                                  value={deputy.name}
                                  onChange={onChange}
                                  type="text"
                                  className="form-control"
                                  id="basicpill-firstname-input14"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-lastname-input15">
                                  البريد الالكتروني
                                </Label>
                                <Input
                                  name="email"
                                  value={deputy.email}
                                  onChange={onChange}
                                  type="email"
                                  className="form-control"
                                  id="basicpill-lastname-input15"
                                />
                              </FormGroup>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-phoneno-input16">
                                  نوع الوكيل
                                </Label>
                                <select
                                  className="custom-select"
                                  name="deputyType"
                                  value={deputy.deputyType}
                                  onChange={onChange}
                                >
                                  <option value="internal">داخلي</option>
                                  <option value="external">خارجي</option>
                                </select>
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-email-input17">
                                  المنطقة
                                </Label>
                                <Input
                                  name="location"
                                  value={deputy.location}
                                  onChange={onChange}
                                  type="text"
                                  className="form-control"
                                  id="basicpill-email-input17"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="12">
                              <FormGroup>
                                <Label for="basicpill-address-input2">
                                  ملاحظات
                                </Label>
                                <textarea
                                  name="notes"
                                  value={deputy.notes}
                                  onChange={onChange}
                                  id="basicpill-address-input2"
                                  className="form-control"
                                  rows="2"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>
                      </TabPane>
                      <TabPane tabId={2}>
                        <div>
                          <Form>
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-companyuin-input22">
                                    اسم المالك
                                  </Label>
                                  <Input
                                    name="ownerName"
                                    value={deputy.ownerName}
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-companyuin-input22"
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-declaration-input23">
                                    رقم هاتف المالك
                                  </Label>
                                  <Input
                                    name="ownerPhone"
                                    value={deputy.ownerPhone}
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-Declaration-input23"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-pancard-input18">
                                    اسم المدير
                                  </Label>
                                  <Input
                                    name="CEOName"
                                    value={deputy.CEOName}
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-pancard-input18"
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-vatno-input19">
                                    رقم هاتف المدير
                                  </Label>
                                  <Input
                                    name="CEOPhone"
                                    value={deputy.CEOPhone}
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-vatno-input19"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-cstno-input20">
                                    اسم المنظم
                                  </Label>
                                  <Input
                                    name="coordinatorName"
                                    value={deputy.coordinatorName}
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-cstno-input20"
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-servicetax-input21">
                                    رقم هاتف المنظم
                                  </Label>
                                  <Input
                                    name="coordinatorPhone"
                                    value={deputy.coordinatorPhone}
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-servicetax-input21"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </TabPane>
                      <TabPane tabId={3}>
                        <div className="row justify-content-center">
                          <Col lg="6">
                            <div className="text-center">
                              <div className="mb-4">
                                <i className="mdi mdi-check-circle-outline text-success display-4" />
                              </div>
                              <div>
                                <h5>Confirm Detail</h5>
                                <p className="text-muted">
                                  If several languages coalesce, the grammar of
                                  the resulting
                                </p>
                              </div>
                            </div>
                          </Col>
                        </div>
                      </TabPane>
                    </TabContent>
                    <ul className="pager wizard twitter-bs-wizard-pager-link">
                      <li
                        className={
                          activeTabProgress === 1
                            ? "previous disabled"
                            : "previous"
                        }
                      >
                        <Link
                          to="#"
                          onClick={() => {
                            toggleTabProgress(activeTabProgress - 1);
                          }}
                        >
                          Previous
                        </Link>
                      </li>
                      <li
                        className={
                          activeTabProgress === 3 ? "next disabled" : "next"
                        }
                      >
                        <Link
                          to="#"
                          onClick={() => {
                            if (activeTabProgress === 2) {
                              try {
                                addDeputy(deputy);
                                toggleTabProgress(activeTabProgress + 1);
                              } catch (error) {
                                console.log(error);
                              }
                            } else {
                              toggleTabProgress(activeTabProgress + 1);
                            }
                          }}
                        >
                          Next
                        </Link>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormWizard;
