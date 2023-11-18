
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
    amount } = httpRequest.body
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
    amount,
    filename
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
  TaskCategory
}) => async (httpRequest) => {
  const data = await doGetWork({
    BadRequestError,
    WorkOrder,
    Workcategory,
    property,
    Unit,
    Vendor,
    TaskCategory
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
  const { pro_id, priority, assignedto, status, vendor_id } = httpRequest.body;
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
    WorkOrder,
    TaskCategory

  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Vendor Search successfully!',
      data,
    },
  };
};


// Edit Work Order 
const updateWork = ({
  doUpdateWork,
  WorkOrder,
  BadRequestError,
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





module.exports = {
  WorkAdd,
  getWork,
  searchWork,
  updateWork,
  Workdelete,
  status,
};
