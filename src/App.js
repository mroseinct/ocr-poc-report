import { StrictMode, useState } from "react";
import './style.css'
import SpecialReportTable from "./components/SpecialReportTable";
import SpecialReportDetails from "./components/SpecialReportDetails";

const App = () => {
  const [activeRow, setActiveRow] = useState({});
  return (
    <StrictMode>
      <SpecialReportTable setActiveRow={setActiveRow}/>
      <SpecialReportDetails activeRow={activeRow}/>
    </StrictMode>
  );
};

export default App;