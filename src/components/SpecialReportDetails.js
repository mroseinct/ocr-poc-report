import DataTable from 'react-data-table-component';
import resultsData from './ocr-special-details-report.json';
import { filterItems } from './Utility';

const SpecialReportDetails = (props) => {

  const { activeRow } = props;

  const columns = [
    {
      name: 'Deal Id',
      selector: row => row.dealid,
      sortable: true,
    },
    {
      name: 'Document Count',
      selector: row => row.docCount,
      sortable: true
    },
    {
      name: 'High Confidence Match Count',
      sortable: true,
      selector: row => row.highConfidenceMatchCount,
    },
    {
      name: 'Overall Match Count',
      selector: row => row.matchCount,
      sortable: true,
    },
    {
      name: 'Discrepancy Count',
      selector: row => row.discrepancyCount,
      sortable: true,
    },
    {
      name: 'Awaiting Doc Check Count',
      selector: row => row.awaitingDocCheckCount,
      sortable: true,
    },
    {
      name: 'Overall Accuracy',
      selector: row => row.overallAccuracy,
      sortable: true,
    },
    {
      name: 'High Confidence Accuracy',
      selector: row => row.highConfidenceAccuracy,
      sortable: true,
    }
  ];

  if (activeRow.state != null) {

    const filteredItems = filterItems(resultsData, activeRow.state);

    return (
      <div className="container mt-5">
        <h3 className="text-center">OCR Document Classification Results Data Source For {activeRow.state}</h3>
        <h5>This data dump contains all of the classification analysis results for {activeRow.state} and includes all the analysis jobs.</h5>
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

export default SpecialReportDetails;