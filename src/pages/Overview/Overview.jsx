import React from 'react';
import './Overview.scss';
import ProcessActions from '../../components/ProcessActionsButton/ProcessActions';
import Filters from '../../components/Filters/Filters';
import ProcessTable from '../../components/ProcessTable/ProcessTable';

const Overview = () => {
  return (
    <section className="overview-page page-container">
      <h1 className="page-title">Processes</h1>
      <div className="overview-actions">
        <ProcessActions />
      </div>
      <Filters />
      {/* <ProcessTable /> */}
    </section>
  );
};

export default Overview;
