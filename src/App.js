import { StrictMode, useState } from "react";
import SummaryTable from "./components/SummaryTable";
import Details from "./components/Details";
import MatchedTable from "./components/MatchedTable";
import DiscrepancyTable from "./components/DiscrepancyTable";
import AnalysisTable from "./components/AnalysisTable";
import ComparisonTable from "./components/ComparisonTable";
import ResultsTable from "./components/ResultsTable";
import MatchedHighConfidenceTable from "./components/MatchedHighConfidenceTable";
import AwaitingTable from "./components/AwaitingTable";
import ExclusionsTable from "./components/ExclusionsTable";
import './style.css'

const App = () => {
  const [activeRow, setActiveRow] = useState({});
  return (
    <StrictMode>
      <SummaryTable setActiveRow={setActiveRow} />
      <Details activeRow={activeRow} />
      <MatchedHighConfidenceTable activeRow={activeRow}/>
      <MatchedTable activeRow={activeRow}/>
      <DiscrepancyTable activeRow={activeRow}/>
      <AnalysisTable activeRow={activeRow}/>
      <AwaitingTable activeRow={activeRow}/>
      <ComparisonTable activeRow={activeRow}/>
      <ResultsTable activeRow={activeRow}/>
      <ExclusionsTable activeRow={activeRow}/>
    </StrictMode>
  );
};

export default App;