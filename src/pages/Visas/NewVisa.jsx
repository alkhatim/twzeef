import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

import { postVisa, getVisaTypes } from "../../store/actions/visaActions";
import { getReferences } from "../../store/actions/referencesActions";
import { getCountries } from "../../store/actions/lookups";

const FormWizard = () => {
  const params = useParams();
  const [activeTabProgress, setactiveTabProgress] = useState(1);
  const [progressValue, setprogressValue] = useState(33);

  const [countries, setCountries] = useState([]);
  const [countryKey, setCountryKey] = useState(-1);
  const [country, setCountry] = useState({ name: "", _id: "" });

  const [references, setReferences] = useState([]);

  const [visaTypes, setVisaTypes] = useState([]);
  const [visaTypeKey, setVisaTypeKey] = useState(-1);

  const [isWorkVisa, setisWorkVisa] = useState(false);
  const [isVisitVisa, setisVisitVisa] = useState(false);
  const [isExtensionVisa, setisExtensionVisa] = useState(false);
  const [isResidencyVisa, setisResidencyVisa] = useState(false);
  const [isForWorkVisa, setisForWorkVisa] = useState(false);
  const [isForResidencyVisa, setisForResidencyVisa] = useState(false);

  const [visa, setVisa] = useState({
    senderName: "",
    nationalOrCompanyRegistrationNumber: "",
    referenceId: "",
    identityNumber: "",
    visaNumber: "",
    numberOfMembers: "",
    notes: "",
    visaType: { _id: "", name: "", isWorkVisa: false, isVisitVisa: false },
  });

  useEffect(() => {
    const fetch = async () => {
      const rfs = await getReferences();
      setReferences(rfs);
      const cs = await getCountries();
      setCountries(cs);
    };
    fetch();
  }, [params]);

  const onChange = (e) => {
    setVisa({ ...visa, [e.target.name]: e.target.value });
  };

  const onCountryChange = async (e) => {
    console.log(e);
    if (countries[e.target.value]) {
      setCountry(countries[e.target.value]);
      setCountryKey(e.target.value);
      const vts = await getVisaTypes(countries[e.target.value]._id);
      setVisaTypes(vts);
      console.log(country);
    }
  };

  const onVisaTypeChange = (e) => {
    console.log(e);
    let v = visaTypes[e.target.value];
    if (v) {
      setisWorkVisa(v.isWorkVisa);
      setisVisitVisa(v.isVisitVisa ? v.isVisitVisa : v.isFamilyResidencyVisa);
      setisExtensionVisa(v.isExtensionVisa);
      setisForWorkVisa(v.isForWorkVisa);
      setisResidencyVisa(v.isResidencyVisa);
      setisForResidencyVisa(v.isForResidencyVisa);
      setVisa({
        ...visa,
        visaType: v._id,
      });
      setVisaTypeKey(e.target.value);
      //   console.log(visa);
    } else {
      setVisa({
        ...visa,
        visaType: "",
      });
    }
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
                                <Label>الدولة</Label>
                                <select
                                  className="custom-select"
                                  name="destination"
                                  value={countryKey}
                                  onChange={onCountryChange}
                                >
                                  <option defaultValue></option>
                                  {countries.map((country, key) => (
                                    <option value={key}>{country.name}</option>
                                  ))}
                                </select>
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <Label>نوع التأشيرة</Label>
                                <select
                                  className="custom-select"
                                  name="visaType"
                                  value={visaTypeKey}
                                  onChange={onVisaTypeChange}
                                >
                                  <option defaultValue></option>
                                  {visaTypes.map((vt, key) => (
                                    <option value={key}>{vt.name}</option>
                                  ))}
                                </select>
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
                                  value={visa.referenceId}
                                  onChange={onChange}
                                >
                                  <option defaultValue></option>
                                  {references.map((ref) => (
                                    <option value={ref._id}>{ref.name}</option>
                                  ))}
                                </select>
                              </FormGroup>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-firstname-input14">
                                  /اسم الكفيل/الشركة/المرسل
                                </Label>
                                <Input
                                  name="senderName"
                                  value={visa.senderName}
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
                                  رقم التأشيرة
                                </Label>
                                <Input
                                  name="visaNumber"
                                  value={visa.visaNumber}
                                  onChange={onChange}
                                  type="text"
                                  className="form-control"
                                  id="basicpill-firstname-input14"
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
                              {(isWorkVisa ||
                                isExtensionVisa ||
                                isResidencyVisa) && (
                                <Col lg="6">
                                  <FormGroup>
                                    <Label for="basicpill-email-input17">
                                      رقم السجل او الهوية
                                    </Label>
                                    <Input
                                      name="nationalOrCompanyRegistrationNumber"
                                      value={
                                        visa.nationalOrCompanyRegistrationNumber
                                      }
                                      onChange={onChange}
                                      type="text"
                                      className="form-control"
                                      id="basicpill-email-input17"
                                    />
                                  </FormGroup>
                                </Col>
                              )}
                              {isVisitVisa && (
                                <Col lg="6">
                                  <FormGroup>
                                    <Label for="basicpill-email-input17">
                                      رقم الهوية
                                    </Label>
                                    <Input
                                      name="identityNumber"
                                      value={visa.identityNumber}
                                      onChange={onChange}
                                      type="text"
                                      className="form-control"
                                      id="basicpill-email-input17"
                                    />
                                  </FormGroup>
                                </Col>
                              )}
                              {isVisitVisa && (
                                <Col lg="6">
                                  <FormGroup>
                                    <Label for="basicpill-email-input17">
                                      عدد الخانات بالتأشيرة (الزاور او المقيمين)
                                    </Label>
                                    <Input
                                      name="numberOfMembers"
                                      value={visa.numberOfMembers}
                                      onChange={onChange}
                                      type="text"
                                      className="form-control"
                                      id="basicpill-email-input17"
                                    />
                                  </FormGroup>
                                </Col>
                              )}
                              {(isExtensionVisa || isResidencyVisa) && (
                                <Col lg="6">
                                  <FormGroup>
                                    <Label for="basicpill-phoneno-input16">
                                      فترة التمديد
                                    </Label>
                                    <select
                                      className="custom-select"
                                      name="numberOfExtensionMonths"
                                      value={visa.numberOfExtensionMonths}
                                      onChange={onChange}
                                    >
                                      <option defaultValue></option>
                                      <option value="1">شهر</option>
                                      <option value="2">شهرين</option>
                                      <option value="3">3 شهور</option>
                                      <option value="4">4 شهور</option>
                                      <option value="5">5 شهور</option>
                                      <option value="6">6 شهور</option>
                                      <option value="7">7 شهور</option>
                                      <option value="8">8 شهور</option>
                                      <option value="9">9 شهور</option>
                                      <option value="10">10 شهور</option>
                                      <option value="11">11 شهور</option>
                                      <option value="12">12 شهور</option>
                                    </select>
                                  </FormGroup>
                                </Col>
                              )}
                            </Row>
                            <Row>
                              <Col lg="12">
                                <FormGroup>
                                  <Label for="basicpill-address-input2">
                                    ملاحظات
                                  </Label>
                                  <textarea
                                    name="notes"
                                    value={visa.notes}
                                    onChange={onChange}
                                    id="basicpill-address-input2"
                                    className="form-control"
                                    rows="2"
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
                          onClick={async () => {
                            if (activeTabProgress === 2) {
                              try {
                                await postVisa(visa);
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
