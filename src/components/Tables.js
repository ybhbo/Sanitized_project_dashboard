
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import { sanitizedRecords, pageTraffic, pageRanking } from "../data/tables";
// import transactions from "../data/transactions";
// import commands from "../data/commands";

const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return (
    value ? <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}{suffix}
      </span>
    </span> : "--"
  );
};

export const SanitizedRecordTable = () => {
  const TableRow = (props) => {
    const { location, date, time, SanitizedHours } = props;
    // const bounceIcon = SanitizedHours < 0 ? faArrowDown : faArrowUp;
    // const bounceTxtColor = SanitizedHours < 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <th scope="row">{location}</th>
        <td>{date}</td>
        <td>{time}</td>
        {/* <td>
          <FontAwesomeIcon icon={bounceIcon} className={`${bounceTxtColor} me-3`} />
          {Math.abs(SanitizedHours)}%
        </td> */}
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Sanitized Record</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">See all</Button>
          </Col>
        </Row>
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">Location</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col"> Sanitized Hours</th>
          </tr>
        </thead>
        <tbody>
          {sanitizedRecords.map(pv => <TableRow key={`page-visit-${pv.id}`} {...pv} />)}
        </tbody>
      </Table>
    </Card>
  );
};