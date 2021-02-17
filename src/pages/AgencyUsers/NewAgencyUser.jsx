import React, { useState } from "react";
import messages from "../../services/messages";

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

import { postAgencyUser } from "../../store/actions/agencyUsersActions";

import { useDispatch } from "react-redux";

const FormWizard = () => {
  const [activeTabProgress, setactiveTabProgress] = useState(1);
  const [progressValue, setprogressValue] = useState(33);
  const [agencyUser, setAgencyUser] = useState({
    userName: "",
    name: "",
    email: "",
    phoneNumber: "",
    role: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setAgencyUser({ ...agencyUser, [e.target.name]: e.target.value });
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
                                  value={agencyUser.name}
                                  onChange={onChange}
                                  type="text"
                                  className="form-control"
                                  id="basicpill-firstname-input14"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-firstname-input14">
                                  اسم الدخول
                                </Label>
                                <Input
                                  name="userName"
                                  value={agencyUser.userName}
                                  onChange={onChange}
                                  type="text"
                                  className="form-control"
                                  id="basicpill-firstname-input14"
                                />
                              </FormGroup>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-lastname-input15">
                                  البريد الالكتروني
                                </Label>
                                <Input
                                  name="email"
                                  value={agencyUser.email}
                                  onChange={onChange}
                                  type="email"
                                  className="form-control"
                                  id="basicpill-lastname-input15"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-servicetax-input21">
                                  رقم الهاتف
                                </Label>
                                <Input
                                  name="phoneNumber"
                                  value={agencyUser.phoneNumber}
                                  onChange={onChange}
                                  type="text"
                                  className="form-control"
                                  id="basicpill-servicetax-input21"
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
                                  <Label for="basicpill-email-input17">
                                    كلمة المرور
                                  </Label>
                                  <Input
                                    name="password"
                                    value={agencyUser.password}
                                    onChange={onChange}
                                    type="password"
                                    className="form-control"
                                    id="basicpill-email-input17"
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-email-input17">
                                    تأكيد كلمة المرور
                                  </Label>
                                  <Input
                                    name="confirmPassword"
                                    value={agencyUser.confirmPassword}
                                    onChange={onChange}
                                    type="password"
                                    className="form-control"
                                    id="basicpill-email-input17"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-phoneno-input16">
                                    نوع الموظف
                                  </Label>
                                  <select
                                    className="custom-select"
                                    name="role"
                                    value={agencyUser.role}
                                    onChange={onChange}
                                  >
                                    <option value="agency_admin">ادمن</option>
                                    <option value="advisor">مشرف</option>
                                    <option value="accountant">محاسب</option>
                                    <option value="receptionist">
                                      موظف خدمات العملاء
                                    </option>
                                    <option value="enjaz_entry">
                                      موظف إدخال انجاز
                                    </option>
                                    <option value="enjaz_payment">
                                      موظف سداد انجاز
                                    </option>
                                    <option value="enjaz_advisor">
                                      مشرف انجاز
                                    </option>
                                    <option value="hiring">موظف توظيف</option>
                                  </select>
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
                          onClick={async () => {
                            if (activeTabProgress === 2) {
                              try {
                                await postAgencyUser(agencyUser);
                                toggleTabProgress(activeTabProgress + 1);
                              } catch (error) {
                                messages(error);
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
