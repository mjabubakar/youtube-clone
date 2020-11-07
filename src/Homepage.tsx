import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Header from "./components/header/container";
import Main from "./components/main";
import SideBar from "./components/sidebar/container";
import "./styles/homepage.scss";

type DisplayContextType = {
  display: boolean;
  setDisplay: (value: boolean) => void;
};

const DisplayContext = createContext<DisplayContextType | undefined>(undefined);

type IProps = {
  children: ReactNode;
};

export const DisplayProvider = ({ children }: IProps) => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    const currentDisplay = false;
    setDisplay(currentDisplay);
  }, []);
  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
};

export const useDisplay = () => useContext(DisplayContext);

const HomePage: React.FC = () => {
  return (
    <DisplayProvider>
      <div style={{ position: "relative" }}>
        <Header />
        <div className="body">
          <SideBar />
          <Main />
        </div>
      </div>
    </DisplayProvider>
  );
};

export default HomePage;
