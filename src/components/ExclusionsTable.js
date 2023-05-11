import DataTable from 'react-data-table-component';
import discrepancyData from './ocr-exclusions-report.json';
import { filterItems } from './Utility';

const ExclusionsTable = (props) => {

  const { activeRow } = props;

  const columns = [
    {
      name: 'State',
      selector: row => row.state
    },
    {
      name: 'Deal Id',
      selector: row => row.tranid,
      sortable: true,
    },
    {
      name: 'File Name',
      selector: row => row.filename,
      sortable: true
    },
    {
      name: 'Doc Type Id',
      sortable: true,
      selector: row => row.doctypeid,
    },
    {
      name: 'Doc Type Name',
      selector: row => row.doctypename,
      sortable: true,
    },
    {
      name: 'Assigned Doc Type',
      selector: row => row.assigneddocid,
      sortable: true,
    },
    {
      name: 'Assigned Doc Type Name',
      selector: row => row.assigneddoctype,
      sortable: true,
    },
    {
      name: 'Job Id',
      selector: row => row.jobid,
      sortable: true,
    },
    {
      name: 'Confidence Rate',
      selector: row => row.confidence,
      sortable: true,
    },
    {
      name: 'Created Date',
      selector: row => row.createddate,
      sortable: true,
    }
  ];

  if (activeRow.state != null) {

    const filteredItems = filterItems(discrepancyData, activeRow.state);

    return (
      <div className="container mt-5">
        <h3 className="text-center">OCR Document Classification List Of Bad Scans and Others For {activeRow.state}</h3>
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

export default ExclusionsTable;