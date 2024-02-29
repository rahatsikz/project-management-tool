"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { ThemeProviders } from "./ThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>

    {children}

  </Provider>
};

export default Providers;
