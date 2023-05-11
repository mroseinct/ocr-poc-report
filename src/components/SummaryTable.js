import DataTable from 'react-data-table-component';
import ocrData from './ocr-summary-comparison-report.json';
import runDate from './ocr-rundate.json';

const SummaryTable = (props) => {

    const { setActiveRow } = props;

    const columns = [
        {
            id: 'state',
            name: 'State',
            selector: row => row.state,
            sortable: true,
        },
        {
            id: 'totalDocsAnalyzed',
            name: 'Total Documents Analyzed',
            selector: row => row.totalDocsAnalyzed,
            sortable: true
        },
        {
            id: 'totalDocsCompared',
            name: 'Total Documents Compared',
            selector: row => row.totalDocsCompared,
            sortable: true,
        },
        {
            id: 'totalAwaitingDocCheck',
            name: 'Total Documents Awaiting Doc Check',
            selector: row => row.totalAwaitingDocCheck,
            sortable: true
        },
        {
            id: 'totalDocsMatched',
            name: 'Total Match Count',
            sortable: true,
            selector: row => row.totalDocsMatched,
        },
        {
            id: 'totalDocsMatchedWithHighConfidence',
            name: 'High Confidence Match Count',
            selector: row => row.totalDocsMatchedWithHighConfidence,
            sortable: true,
        },
        {
            id: 'totalDocsWithDiscrepancy',
            name: 'Total Discrepancy Count',
            selector: row => row.totalDocsWithDiscrepancy,
            sortable: true,
        },
        {
            id: 'generalSuccessRate',
            name: 'Overall Accuracy',
            selector: row => row.generalSuccessRate,
            sortable: true,
        },
        {
            id: 'highConfidenceSuccessRate',
            name: 'High Confidence Accuracy',
            selector: row => row.highConfidenceSuccessRate,
            sortable: true,
        },
        {
            id: 'discrepancyRate',
            name: 'Discrepancy Rate',
            selector: row => row.discrepancyRate,
            sortable: true,
        },
        {
            id: 'totalExclusions',
            name: 'Total Exclusions',
            selector: row => row.totalExclusions,
            sortable: true,
        }

    ];

    const onRowClicked = (row, event) => {
        console.log("row", row);
        setActiveRow(row);
    };

    return (
        <div className="container mt-5">            
        <h1>OCR Document Classification Accuracy Results </h1>
        <h5>Report Run Date : {runDate}</h5>
            <DataTable
                title="OCR Document Classification Summary"
                onRowClicked={onRowClicked}
                columns={columns}
                data={ocrData}
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

export default SummaryTable;