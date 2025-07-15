// import React, { useState } from "react";
// import "./ProcessTable.scss";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const tableData = [
//   {
//     id: 1,
//     createdOn: "2025-07-15",
//     customerName: "John Doe",
//     orderType: "New registration",
//     mark: "DE-123",
//     status: "completed", 
//     steps: [
//       "Application Submitted",
//       "Documents Uploaded",
//       "Verification",
//       "Approved"
//     ],
//     currentStep: 4,
//     rejected: false,
//     errorMessage: "",
//   },
//   {
//     id: 2,
//     createdOn: "2025-07-14",
//     customerName: "Jane Smith",
//     orderType: "Re-registration",
//     mark: "DE-456",
//     status: "rejected",
//     steps: [
//       "Application Submitted",
//       "Documents Uploaded",
//       "Verification",
//       "Rejected"
//     ],
//     currentStep: 3,
//     rejected: true,
//     errorMessage:
//       "Verification failed due to incorrect document format. Please re-upload the required files.",
//   },
// ];

// const ProcessTable = () => {
//   const [expandedId, setExpandedId] = useState(null);

//   const toggleRow = (id) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   return (
//     <div className="process-table-wrapper">
//       <div className="table-scroll">
//         <table className="process-table">
//           <thead>
//             <tr>
//               <th>Created On</th>
//               <th>Customer</th>
//               <th>Order Type</th>
//               <th>Mark</th>
//               <th>Status</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((row) => (
//               <React.Fragment key={row.id}>
//                 <tr className="main-row">
//                   <td>{row.createdOn}</td>
//                   <td>{row.customerName}</td>
//                   <td>{row.orderType}</td>
//                   <td>{row.mark}</td>
//                   <td>
//                     <span className={`status-dot ${row.status}`}></span>
//                     {row.status}
//                   </td>
//                   <td>
//                     <button
//                       className="expand-btn"
//                       onClick={() => toggleRow(row.id)}
//                     >
//                       {expandedId === row.id ? <FaChevronUp /> : <FaChevronDown />}
//                     </button>
//                   </td>
//                 </tr>

//                 {expandedId === row.id && (
//                   <tr className="details-row">
//                     <td colSpan="6">
//                       <div className="details-box">
//                         <div className="steps-track">
//                           {row.steps.map((step, index) => (
//                             <div
//                               className={`step ${index + 1 <= row.currentStep ? "done" : ""} ${
//                                 index + 1 === row.currentStep ? "current" : ""
//                               }`}
//                               key={index}
//                             >
//                               <span className="step-number">{index + 1}</span>
//                               <span className="step-label">{step}</span>
//                               {index < row.steps.length - 1 && <div className="arrow-right">→</div>}
//                             </div>
//                           ))}
//                         </div>

//                         {row.rejected && (
//                           <div className="rejection-box">
//                             <h4>Error Message</h4>
//                             <p>{row.errorMessage}</p>
//                             <div className="problem-solved">
//                               Problem Solved? <button>Mark as Fixed</button>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProcessTable;
