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

import { postTransaction } from "../../store/actions/walletActions";

const FormWizard = () => {
  const [activeTabProgress, setactiveTabProgress] = useState(1);
  const [progressValue, setprogressValue] = useState(33);
  const [transaction, setTransaction] = useState({
    reciever: "",
    payedTo: "",
    amount: "",
    transactionType: "",
    transactionCategory: "",
    currency: "",
    creditor: "",
    debtor: "",
    description: "",
    // agencyEmployeeName: userName,
    agencyEmployeeName: "moniem agency",
  });

  const onChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
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
                                  المبلغ
                                </Label>
                                <Input
                                  name="amount"
                                  value={transaction.amount}
                                  onChange={onChange}
                                  type="number"
                                  className="form-control"
                                  id="basicpill-firstname-input14"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-lastname-input15">
                                  عملة الدفع
                                </Label>
                                <select
                                  className="custom-select"
                                  name="currency"
                                  value={transaction.currency}
                                  onChange={onChange}
                                >
                                  <option value="SDG">جنيه سوداني</option>
                                  <option value="SAR">ريال سعودي</option>
                                  <option value="USD">دولار امريكي</option>
                                </select>
                              </FormGroup>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-phoneno-input16">
                                  نوع السند
                                </Label>
                                <select
                                  className="custom-select"
                                  name="transactionType"
                                  value={transaction.transactionType}
                                  onChange={onChange}
                                >
                                  <option value="add">قبض</option>
                                  <option value="deduct">صرف</option>
                                </select>
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-phoneno-input16">
                                  صنف السند
                                </Label>
                                {transaction.transactionType === "deduct" && (
                                  <select
                                    className="custom-select"
                                    name="transactionCategory"
                                    value={transaction.transactionCategory}
                                    onChange={onChange}
                                  >
                                    <option value="rent">رسوم ايجار</option>
                                    <option value="salary">مرتبات</option>
                                    <option value="creditor">رسوم دائن</option>
                                    <option value="debtor">رسوم مدين</option>
                                    <option value="electricity">
                                      رسوم كهرباء
                                    </option>
                                    <option value="telecomunications">
                                      رسوم اتصالات
                                    </option>
                                    <option value="embassy">
                                      ارجاع رسوم سفارة
                                    </option>
                                    <option value="labour office">
                                      ارجاع رسوم مكتب العمل
                                    </option>
                                    <option value="embassy and labour office">
                                      ارجاع رسوم سفارة ومكتب عمل
                                    </option>
                                    <option value="documents authentication">
                                      ارجاع رسوم توثيق
                                    </option>
                                    <option value="exit visa">
                                      رسوم تأشيرة خروج
                                    </option>
                                    <option value="hospitality">
                                      رسوم ضيافة
                                    </option>
                                    <option value="dollars wallet feed">
                                      شراء عملة\تغذية محفظة
                                    </option>
                                    <option value="other">اخرى</option>
                                  </select>
                                )}
                                {transaction.transactionType === "add" && (
                                  <select
                                    className="custom-select"
                                    name="transactionCategory"
                                    value={transaction.transactionCategory}
                                    onChange={onChange}
                                  >
                                    <option value="creditor">رسوم دائن</option>
                                    <option value="debtor">رسوم مدين</option>
                                    {/* <option value="embassy">اجراء سفارة</option>
                                    <option value="labour office">
                                      {" "}
                                      اجراء مكتب العمل
                                    </option>
                                    <option value="embassy and labour office">
                                      اجراء سفارة ومكتب عمل
                                    </option>
                                    <option value="exit visa">
                                      اجراء تأشيرة خروج
                                    </option>
                                    <option value="documents authentication">
                                      اجراء توثيق
                                    </option>
                                    <option value="contract fees">
                                      رسوم ادارية
                                    </option> */}
                                    <option value="other">اخرى</option>
                                  </select>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            {transaction.transactionCategory === "creditor" && (
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-companyuin-input22">
                                    اسم الدائن
                                  </Label>
                                  <Input
                                    name="creditor"
                                    value={transaction.creditor}
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-companyuin-input22"
                                  />
                                </FormGroup>
                              </Col>
                            )}
                            {transaction.transactionCategory === "debtor" && (
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-companyuin-input22">
                                    اسم المدين
                                  </Label>
                                  <Input
                                    name="debtor"
                                    value={transaction.debtor}
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-companyuin-input22"
                                  />
                                </FormGroup>
                              </Col>
                            )}
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
                                    المستلم
                                  </Label>
                                  <Input
                                    name="reciever"
                                    value={transaction.reciever}
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
                                    يدفع إلى
                                  </Label>
                                  <Input
                                    name="payedTo"
                                    value={transaction.payedTo}
                                    onChange={onChange}
                                    type="text"
                                    className="form-control"
                                    id="basicpill-Declaration-input23"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <FormGroup>
                                  <Label for="basicpill-address-input2">
                                    وصف السند
                                  </Label>
                                  <textarea
                                    name="description"
                                    value={transaction.description}
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
                          onClick={() => {
                            if (activeTabProgress === 2) {
                              try {
                                postTransaction(transaction);
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
