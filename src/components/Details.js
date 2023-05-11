const Details = (props) => {
    const { activeRow } = props;
    if (activeRow.state != null) {
        return (
            <div>
                <h3>Details For {activeRow.state}</h3>
                <div className="details">
                    <p>Total Documents Analyzed: {activeRow.totalDocsAnalyzed}</p>
                    <p>Total Documents Compared: {activeRow.totalDocsCompared}</p>
                    <p>Total Documents Awaiting Doc Check: {activeRow.totalAwaitingDocCheck}</p>
                    <p>Total Documents Matched: {activeRow.totalDocsMatched}</p>
                    <p>Total Documents With Discrepancy: {activeRow.totalDocsWithDiscrepancy}</p>
                    <p>Total Documents Matched With High Confidence (90% and above): {activeRow.totalDocsMatchedWithHighConfidence}</p>
                    <p>Overall Accuracy: {activeRow.generalSuccessRate}</p>
                    <p>High Confidence Accuracy: {activeRow.highConfidenceSuccessRate}</p>
                    <p>Discrepancy Rate: {activeRow.discrepancyRate}</p>
                    <p>Total Exclusions (Bad Scans and Others): {activeRow.totalExclusions}</p>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Details;