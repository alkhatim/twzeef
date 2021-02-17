import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getReferences } from "../../store/actions/referencesActions";
import { getCountries } from "../../store/actions/lookups";

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

import { createClient } from "../../store/actions/clientsActions";

const NewClient = () => {
  const [activeTabProgress, setactiveTabProgress] = useState(1);
  const [progressValue, setprogressValue] = useState(25);
  const [references, setReferences] = useState([]);
  const [countries, setCountries] = useState([]);
  const [countryKey, setCountryKey] = useState(-1);
  const [client, setClient] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    phoneNumber2: "",
    address: "",
    birthday: new Date(),
    gender: "",
    maritalStatus: "",
    religion: "",
    // reference: { referenceId: "", name: "" },
    referenceId: "",
    destination: { _id: "", name: "" },
    passportType: "",
    passportNumber: "",
    passportExpireDate: new Date(),
    hasExitVisaRequest: false,
    hasOtherServices: false,
  });
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      const result = await getReferences();
      setReferences(result);
      const cs = await getCountries();
      setCountries(cs);
    };
    fetch();
  }, [params]);

  //   const onRefChange = (e) => {
  //     if (references[e.target.value]) {
  //       setClient({
  //         ...client,
  //         reference: {
  //           referenceId: references[e.target.value]._id,
  //           name: references[e.target.value].name,
  //         },
  //       });
  //       setRefKey(e.target.value);
  //       //   console.log(client);
  //     }
  //   };

  const onCountryChange = (e) => {
    if (countries[e.target.value]) {
      setClient({ ...client, destination: countries[e.target.value] });
      setCountryKey(e.target.value);
      //   console.log(client);
    }
  };

  const onChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTabProgress(tab);

        if (tab === 1) {
          setprogressValue(25);
        }
        if (tab === 2) {
          setprogressValue(50);
        }
        if (tab === 3) {
          setprogressValue(75);
        }
        if (tab === 4) {
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
                          onClick={() => {
                            toggleTabProgress(3);
                          }}
                        >
                          <span className="step-number mr-2">03</span>
                          Bank Details
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTabProgress === 4,
                          })}
                          disabled
                        >
                          <span className="step-number mr-2">04</span>
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
                                  value={client.name}
                                  name="name"
                                  onChange={onChange}
                                  type="text"
                                  className="form-control"
                                  id="basicpill-firstname-input14"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-email-input17">
                                  البريد الالكتروني
                                </Label>
                                <Input
                                  value={client.email}
                                  name="email"
                                  onChange={onChange}
                                  type="email"
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
                                  رقم الهاتف
                                </Label>
                                <Input
                                  value={client.phoneNumber}
                                  name="phoneNumber"
                                  onChange={onChange}
                                  type="text"
                                  className="form-control"
                                  id="basicpill-phoneno-input16"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-phoneno-input16">
                                  رقم الهاتف الثاني
                                </Label>
                                <Input
                                  value={client.phoneNumber2}
                                  name="phoneNumber2"
                                  onChange={onChange}
                                  type="text"
                                  className="form-control"
                                  id="basicpill-phoneno-input16"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="12">
                              <FormGroup>
                                <Label for="basicpill-address-input2">
                                  العنوان
                                </Label>
                                <textarea
                                  value={client.address}
                                  name="address"
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
                                  <Label for="basicpill-pancard-input18">
                                    تاريخ الميلاد
                                  </Label>
                                  <Input
                                    name="birthday"
                                    value={client.birthday}
                                    onChange={onChange}
                                    type="date"
                                    className="form-control"
                                    id="basicpill-pancard-input18"
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup>
                                  <Label>النوع</Label>
                                  <select
                                    className="custom-select"
                                    name="gender"
                                    value={client.gender}
                                    onChange={onChange}
                                  >
                                    <option defaultValue></option>
                                    <option value="Male">ذكر</option>
                                    <option value="Female">أنثى</option>
                                  </select>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <Label>الحالة الاجتماعية</Label>
                                  <select
                                    className="custom-select"
                                    name="maritalStatus"
                                    value={client.maritalStatus}
                                    onChange={onChange}
                                  >
                                    <option defaultValue></option>
                                    <option value="Single">أعزب</option>
                                    <option value="Married">متزوج</option>
                                    <option value="Divorced">مطلق</option>
                                    <option value="Other">أخرى</option>
                                  </select>
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-servicetax-input21">
                                    الديانة
                                  </Label>
                                  <Input
                                    name="religion"
                                    value={client.religion}
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-servicetax-input21"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <Label>المرجع</Label>
                                  <select
                                    className="custom-select"
                                    name="referenceId"
                                    value={client.referenceId}
                                    onChange={onChange}
                                  >
                                    <option defaultValue></option>
                                    {references.map((ref) => (
                                      <option value={ref._id}>
                                        {ref.name}
                                      </option>
                                    ))}
                                  </select>
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </TabPane>
                      <TabPane tabId={3}>
                        <div>
                          <Form>
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <Label>الوجهة</Label>
                                  <select
                                    className="custom-select"
                                    name="destination"
                                    value={countryKey}
                                    onChange={onCountryChange}
                                  >
                                    <option defaultValue></option>
                                    {countries.map((country, key) => (
                                      <option value={key}>
                                        {country.name}
                                      </option>
                                    ))}
                                  </select>
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-vatno-input19">
                                    رقم جواز السفر
                                  </Label>
                                  <Input
                                    value={client.passportNumber}
                                    name="passportNumber"
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
                                  <Label>نوع الجواز</Label>
                                  <select
                                    className="custom-select"
                                    name="passportType"
                                    value={client.passportType}
                                    onChange={onChange}
                                  >
                                    <option defaultValue></option>
                                    <option value="Personal">عادي</option>
                                    <option value="Diplomatic">دبلوماسي</option>
                                  </select>
                                </FormGroup>
                              </Col>

                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-pancard-input18">
                                    تاريخ انتهاء الصلاحية
                                  </Label>
                                  <Input
                                    name="passportExpireDate"
                                    value={client.passportExpireDate}
                                    onChange={onChange}
                                    type="date"
                                    className="form-control"
                                    id="basicpill-pancard-input18"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </TabPane>
                      <TabPane tabId={4}>
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
                          activeTabProgress === 4 ? "next disabled" : "next"
                        }
                      >
                        <Link
                          to="#"
                          onClick={() => {
                            if (activeTabProgress === 3) {
                              try {
                                createClient(client);
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

export default NewClient;
