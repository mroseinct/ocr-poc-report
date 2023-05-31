import { format } from "date-fns";

export function filterItems(data, state) {
    let filteredItems = data.filter(
        item => item.state && item.state.toLowerCase().includes(state.toLowerCase())
    ).map((item) => {
        if (item.createddate) {
            let newDate = format(new Date(item.createddate * 1000), 'MM/dd/yyyy');
            let confidenceRate = item.confidence * 100;
            return {
                ...item,
                createddate: newDate,
                confidence: parseFloat(confidenceRate.toFixed(4))
            };
        }
        return item;
    });

    return filteredItems;
}

export function filterSummaryItems(data, stateList) {
    let filteredItems = data.filter(
        item => item.state && stateList.includes(item.state)
    );

    return filteredItems;
}