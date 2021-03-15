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
import { getAddTransactionAction } from "../../store/actions/walletActions";
import TransactionsTable from "../../components/TransactionsTable/TransactionsTable";
import TransactionsModal from "../../components/TransactionsTable/TransactionModal";

const AddTransactions = (props) => {
  const params = useParams();
  const [modal, setModal] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [transactionsList, setTransactionsList] = useState([]);
  const pageOptions = {
    sizePerPage: 10,
    totalSize: 50, // replace later with size(orders),
    custom: true,
  };
  const { SearchBar } = Search;

  useEffect(() => {
    const fetch = async () => {
      const result = await getAddTransactionAction();
      setTransactions(result);
    };
    fetch();
  }, [params]);

  useEffect(() => {
    if (!isEmpty(transactions)) setTransactionsList(transactions);
    console.log(transactions);
  }, [transactions]);

  // eslint-disable-next-line no-unused-vars
  const handleTableChange = (type, { page, searchText }) => {
    setTransactionsList(
      transactions.filter((transaction) =>
        Object.keys(transaction).some(
          (key) =>
            typeof transaction[key] === "string" &&
            transaction[key].toLowerCase().includes(searchText.toLowerCase())
        )
      )
    );
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <TransactionsModal isOpen={modal} toggle={toggleModal} />
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Transactions" breadcrumbItem="Orders" />
          <Row>
            <Col xs="12">
              <Card>
                {!isEmpty(transactionsList) && (
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          data={transactionsList || []}
                          columns={TransactionsTable(toggleModal)}
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

export default AddTransactions;
