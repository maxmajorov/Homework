type InitialStateType = {
  themes: string;
};

const initialState = {
  themes: "dark",
};

export const themeReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case CHANGE_THEME: {
      return { ...state, themes: action.color };
    }
    default:
      return state;
  }
};

// ==== ACTION ====

const CHANGE_THEME = "CHANGE-THEME";

type changeThemeACType = {
  type: typeof CHANGE_THEME;
  color: string;
};

export const changeThemeAC = (color: string): changeThemeACType => ({
  type: CHANGE_THEME,
  color: color,
});

type ActionType = changeThemeACType;
