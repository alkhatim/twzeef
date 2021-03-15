import React from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Input, Label, UncontrolledTooltip } from "reactstrap";

const TransactionsTable = (toggleModal) => [
  { text: "نوع المعاملة", dataField: "clientOperationType", sort: true },
  { text: "قيمة السند", dataField: "amount", sort: true },
  { text: "الرصيد بعد السند", dataField: "currentCredit", sort: true },
  { text: "الرصيد قبل السند", dataField: "previousCredit", sort: true },
  { text: "نوع السند", dataField: "transactionType", sort: true },
  {
    text: "صنف السند",
    dataField: "transactionCategory",
    sort: true,
  },
  { text: "تاريخ السند", dataField: "createdAt", sort: true },
  {
    text: "وصف السند",
    dataField: "description",
    sort: true,
  },
  // {
  //   dataField: "paymentStatus",
  //   text: "Payment Status",
  //   sort: true,
  //   formatter: (cellContent, row) => (
  //     <Badge
  //       className={"font-size-12 badge-soft-" + row.badgeclass}
  //       color={row.badgeClass}
  //       pill
  //     >
  //       {row.paymentStatus}
  //     </Badge>
  //   ),
  // },
  // {
  //   isDummyField: true,
  //   text: "Payment Method",
  //   sort: true,
  //   formatter: (cellContent, row) => (
  //     <>
  //       <i className={"fab " + row.methodIcon + " mr-1"} />
  //       {row.paymentMethod}
  //     </>
  //   ),
  // },
  // {
  //   isDummyField: true,
  //   text: "View Details",
  //   sort: true,
  //   formatter: () => (
  //     <Button
  //       type="button"
  //       color="primary"
  //       className="btn-sm btn-rounded"
  //       onClick={toggleModal}
  //     >
  //       View Details
  //     </Button>
  //   ),
  // },
  // {
  //   isDummyField: true,
  //   text: "Action",
  //   formatter: () => (
  //     <>
  //       <Link to="#" className="mr-3 text-primary">
  //         <i className="mdi mdi-pencil font-size-18 mr-3" id="edittooltip" />
  //         <UncontrolledTooltip placement="top" target="edittooltip">
  //           Edit
  //         </UncontrolledTooltip>
  //       </Link>
  //       <Link to="#" className="text-danger">
  //         <i className="mdi mdi-close font-size-18 mr-3" id="deletetooltip" />
  //         <UncontrolledTooltip placement="top" target="deletetooltip">
  //           Delete
  //         </UncontrolledTooltip>
  //       </Link>
  //     </>
  //   ),
  // },
];

export default TransactionsTable;
