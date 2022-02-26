
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import { pageTraffic, pageRanking } from "../data/tables";
// import transactions from "../data/transactions";
// import commands from "../data/commands";
import { useEffect, useState } from "react";

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
    const { location, date, time, sanitizedHours } = props;
    // const bounceIcon = SanitizedHours < 0 ? faArrowDown : faArrowUp;
    // const bounceTxtColor = SanitizedHours < 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <th scope="row">{location}</th>
        <td>{date}</td>
        <td>{time}</td>
        <td>{sanitizedHours}</td>
        {/* <td>
          <FontAwesomeIcon icon={bounceIcon} className={`${bounceTxtColor} me-3`} />
          {Math.abs(SanitizedHours)}%
        </td> */}
      </tr>
    );
  };


  /*
     { id: 1, date: "02/12/2022", time: "9:00-9:30", sanitizedHours: "3", location: "Eng187" },
    { id: 2, date: "02/12/2022", time: "13:00-13:30", sanitizedHours: 2, location: "Eng187" },
    { id: 3, date: "02/13/2022", time: "8:00-8:30", sanitizedHours: 2, location: "Eng201" },
    { id: 4, date: "02/14/2022", time: "18:00-18:20", sanitizedHours: 1, location: "Eng337" },
];
  */
  let [records, setRecords] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/report")
      .then((res) => res.json())
      .then(data => { setRecords(data) })
  }, [])


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
            <th scope="col">Sanitized Hours</th>
          </tr>
        </thead>
        <tbody>
          {records.map(pv => <TableRow key={`page-visit-${pv.id}`} {...pv} />)}
        </tbody>
      </Table>
    </Card>
  );
};