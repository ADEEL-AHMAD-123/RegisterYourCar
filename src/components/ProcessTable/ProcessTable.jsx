import React from "react";
import "./ProcessTable.scss";

const tableData = [
  {
    id: 1,
    createdOn: "2025-07-15",
    customerName: "John Doe",
    orderType: "New registration",
    mark: "DE-123",
    status: "completed",
    rejected: false,
    errorMessage: "",
  },
  {
    id: 2,
    createdOn: "2025-07-14",
    customerName: "Jane Smith",
    orderType: "Re-registration",
    mark: "DE-456",
    status: "rejected",
    rejected: true,
    errorMessage:
      "Verification failed due to incorrect document format. Please re-upload the required files.",
  },
];

const ProcessTable = () => {
  return (
    <div className="process-table-wrapper">
      <div className="table-scroll">
        <table className="process-table">
          <thead>
            <tr>
              <th>Created On</th>
              <th>Customer</th>
              <th>Order Type</th>
              <th>Mark</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr className="main-row" key={row.id}>
                <td>{row.createdOn}</td>
                <td>{row.customerName}</td>
                <td>{row.orderType}</td>
                <td>{row.mark}</td>
                <td>
                  <span className={`status-dot ${row.status}`}></span>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProcessTable;
