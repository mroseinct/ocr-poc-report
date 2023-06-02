import DataTable from 'react-data-table-component';
import ocrData from './ocr-special-report.json';
import runDate from './ocr-rundate.json';
import { filterSummaryItems } from './Utility';

const SpecialReportTable = (props) => {

  const { setActiveRow } = props;

  const columns = [
    {
      name: 'State',
      selector: row => row.state
    },
    {
      name: 'Deal Count',
      selector: row => row.dealCount,
      sortable: true,
    },
    {
      name: 'Total Document Count',
      selector: row => row.totalDocCount,
      sortable: true
    },
    {
      name: 'Average Document Count',
      selector: row => row.averageDocCount,
      sortable: true
    },
    {
      name: 'Total Match Count',
      sortable: true,
      selector: row => row.totalMatchCount,
    },
    {
      name: 'Average Match Count',
      selector: row => row.averageMatchCount,
      sortable: true
    },
    {
      name: 'Total High Confidence Match Count',
      selector: row => row.totalHighConfidenceMatchCount,
      sortable: true,
    },
    {
      name: 'Average High Confidence Match Count',
      selector: row => row.averageHighConfidenceMatchCount,
      sortable: true
    },
    {
      name: 'Total Discrepancy Count',
      selector: row => row.totalDiscrepancyCount,
      sortable: true,
    },
    {
      name: 'Average Discrepancy Count',
      selector: row => row.averageDiscrepancyCount,
      sortable: true
    },
    {
      name: 'Average Overall Accuracy',
      selector: row => row.averageOverallAccuracy,
      sortable: true,
    },
    {
      name: 'Average High Confidence Accuracy',
      selector: row => row.averageHighConfidenceAccuracy,
      sortable: true,
    }
  ];

  let states = ['PA', 'OH', 'VA', "FL", "GA", "NY", "CO"];

  const onRowClicked = (row, event) => {
    console.log("row", row);
    setActiveRow(row);
  };

  const filteredItems = filterSummaryItems(ocrData, states);

  return (
    <div className="container mt-5">
      <h1>OCR Document Results </h1>
      <h5>Report Run Date : {runDate}</h5>
      <DataTable
        title="OCR Document Analysis Summary"
        //onRowClicked={onRowClicked}
        columns={columns}
        data={filteredItems}
        onRowClicked={onRowClicked}
        //pagination
        //selectableRows
        selectableRowsHighlight
        highlightOnHover
        //expandableRows 
        //expandableRowsComponent={ExpandedComponent}
        //dense
        pointerOnHover
      />
    </div>
  );
};

export default SpecialReportTable;