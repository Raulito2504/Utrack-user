import AsynStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "expo-zustand-persist";
import { create } from "zustand";

interface User {
  name: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;
  token: string | undefined;
  profilePicture: string | undefined;
  studentID: number | undefined;
  role: "user" | "teacher" | "admin" | undefined;
}

interface UserStore {
  user: User;
  setUser: (user: Partial<User>) => void;
  clearUser: () => void;
}

export const userDataStore = create<UserStore>()(
  persist(
    (set) => ({
      user: {
        name: undefined,
        lastName: undefined,
        email: undefined,
        password: undefined,
        token: undefined,
        profilePicture: undefined,
        studentID: undefined,
        role: undefined,
      },
      setUser: (user) =>
        set((state) => ({
          user: { ...state.user, ...user },
        })),
      clearUser: () =>
        set({
          user: {
            name: undefined,
            lastName: undefined,
            email: undefined,
            password: undefined,
            token: undefined,
            profilePicture: undefined,
            studentID: undefined,
            role: undefined,
          },
        }),
    }),
    {
      name: "userData",
      storage: createJSONStorage(() => AsynStorage),
    },
  ),
);
