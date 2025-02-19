import { DateUser } from "@/interfaces/interfaces";
import { Dispatch, SetStateAction, createContext } from "react";

interface UsersContext {
  users: DateUser[];
  setUsers: Dispatch<SetStateAction<DateUser[]>>;
  isDrawerOpen: boolean
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>
}

export const UsersContext = createContext<UsersContext>({
  users: [],
  setUsers: () => {},
  isDrawerOpen: false,
  setIsDrawerOpen: () => {}
});