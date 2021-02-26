import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";
import { getAllJobsAction } from "../../store/actions/jobsActions";
import EcommerceOrderColumns from "./JobsColumns";
import EcommerceOrdersModal from "./JobModal";

const AllJobsTable = (props) => {
  const params = useParams();
  const [modal, setModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobsList, setJobsList] = useState([]);
  const pageOptions = {
    sizePerPage: 10,
    totalSize: 50, // replace later with size(orders),
    custom: true,
  };
  const { SearchBar } = Search;

  useEffect(() => {
    const fetch = async () => {
      const result = await getAllJobsAction();
      setJobs(result);
    };
    fetch();
  }, [params]);

  useEffect(() => {
    if (!isEmpty(jobs)) setOrderList(jobs);
    console.log(jobs);
  }, [jobs]);

  // eslint-disable-next-line no-unused-vars
  const handleTableChange = (type, { page, searchText }) => {
    setJobsList(
      jobs.filter((job) =>
        Object.keys(job).some(
          (key) =>
            typeof job[key] === "string" &&
            job[key].toLowerCase().includes(searchText.toLowerCase())
        )
      )
    );
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <EcommerceOrdersModal isOpen={modal} toggle={toggleModal} />
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Jobs" breadcrumbItem="Orders" />
          <Row>
            <Col xs="12">
              <Card>
                {!isEmpty(jobsList) && (
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          data={jobsList || []}
                          columns={EcommerceOrderColumns(toggleModal)}
                          bootstrap4
                          search
                        >
                          {(toolkitProps) => (
                            <React.Fragment>
                              <Row className="mb-2">
                                <Col sm="4">
                                  <div className="search-box mr-2 mb-2 d-inline-block">
                                    <div className="position-relative">
                                      <SearchBar
                                        {...toolkitProps.searchProps}
                                      />
                                      <i className="bx bx-search-alt search-icon" />
                                    </div>
                                  </div>
                                </Col>
                                <Col sm="8">
                                  <div className="text-sm-right">
                                    <Button
                                      type="button"
                                      color="success"
                                      className="btn-rounded waves-effect waves-light mb-2 mr-2"
                                    >
                                      <i className="mdi mdi-plus mr-1" />
                                      Add New Order
                                    </Button>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col xl="12">
                                  <div className="table-responsive">
                                    <BootstrapTable
                                      responsive
                                      remote
                                      bordered={false}
                                      striped={false}
                                      classes={
                                        "table table-centered table-nowrap"
                                      }
                                      headerWrapperClasses={"thead-light"}
                                      {...toolkitProps.baseProps}
                                      onTableChange={handleTableChange}
                                      {...paginationTableProps}
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row className="align-items-md-center mt-30">
                                <Col className="pagination pagination-rounded justify-content-end mb-2 inner-custom-pagination">
                                  <PaginationListStandalone
                                    {...paginationProps}
                                  />
                                </Col>
                              </Row>
                            </React.Fragment>
                          )}
                        </ToolkitProvider>
                      )}
                    </PaginationProvider>
                  </CardBody>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AllJobsTable;
