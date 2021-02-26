import { walletConstants } from "../constants/walletConstants";
import http from "../../services/http";
import messages from "../../services/messages";

export const walletAction = () => async (dispatch) => {
  try {
    const result = await http.get("/wallets/mywallet");
    const wallet = result.data.data;
    dispatch({
      type: walletConstants.GET_WALLET_SUCCESS,
      payload: wallet,
    });
  } catch (error) {
    dispatch({
      type: walletConstants.GET_WALLET_FAIL,
    });
  }
};

export const getAddTransactionAction = async () => {
  try {
    const result = await http.get("/wallets/addtransactions");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getDeductTransactionAction = async () => {
  try {
    const result = await http.get("/wallets/deducttransactions");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getWalletNetAction = () => async (dispatch) => {
  try {
    const result = await http.get("/wallets/mynet");
    const net = result.data.data;

    dispatch({
      type: walletConstants.GET_WALLET_NET_SUCCESS,
      payload: net,
    });
  } catch (error) {
    messages.error(error);
    dispatch({
      type: walletConstants.GET_WALLET_NET_FAIL,
    });
  }
};

export const walletAction_noDispatch = async () => {
  try {
    const result = await http.get("/wallets/mywallet");
    return result.data.data;
  } catch (error) {
    // messages.error(error);
  }
};

export const getCreditorsTransactions = async () => {
  try {
    const result = await http.get("/wallets/transactions/creditors");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const getDebtorsTransactions = async () => {
  try {
    const result = await http.get("/wallets/transactions/debtors");
    return result.data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const walletAction_DateTransactions = async (dates) => {
  try {
    const result = await http.post(`/wallets/transactionswithindates`, dates);
    return result.data;
  } catch (error) {
    messages.error(error);
  }
};

export const postTransaction = async (transaction) => {
  try {
    transaction.amount = parseInt(transaction.amount);
    const result = await http.put(`/wallets/transactions`, transaction);
    if (result) {
      const transactions = result.data.data.transactions;
      const lastTransaction = transactions[transactions.length - 1];
      const report = await http.post(
        "/lists-and-reports/print-reciept",
        lastTransaction
      );
      return report.data;
    }
  } catch (error) {
    messages.error(error);
  }
};

export const deleteWalletTransaction = async (transactionId) => {
  try {
    const result = await http.delete(`/wallets/transactions/${transactionId}`);
    return result.data.data._id;
  } catch (error) {
    messages.error(error);
  }
};

export const createWallet = async (wallet) => {
  try {
    const result = await http.post(`/wallets/mywallet`, wallet);
    return result.data.data._id;
  } catch (error) {
    messages.error(error);
  }
};
