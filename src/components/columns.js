export const columns = [
    {
      name: 'State',
      selector: row => row.state
    },
    {
      name: 'Deal Id',
      selector: row => row.tranid,
      sortable: true
    },
    {
      name: 'File Name',
      selector: row => row.filename,
      sortable: true
    },
    {
      name: 'Doc Type Id',
      sortable: true,
      selector: row => row.doctypeid
    },
    {
      name: 'Doc Type Name',
      selector: row => row.doctypename,
      sortable: true
    },
    {
      name: 'Assigned Doc Type',
      selector: row => row.assigneddocid,
      sortable: true
    },
    {
      name: 'Assigned Doc Type Name',
      selector: row => row.assigneddoctype,
      sortable: true
    },
    {
      name: 'Job Id',
      selector: row => row.jobid,
      sortable: true
    },
    {
      name: 'Confidence Rate',
      selector: row => row.confidence,
      sortable: true
    },
    {
      name: 'Created Date',
      selector: row => row.createddate,
      sortable: true
    }
  ];