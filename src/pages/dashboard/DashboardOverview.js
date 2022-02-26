
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, WorkHoursWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { SanitizedRecordTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import { faDesktop, faMobileAlt, faTabletAlt } from '@fortawesome/free-solid-svg-icons';

export default () => {

  const [refreshInterval, setRefreshInterval] = useState(10);
  let [battery, setBattery] = useState([])
  let [todayWorkload, setTodayWorkload] = useState([])
  let [monthWorkload, setMonthWorkload] = useState([])

  const fetchData = () => {
    fetch("http://localhost:8080/battery")
      .then((res) => res.json())
      .then(batteryPercentage => {
        let batteryLevel = [
          { id: 1, label: "Avaliable", value: batteryPercentage, color: "secondary", icon: faDesktop },
          { id: 2, label: "Used", value: 100 - batteryPercentage, color: "tertiary", icon: faTabletAlt }
        ];
        setBattery(batteryLevel)
      })

    fetch("http://localhost:8080/today/workload")
      .then((res) => res.json())
      .then(data => setTodayWorkload(data + " Hours"))

    fetch("http://localhost:8080/month/workload")
      .then((res) => res.json())
      .then(data => setMonthWorkload(data + " Hours"))
  }

  useEffect(() => {
    if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(fetchData, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshInterval]);

  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <WorkHoursWidget
            title="Sanitized Curve"
            value="10"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Work Hours"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Total Sanitized"
            title={monthWorkload}
            period="Feb 1 -Feb 22"
            percentage={18}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Today Workload"
            title={todayWorkload}
            period="Feb 22,6:00am-11:00am"
            time={30}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget
            title="Battery Level"
            data={battery} />
        </Col>
      </Row>

      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  <SanitizedRecordTable />
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  <TeamMembersWidget />
                </Col>
                {/* 
                <Col xs={12} lg={6} className="mb-4">
                  <ProgressTrackWidget />
                </Col> */}
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <BarChartWidget
                    title="Comparison"
                    value={452}
                    percentage={18.2}
                    data={totalOrders} />
                </Col>

                {/* <Col xs={12} className="px-0 mb-4">
                  <RankingWidget />
                </Col> */}

                {/* <Col xs={12} className="px-0">
                  <AcquisitionWidget />
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
