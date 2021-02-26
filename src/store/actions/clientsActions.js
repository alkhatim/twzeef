import { clientsConstants } from "../constants/clientsConstants";
import http from "../../services/http";
import messages from "../../services/messages";
// import { saveAs } from "file-saver";

export const getRefs = async () => {
  try {
    const result = await http.get("/references/myreferences");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClientAuthDocs = async (clientId) => {
  try {
    const result = await http.get(
      `/authenticationdocuments/${clientId}/clientdocs`
    );
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const addAuthDoc = async (clientId, authDocReceiptBody) => {
  try {
    const result = await http.post(
      `/api/v2/receipts/${clientId}/auth-doc`,
      authDocReceiptBody
    );
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const addAuthDocPayment = async (clientId, authDocId) => {
  try {
    const result = await http.post(
      `/api/v2/full-payments/${clientId}/${authDocId}/auth-doc`
    );
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClientFlights = async (clientId) => {
  try {
    const result = await http.get(`/flights/${clientId}/clientflights`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const addFlight = async (clientId, flightReceiptBody) => {
  try {
    const result = await http.post(
      `/api/v2/receipts/${clientId}/flight`,
      flightReceiptBody
    );
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const addFlightPayment = async (clientId, authDocId) => {
  try {
    const result = await http.post(
      `/clients/${clientId}/${authDocId}/pay/flight`
    );
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClientDataFlows = async (clientId) => {
  try {
    const result = await http.get(`/dataflows/${clientId}/clientdataflows`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const addDataFlow = async (clientId, dataFlowReceiptBody) => {
  try {
    const result = await http.post(
      `/api/v2/receipts/${clientId}/data-flow`,
      dataFlowReceiptBody
    );
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const addDataFlowPayment = async (clientId, dataFlowId) => {
  try {
    const result = await http.post(
      `/clients/${clientId}/${dataFlowId}/pay/dataflow`
    );
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const addContractReceipt = async (clientId, contractReceipt) => {
  try {
    const result = await http.post(
      `/clients/${clientId}/createreceipt/contract`,
      contractReceipt
    );
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const payContract = async (clientId, body) => {
  try {
    const result = await http.post(`/clients/${clientId}/pay/contract`, body);
    if (result) {
      const data = result.data.data;
      const id = data._id;
      const report = await http.post(
        "/lists-and-reports/print-full-client-reciept",
        { _id: id, userName: body.userName, contract: true }
      );
      return { report: report.data, result: data };
    }
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getVisas = async () => {
  try {
    const result = await http.get("/visas/myagencyvisas");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClientsWhoRecievedAuth = async () => {
  try {
    const result = await http.get("/clients/receivedauthorization");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const clientRecievedAuth = async (id) => {
  try {
    const result = await http.put(`/clients/receivedauthorization/${id}`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getVisasByCountryId = async (countryId) => {
  try {
    const result = await http.get(`/visas/${countryId}/country`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getVisitVisaTypes = async () => {
  try {
    const result = await http.get(`/visatypes/visit`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getResidencyVisaTypes = async () => {
  try {
    const result = await http.get(`/visatypes/residency`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const postClient = async (client, visaId) => {
  try {
    const result = await http.post(`/clients/${visaId}`, client);
    return result.data.data._id;
  } catch (error) {
    messages.error(error);
  }
};

export const assignVisaToClient = async (job, visaId, clientId) => {
  try {
    const result = await http.post(`/clients/${clientId}/${visaId}`, job);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const createClient = async (client) => {
  try {
    const result = await http.post(`/clients`, client);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const deleteClient = async (id, options) => {
  try {
    const result = await http.delete(`/clients/${id}`, options);
  } catch (error) {
    messages.error(error);
  }
};

export const updateClient = async (client) => {
  try {
    const result = await http.put(`/clients/${client._id}`, client);
    return result.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClient = async (id) => {
  try {
    const result = await http.get(`/clients/${id}`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClients = () => async (dispatch) => {
  try {
    const result = await http.get("/clients/myclients");
    dispatch({
      type: clientsConstants.GET_CLIENTS_SUCCESS,
      payload: result.data.data,
    });
  } catch (error) {
    messages.error(error);
    dispatch({
      type: clientsConstants.GET_CLIENTS_FAIL,
    });
  }
};

// export const getClients = async () => {
//   try {
//     const result = await http.get("/clients/myclients");
//     return result.data.data;
//   } catch (error) {
//     messages.error(error);
//   }
// };

export const getClientsForPayments = async () => {
  try {
    const result = await http.get("/clients/for-payment");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClientsForContractPayments = async () => {
  try {
    const result = await http.get("/clients/for-contract-payment");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getSAClients = async () => {
  try {
    const result = await http.get("/clients/myclients/saclients");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClientsForVisaAssignment = async () => {
  try {
    const result = await http.get("/clients/forvisaassignment");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClientsForWallet = async () => {
  try {
    const result = await http.get("/clients/forwallet");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getPartialPayments = async () => {
  try {
    const result = await http.get("/clients/partialpayments");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getContractPartialPayments = async () => {
  try {
    const result = await http.get("/clients/partialpayments/contract");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const labReport = async (clients) => {
  try {
    const result = await http.post("/lists-and-reports/lablist", clients);
    return result.data;
  } catch (error) {
    messages.error(error);
  }
};

export const labourOfficeReport = async (clients) => {
  try {
    const result = await http.post(
      "/lists-and-reports/labourofficelist",
      clients
    );
    return result.data;
  } catch (error) {
    messages.error(error);
  }
};

export const exitVisaReport = async (clients) => {
  try {
    const result = await http.post("/lists-and-reports/exitvisalist", clients);
    return result.data;
  } catch (error) {
    messages.error(error);
  }
};

export const AuthDocsReport = async (clients) => {
  try {
    const result = await http.post(
      "/lists-and-reports/authenticationdocuments",
      clients
    );
    return result.data;
  } catch (error) {
    messages.error(error);
  }
};

export const AuthDocsAgencyReport = async (clients) => {
  try {
    const result = await http.post(
      "/lists-and-reports/authenticationdocumentsagency",
      clients
    );
    return result.data;
  } catch (error) {
    messages.error(error);
  }
};

export const labListBack = async (clients) => {
  try {
    const result = await http.post("/clients/lab-list-back", clients);
    if (result.data.data) {
      const report = await http.post(
        "/lists-and-reports/lab-list-back",
        clients
      );
      if (report) {
        const reportWindow = window.open();
        reportWindow.document.write(report.data);
        const pdfBlob = new Blob([report], { type: "application/html" });
        saveAs(
          pdfBlob,
          ` منجز المعمل ليوم ${new Date().toLocaleDateString()}.html`
        );
      }
    }
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const labProblem = async (clientId, problem) => {
  try {
    if (problem.problem === "ready") {
      const result = await http.put(
        `/clients/${clientId}/labstatus/ready`,
        problem
      );
      return result.data.data;
    } else {
      const result = await http.put(
        `/clients/${clientId}/labstatus/reentry`,
        problem
      );
      return result.data.data;
    }
  } catch (error) {
    messages.error(error);
  }
};

export const embassyProblem = async (clientId, problem) => {
  try {
    if (problem.problem === "ready") {
      const result = await http.put(
        `/clients/${clientId}/embassystatus/ready`,
        problem
      );
      return result.data.data;
    } else {
      const result = await http.put(
        `/clients/${clientId}/embassystatus/reentry`,
        problem
      );
      return result.data.data;
    }
  } catch (error) {
    messages.error(error);
  }
};

export const labourOfficeProblem = async (clientId, problem) => {
  try {
    if (problem.problem === "ready") {
      const result = await http.put(
        `/clients/${clientId}/labouroffice/ready`,
        problem
      );
      return result.data.data;
    } else {
      const result = await http.put(
        `/clients/${clientId}/labouroffice/reentry`,
        problem
      );
      return result.data.data;
    }
  } catch (error) {
    messages.error(error);
  }
};

export const authDocProblem = async (clientId, problem) => {
  try {
    if (problem.problem === "ready") {
      const result = await http.put(
        `/clients/${clientId}/authdoc/ready`,
        problem
      );
      return result.data.data;
    } else if (problem.problem === "enjaz") {
      const result = await http.put(
        `/clients/${clientId}/authdoc/reentry`,
        problem
      );
      return result.data.data;
    } else {
      const result = await http.put(
        `/clients/${clientId}/authdoc/clear`,
        problem
      );
      return result.data.data;
    }
  } catch (error) {
    messages.error(error);
  }
};

export const authDocAgencyProblem = async (clientId, problem) => {
  try {
    const result = await http.put(
      `/clients/${clientId}/authDocAgencystatus/ready`,
      problem
    );
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const embassyListBack = async (clients) => {
  try {
    const result = await http.post("/clients/embassylistback", clients);
    if (result.data.data) {
      const report = await http.post(
        "/lists-and-reports/embassy-list-back",
        clients
      );
      if (report) {
        const reportWindow = window.open();
        reportWindow.document.write(report.data);
        const pdfBlob = new Blob([report], { type: "application/html" });
        saveAs(
          pdfBlob,
          ` منجز السفارة ليوم ${new Date().toLocaleDateString()}.html`
        );
      }
    }
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const labourOfficeListBack = async (clients) => {
  try {
    const result = await http.post("/clients/labourofficelistback", clients);
    if (result.data.data) {
      const report = await http.post(
        "/lists-and-reports/labour-office-list-back",
        clients
      );
      if (report) {
        const reportWindow = window.open();
        reportWindow.document.write(report.data);
        const pdfBlob = new Blob([report], { type: "application/html" });
        saveAs(
          pdfBlob,
          ` منجز مكتب العمل ليوم ${new Date().toLocaleDateString()}.html`
        );
      }
    }
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const exitVisaListBack = async (clients) => {
  try {
    const result = await http.post("/clients/exitvisalistback", clients);
    return result.data;
  } catch (error) {
    messages.error(error);
  }
};

export const authDocsBack = async (clients) => {
  try {
    const result = await http.post(
      "/authenticationdocuments/embassyupdateList",
      clients
    );
    return result.data;
  } catch (error) {
    messages.error(error);
  }
};

export const authDocsAgencyBack = async (clients) => {
  try {
    const result = await http.post(
      "/authenticationdocuments/agencyupdateList",
      clients
    );
    return result.data;
  } catch (error) {
    messages.error(error);
  }
};

export const embassyReport = async (clients) => {
  try {
    const result = await http.post("/lists-and-reports/embassylist", clients);
    return result.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClientsForEnjazPayment = async (id) => {
  try {
    const result = await http.post("/clients/process", {
      enjazStatus: "waiting payment",
    });
    return result.data.data;
  } catch (error) {
    return;
  }
};

export const getClientsForLabList = async (id) => {
  try {
    const result = await http.post("/clients/process", {
      labStatus: "ready",
    });
    return result.data.data;
  } catch (error) {
    return;
  }
};

export const getClientsForLabourOfficeList = async (id) => {
  try {
    const result = await http.post("/clients/process", {
      labourOfficeStatus: "ready",
    });
    return result.data.data;
  } catch (error) {
    return;
  }
};

export const getClientsForExitVisaList = async (id) => {
  try {
    const result = await http.post("/clients/process", {
      exitVisaStatus: "ready",
    });
    return result.data.data;
  } catch (error) {
    return;
  }
};

export const getAuthDocsForList = async () => {
  try {
    const result = await http.get("/authenticationdocuments/mylistdocs");
    return result.data.data;
  } catch (error) {
    return;
  }
};

export const getAuthDocsForAgencyList = async () => {
  try {
    const result = await http.get("/authenticationdocuments/myAgencylistdocs");
    return result.data.data;
  } catch (error) {
    return;
  }
};

export const getClientsWithLabProcessing = async () => {
  try {
    const result = await http.post("/clients/process", {
      labStatus: "processing",
    });
    return result.data.data;
  } catch (error) {
    return;
  }
};

export const getAuthDocsWithEmbassyProcessing = async () => {
  try {
    const result = await http.get(
      "/authenticationdocuments/embassyprocessingdocs"
    );
    return result.data.data;
  } catch (error) {
    return;
  }
};

export const getAuthDocsWithAgencyProcessing = async () => {
  try {
    const result = await http.get(
      "/authenticationdocuments/agencyprocessingdocs"
    );
    return result.data.data;
  } catch (error) {
    return;
  }
};

export const getClientsWithEmbassyProcessing = async () => {
  try {
    const result = await http.post("/clients/process", {
      embassyStatus: "processing",
    });
    return result.data.data;
  } catch (error) {
    return;
  }
};

export const getClientsWithLabourOfficeProcessing = async () => {
  try {
    const result = await http.post("/clients/process", {
      labourOfficeStatus: "processing",
    });
    return result.data.data;
  } catch (error) {
    return;
  }
};

export const getClientsWithExitVisaProcessing = async () => {
  try {
    const result = await http.post("/clients/process", {
      exitVisaStatus: "processing",
    });
    return result.data.data;
  } catch (error) {
    return;
  }
};

export const getClientsForEmbassyList = async () => {
  try {
    const result = await http.post("/clients/process", {
      embassyStatus: "ready",
    });
    return result.data.data;
  } catch (error) {
    return;
  }
};

export const cancelPayment = async (id, bank) => {
  try {
    const result = await http.post(`/api/v2/cancel-payments/${id}`, bank);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const cancelContractPayment = async (id, bank) => {
  try {
    const result = await http.post(
      `/clients/${id}/cancelpayment/contract`,
      bank
    );
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const labSubmit = async (id, lab) => {
  try {
    const result = await http.put(`/clients/${id}/addlab`, lab);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const createReceipt = async (id, receiptBody) => {
  try {
    const result = await http.post(`/api/v2/receipts/${id}`, receiptBody);
    // if (result) {
    //   const receipt = await http.get(`/clients/${id}/createreceipt`, {
    //     responseType: "blob",
    //   });
    //   if (receipt) {
    //     const pdfBlob = new Blob([receipt.data], { type: "application/pdf" });
    //     saveAs(pdfBlob, `فاتورة .pdf`);
    //   }
    // }
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const printReceipt = async (id) => {
  try {
    const result = await http.post(`/clients/${id}/printreceipt`);

    if (result) {
      const receipt = await http.get(`/clients/${id}/createreceipt`, {
        responseType: "blob",
      });
      if (receipt) {
        const pdfBlob = new Blob([receipt.data], { type: "application/pdf" });
        saveAs(pdfBlob, `فاتورة مبدئية.pdf`);
      }
    }
  } catch (error) {
    messages.error(error);
  }
};

export const printBarcode = async (id) => {
  try {
    const result = await http.post(`/clients/${id}/createbarcodeprint`);
    if (result) {
      const barcode = await http.get(`/clients/${id}/createbarcodeprint`, {
        responseType: "blob",
      });
      if (barcode) {
        const pdfBlob = new Blob([barcode.data], { type: "application/pdf" });
        saveAs(pdfBlob, `باركود العميل ${result.data.name}.pdf`);
      }
    }
  } catch (error) {
    messages.error(error);
  }
};

export const createClientSingleLabList = async (id) => {
  try {
    const result = await http.post(`/clients/${id}/createlabsingleclientlist`);

    if (result) {
      const list = await http.get(`/clients/${id}/createlabsingleclientlist`, {
        responseType: "blob",
      });
      if (list) {
        const pdfBlob = new Blob([list.data], { type: "application/pdf" });
        saveAs(pdfBlob, ` استبيان المعمل.pdf`);
      }
    }
  } catch (error) {
    messages.error(error);
  }
};

export const pay = async (id, pay) => {
  try {
    const result = await http.put(`/api/v2/full-payments/${id}`, pay);
    if (result) {
      const id = result.data.data._id;
      const report = await http.post(
        "/lists-and-reports/print-full-client-reciept",
        { _id: id, userName: pay.userName, contract: false }
      );
      return { report: report.data, result: result.data.data };
    }
  } catch (error) {
    messages.error(error);
  }
};

export const payWithDollarsWallet = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/pay/dollarswallet`);
    if (result) {
      const receiptResult = await http.post(
        `/clients/${id}/createfinalreceipt`
      );

      if (receiptResult) {
        const receipt = await http.get(`/clients/${id}/createfinalreceipt`, {
          responseType: "blob",
        });
        if (receipt) {
          const pdfBlob = new Blob([receipt.data], { type: "application/pdf" });
          saveAs(pdfBlob, `فاتورة نهائية.pdf`);
        }
      }
      return result.data.data;
    }
  } catch (error) {
    messages.error(error);
  }
};

export const partiallyPay = async (id, partialPayment) => {
  try {
    const result = await http.post(
      `/api/v2/partial-payments/${id}`,
      partialPayment
    );
    if (result) {
      const data = result.data.data;
      const id = data._id;
      const report = await http.post(
        "/lists-and-reports/print-partial-client-reciept",
        { _id: id, userName: partialPayment.userName, contract: false }
      );
      return { report: report.data, result: data };
    }
  } catch (error) {
    messages.error(error);
  }
};

export const partiallyPayContract = async (id, partialPayment) => {
  try {
    const result = await http.post(
      `/clients/${id}/partiallypay/contract`,
      partialPayment
    );
    if (result) {
      const data = result.data.data;
      const id = data._id;
      const report = await http.post(
        "/lists-and-reports/print-partial-client-reciept",
        { _id: id, userName: partialPayment.userName, contract: true }
      );
      return { report: report.data, result: data };
    }
  } catch (error) {
    messages.error(error);
  }
};

export const postPay = async (id, pay) => {
  try {
    const result = await http.put(`/clients/${id}/postpay`, pay);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const docsWereSent = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/docsweresent`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const initialOkReceived = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/initialok`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const visaReceive = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/visaRecieved`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const enjazEntry = async (id, body) => {
  try {
    const result = await http.put(`/clients/${id}/enjaz/entry`, body);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const enjazPayment = async (id, body) => {
  try {
    const result = await http.put(`/clients/${id}/enjaz/payment`, body);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

//
export const labStatusProcessing = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/labstatus/processing`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const labStatusBack = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/labstatus/back`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const embassyStatusProcessing = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/embassystatus/processing`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const embassyStatusBack = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/embassystatus/back`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const labourOfficeProcessing = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/labouroffice/processing`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const labourOfficeBack = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/labouroffice/back`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const exitVisaProcessing = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/exitvisa/processing`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const exitVisaBack = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/exitvisa/back`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const addDoc = async (id, body) => {
  try {
    const result = await http.put(`/clients/${id}/docrecevied`, body);
    return result.data.data.documents.received.slice(-1)[0];
  } catch (error) {
    messages.error(error);
  }
};

export const deleteDoc = async (id, docId) => {
  try {
    await http.delete(`/clients/${id}/${docId}/docremove`);
  } catch (error) {
    messages.error(error);
  }
};

export const docsComplete = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/docscomplete`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const docsUncomplete = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/docsuncomplete`);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const passportReceived = async (id) => {
  try {
    const result = await http.put(`/clients/${id}/passportreceived`);

    // if (result) {
    //   const docsRetrievedResult = await http.post(
    //     `/clients/${id}/retrievedocs`
    //   );

    //   if (docsRetrievedResult) {
    //     const admit = await http.get(`/clients/${id}/retrievedocs`, {
    //       responseType: "blob",
    //     });
    //     if (admit) {
    //       const pdfBlob = new Blob([admit.data], { type: "application/pdf" });
    //       saveAs(
    //         pdfBlob,
    //         `اقرار باستلام العميل ${result.name} كافة المستندات.pdf`
    //       );
    //     }
    //   }
    // }
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

// Dipatch actions
export const getClientsForDelievery = async () => {
  try {
    const result = await http.get("/clients/fordelivery");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClientsForDelieveryWithRemainingPayment = async () => {
  try {
    const result = await http.get("/clients/paymenttodeliever");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClientsWhoReceivedPassport = async () => {
  try {
    const result = await http.get("/clients/received-passport");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClientsForEnjazEntry = async () => {
  try {
    const result = await http.post("/clients/process", {
      enjazStatus: "entry",
    });
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClientsWhoReceivedAuthorization = async () => {
  try {
    const result = await http.get("/clients/receivedauthorization");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getClientsWhoDeleiveredDocs = async () => {
  try {
    const result = await http.get("/clients/receiveddocuments");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getArchives = async (clientId) => {
  try {
    const result = await http.get("/archives/" + clientId);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const deleteArchive = async (archiveId) => {
  try {
    const result = await http.delete("/archives/" + archiveId);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const downloadArchive = async (archiveId) => {
  try {
    const result = await http.post("/archives/" + archiveId);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const addArchive = async (archive) => {
  try {
    const result = await http.post("/archives/", archive);
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};
