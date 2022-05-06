export type InitialStateType = typeof initState;

const initState = {
  loading: false,
};

export const loadingReducer = (
  state = initState,
  action: LoadingACType
): InitialStateType => {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: action.loading };
    }
    default:
      return state;
  }
};

// ==== action / action creator / type AC ====

const LOADING = "LOADING";

type LoadingACType = {
  type: typeof LOADING;
  loading: boolean;
};

export const loadingAC = (loading: boolean): LoadingACType => ({
  type: LOADING,
  loading: loading,
});
