import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/slices/appSlice";

const useCollapseSidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
};

export default useCollapseSidebar;
