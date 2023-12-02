
//status data
const status = ({
  doStatus,
  Faq,
  BadRequestError,
  validateFaqStatus
}) => async (httpRequest) => {
  const { id } = httpRequest.params;
  let { status } = httpRequest.body;
  status = (status === "Y") ? "N" : "Y"
  const {
    error,
  } = validateFaqStatus(httpRequest.body);
  if (error) throw new BadRequestError(error.message);
  const data = await doStatus({
    id,
    Faq,
    BadRequestError,
    status
  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Status updated successfully!',
      data,
    },
  };
};





//Add Work Order 
const WorkAdd = ({
  BadRequestError,
  doWork,
  doPartslabor
}) => async (httpRequest) => {
  const { name,
    pro_id,
    pro_unitid,
    task_cat_id,
    vendor_id,
    invoicenumber,
    charge,
    workdetails,
    vendornotes,
    entry,
    priority,
    status,
    pro_staff_id,
    assignedto,
    collab,
    duedate,
    qty,
    account_id,
    description,
    price,
    tot_price,
  } = httpRequest.body
  console.log("httpRequest.body", httpRequest.body)
  // const { filename } = httpRequest.file;
  var filename
  if (httpRequest.file) {
    var { filename } = httpRequest.file;
  }
  console.log("filename", filename)
  const workResult = await doWork({
    name,
    pro_id,
    pro_unitid,
    task_cat_id,
    vendor_id,
    invoicenumber,
    charge,
    workdetails,
    vendornotes,
    entry,
    priority,
    status,
    pro_staff_id,
    assignedto,
    collab,
    duedate,

    filename
  });

  console.log("workResult", workResult.id)

  const Partlaborss = await doPartslabor({
    workorder_id: workResult.id,
    qty,
    account_id,
    description,
    price,
    tot_price
  });

  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Work Order Added Successfully!',
      data: workResult,
    },
  };
};



//View Work Order
const getWork = ({
  BadRequestError,
  doGetWork,
  WorkOrder,
  Workcategory,
  property,
  Unit,
  Vendor,
  TaskCategory,
  Partslabour
}) => async (httpRequest) => {
  const data = await doGetWork({
    BadRequestError,
    WorkOrder,
    Workcategory,
    property,
    Unit,
    Vendor,
    TaskCategory,
    Partslabour


  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Fetched Work successfully!',
      data,
    },
  };
};

// Search Work Order
const searchWork = ({
  doSearchWork,
  WorkOrder,
  property,
  Unit,
  Vendor,
  TaskCategory
}) => async (httpRequest) => {
  const { pro_id, priority, assignedto, status, vendor_id, StatrtDate, EndDate } = httpRequest.body;
  console.log("BODY DATA=>>>", httpRequest.body);
  const data = await doSearchWork({
    property,
    Unit,
    Vendor,
    pro_id,
    priority,
    assignedto,
    status,
    vendor_id,
    StatrtDate,
    EndDate,
    WorkOrder,
    TaskCategory

  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Work order  Search successfully!',
      data,
    },
  };
};


// Edit Work Order 
const updateWork = ({
  doUpdateWork,
  WorkOrder,
  BadRequestError,
  doUpdatePartslabor
}) => async (httpRequest) => {
  const { id } = httpRequest.params;
  const workdata = httpRequest.body;
  // const { filename } = httpRequest.file;
  var filename
  if (httpRequest.file) {
    var { filename } = httpRequest.file;
  }
  const data = await doUpdateWork({
    id,
    WorkOrder,
    BadRequestError,
    workdata,
    filename
  });

  console.log("Workdata", workdata)
  const updatepartslabor = await doUpdatePartslabor({
    workorder_id: id,
    qty: workdata.qty,
    account_id: workdata.account_id,
    description: workdata.description,
    price: workdata.price,
    tot_price: workdata.description
  });




  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Work order update successfully!',
      data,
    },
  };
};


//Deleted Work order 
const Workdelete = ({
  BadRequestError,
  doDeleteWork
}) => async (httpRequest) => {
  const {
    id,
  } = httpRequest.params;

  const data = await doDeleteWork({
    id,
    BadRequestError
  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Deleted  Work successfully!',
      data,
    },
  };
};


// View All details for work order 
const getDetail = ({
  BadRequestError,
  doGetDetail,
  WorkOrder,
  Partslabour,
  Accounts,
  Vendor,
  property,
  Unit
}) => async (httpRequest) => {
  const { id } = httpRequest.params;
  const data = await doGetDetail({
    BadRequestError,
    WorkOrder,
    Partslabour,
    id,
    Accounts,
    Vendor,
    property,
    Unit
  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'View All Detail For Work Order!',
      data,
    },
  };
};



module.exports = {
  WorkAdd,
  getWork,
  searchWork,
  updateWork,
  Workdelete,
  status,
  getDetail
};
