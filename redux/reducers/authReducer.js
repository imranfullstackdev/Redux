import {
  LOGOUT,
  SIGNIN,
  SIGNUP,
  TAB_CHANGE,
  PAYMENT_METHOD,
  EVENT_DETAILS,
  ERROR_MESSAGE,
  ORG_TAB,
  EVENT_ID,
} from "../actionTypes/authActionType";

const INITIAL_STATE = {
  accessToken: null,
  country: "",
  email: "",
  fname: "",
  id: "",
  lname: "",
  stripe: [],
  teacher: null,
  user_type: "",
  tabIndex: "1",
  paymentMethod: {
    showPaymentPage: false,
    client: "",
    errors: "",
  },
  eventDetails: {
    eventType: "",
    eventName: "",
    eventDate: "",
    eventImage: "",
  },
  errorMessage: {
    id: "",
    errormessage: "",
  },
  ORG_TAB: {
    Event_Details: false,
    Venue_Details: false,
    Payment: false,
    Fees: false,
    syllabus: false,
    About: false,
    colloborators: false,
  },
  EVENT_ID: {
    ID: "",
  },
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN:
      return { ...state, ...action.payload };
    case SIGNUP:
      return { ...state, ...action.payload };
    case LOGOUT:
      return INITIAL_STATE;
    case TAB_CHANGE:
      return { ...state, tabIndex: action.payload };
    case PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case EVENT_DETAILS:
      return { ...state, eventDetails: action.payload };
    case ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    case ORG_TAB:
      return { ...state, ORG_TAB: action.payload };
    case EVENT_ID:
      return { ...state, EVENT_ID: action.payload };
    default:
      return state;
  }
};
