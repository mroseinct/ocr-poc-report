import DataTable from 'react-data-table-component';
import awaitingData from './ocr-awaiting-tag-update-data.json';
import { columns } from './columns';
import { filterItems } from './Utility';

const AwaitingTable = (props) => {

  const { activeRow } = props;

  if (activeRow.state != null) {

    const filteredItems = filterItems(awaitingData, activeRow.state);

    return (
      <div className="container mt-5">
        <h3 className="text-center">OCR Document Classification List Of Documents Awaiting Manual Doc Check For {activeRow.state}</h3>
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

export default AwaitingTable;