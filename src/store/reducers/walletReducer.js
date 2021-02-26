import { walletConstants } from "../constants/walletConstants";

const initialState = {
  data: [],
  wallet: {},
  net: [],
  addTransactions: [],
  deductTransactions: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case walletConstants.GET_WALLET_SUCCESS:
      return {
        ...state,
        data: action.payload.transactions,
        wallet: action.payload,
        loading: false,
      };

    case walletConstants.GET_WALLET_ADD_TRANSACTIONS_SUCCESS:
      return { ...state, addTransactions: action.payload };

    case walletConstants.GET_WALLET_NET_SUCCESS:
      return { ...state, net: action.payload };

    case walletConstants.DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        data: state.data.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case walletConstants.GET_WALLET_DEDUCT_TRANSACTIONS_SUCCESS:
      return { ...state, deductTransactions: action.payload };

    case walletConstants.POST_TRANSACTION_SUCCESS:
    case walletConstants.POST_TRANSACTION_FAIL:
    case walletConstants.GET_WALLET_FAIL:
    case walletConstants.GET_WALLET_ADD_TRANSACTIONS_FAIL:
    case walletConstants.DELETE_TRANSACTION_FAIL:
    case walletConstants.GET_WALLET_NET_FAIL:
    case walletConstants.GET_WALLET_DEDUCT_TRANSACTIONS_FAIL:
      return state;

    default:
      return state;
  }
};
