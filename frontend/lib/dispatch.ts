import { addCash } from "./redux/features/cashSlice";

export const addCrumbDispatch = (name: string, url: string, dispatch: any) => {
  dispatch(
    addCash({
      name: name,
      url: url,
    })
  );
};
