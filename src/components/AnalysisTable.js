import DataTable from 'react-data-table-component';
import analysisData from './ocr-analysis-data.json';
import { columns } from './columns';
import { filterItems } from './Utility';

const AnalysisTable = (props) => {

  const { activeRow } = props;

  if (activeRow.state != null) {

    const filteredItems = filterItems(analysisData, activeRow.state);

    return (
      <div className="container mt-5">
        <h3 className="text-center">OCR Document Classification Analysis Data Source For {activeRow.state} </h3>
        <h5>This data contains all of the classification analysis results for {activeRow.state}.  Only shows the analysis jobs with job id.</h5>
        <h5>Table Count: {filteredItems.length}</h5>
        <DataTable
          //title="OCR Document Matched Results"
          columns={columns}
          data={filteredItems}
          pagination
          highlightOnHover
        />
      </div>
    );
  }
};

export default AnalysisTable;