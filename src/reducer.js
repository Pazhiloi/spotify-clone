export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQBAAafy6y-3seO9VO8QQ0sZ8O1U2PObblLviHnoklCNIm2p1Pp5ygTt6B03vHazd3fRBOtk8jzOfFH4zjsZG2buVFtJxtAcPB-uWMPWHsg5Il15WNxsLEjOIYciYXXGcUNMKnhwu2_y0lfOxvW1rA2pMEiWMb74d-ddmALlBPQeP20Qfurc",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
case "SET_TOKEN":
  return {
    ...state,
    token: action.token
  }
  case 'SET_PLAYLISTS':
    return {
      ...state,
      playlists: action.playlists,
    };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }
    default:
      return state
  }
};

export default reducer;
