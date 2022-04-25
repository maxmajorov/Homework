import { PeoplesType, UserType } from "../HW8";

// ===== ACTIONS =====
export const SORT_UP = "SORT-UP";
export const SORT_DOWN = "SORT-DOWN";
export const CHECK_AGE = "CHECK-AGE";

export type ActionsType = SortUpACType | SortDownACType | CheckAgeACType;

type SortUpACType = {
  type: typeof SORT_UP;
};

type SortDownACType = {
  type: typeof SORT_DOWN;
};

type CheckAgeACType = {
  type: typeof CHECK_AGE;
  payload: number;
};

export const sortUpAC = (): SortUpACType => ({ type: SORT_UP });
export const sortDownAC = (): SortDownACType => ({ type: SORT_DOWN });
export const checkAgeAC = (sortAge: number): CheckAgeACType => ({
  type: CHECK_AGE,
  payload: sortAge,
});

export const homeWorkReducer = (
  state: UserType,
  action: ActionsType
): UserType => {
  switch (action.type) {
    case SORT_UP: {
      return [
        ...state.sort(
          (a: PeoplesType, b: PeoplesType) =>
            a.name.charCodeAt(0) - b.name.charCodeAt(0)
        ),
      ];
    }
    case SORT_DOWN: {
      return [
        ...state.sort(
          (a: PeoplesType, b: PeoplesType) =>
            b.name.charCodeAt(0) - a.name.charCodeAt(0)
        ),
      ];
    }
    case CHECK_AGE: {
      return [...state.filter((el) => el.age >= action.payload)];
    }
    default:
      return state;
  }
};
