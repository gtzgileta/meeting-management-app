import {
  getMeetingsList,
  addMeeting,
  updateMeeting,
} from '../utils/meeting-util';

// ACTION TYPES
const LOAD_MEETINGS_SUCCESS = "LOAD_MEETINGS_SUCCESS";
const CREATE_MEETING_SUCCESS = "CREATE_MEETING_SUCCESS";
const CREATE_MEETING_FAIL = "CREATE_MEETING_FAIL";
const UPDATE_MEETING_SUCCESS = "UPDATE_MEETING_SUCCESS";
const LOADING_MEETING = "LOADING_MEETING";

// REDUCER
const initialState = {
  meetings: [],
  loading: false,
  error: null,
};

export const loadMeetings = () => async dispatch => {
    const meetingsList = getMeetingsList();
    dispatch({ type: LOAD_MEETINGS_SUCCESS, payload: meetingsList });
};

export const submitMeeting = (data) => async dispatch => {
  try {
    dispatch({ type: LOADING_MEETING });
    const randomId = Math.random().toString(36).slice(2);
    const newData = {...data, id: randomId};

    addMeeting(newData);
    dispatch({ type: CREATE_MEETING_SUCCESS, payload: newData });

    return true;
  } catch (e) {
    dispatch({ type: CREATE_MEETING_FAIL, payload: 'Error trying to store meeting.' });
    return false;
  }
};

export const updateTheMeeting = (data) => async dispatch => {
  try {
    dispatch({ type: LOADING_MEETING });

    const newMeetingList = updateMeeting(data);
    dispatch({ type: UPDATE_MEETING_SUCCESS, payload: newMeetingList });

    return true;
  } catch (e) {
    dispatch({ type: CREATE_MEETING_FAIL, payload: 'Error trying to store meeting.' });
    return false;
  }
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING_MEETING:
      return {
        ...state,
        loading: true,
      };
    case LOAD_MEETINGS_SUCCESS:
      return {
        ...state,
        meetings: payload,
      };
    case CREATE_MEETING_SUCCESS:
      return {
        ...state,
        meetings: [ ...state.meetings, payload ],
        loading: false,
      };
    case UPDATE_MEETING_SUCCESS:
      return {
        ...state,
        meetings: payload,
        loading: false,
      };
    default:
      return state;
  }
}