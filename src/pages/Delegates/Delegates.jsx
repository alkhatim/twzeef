import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { map } from "lodash";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

//Import Card
import CardContact from "../../components/Common/ContactCard";

import { getDelegates } from "../../store/actions/delegatesActions";

const Delegates = (props) => {
  const params = useParams();
  const [delegates, setDelegates] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await getDelegates();
      setDelegates(result);
    };
    fetch();
  }, [params]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="Users Grid" />

          <Row>
            {map(delegates, (user, key) => (
              <CardContact user={user} key={"_user_" + key} />
            ))}
          </Row>

          <Row>
            <Col xs="12">
              <div className="text-center my-3">
                <Link to="#" className="text-success">
                  <i className="bx bx-hourglass bx-spin mr-2" />
                  Load more
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Delegates;
