//Add Vendor Category
const categoryAdd = ({
  BadRequestError,
  doCategory,
  validateAddCategory
}) => async (httpRequest) => {
  const {
    error,
  } = validateAddCategory(httpRequest.body);
  if (error) throw new BadRequestError(error.message);
  const { name } = httpRequest.body
  const categoryResult = await doCategory({
    name,
  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Vendor category  added successfully!',
      data: categoryResult,
    },
  };
};




//View Vendor Category
const getCategory = ({
  BadRequestError,
  doGetCategory,
  Category
}) => async (httpRequest) => {
  const data = await doGetCategory({
    BadRequestError,
    Category
  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Fetched Category successfully!',
      data,
    },
  };
};






// Edit Vendor Category
const updateCategory = ({
  doUpdateCategory,
  Category,
  BadRequestError,
  validateUpdateCategory
}) => async (httpRequest) => {
  const { id } = httpRequest.params;
  const categorydata = httpRequest.body;
  const {
    error,
  } = validateUpdateCategory(httpRequest.body);
  if (error) throw new BadRequestError(error.message);
  const data = await doUpdateCategory({
    id,
    Category,
    BadRequestError,
    categorydata
  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: ' Vendor Category updated successfully!',
      data,
    },
  };
};


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



//Delete Vendor Category  
const Categorydelete = ({
  BadRequestError,
  doDeleteCategory
}) => async (httpRequest) => {
  const {
    id,
  } = httpRequest.params;

  const data = await doDeleteCategory({
    id,
    BadRequestError
  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Deleted vendor Category successfully!',
      data,
    },
  };
};


//Add Vendor 
const VendorAdd = ({
  BadRequestError,
  doVendor,
  validateAddVendor
}) => async (httpRequest) => {
  // const {
  //   error,
  // } = validateAddVendor(httpRequest.body);
  // if (error) throw new BadRequestError(error.message);
  const { name,
    username,
    mobile,
    lname,
    description,
    account_id,
    accont_num,
    altemail,
    address,
    address2,
    zipno,
    company_url,
    provider,
    tax_idtype,
    taxpayerid,
    policynum,
    cat_id,
    state_id,
    city_id,
    mobileno,
    country_code,
    role_id,
    companyname,
    expirationdate } = httpRequest.body
  const vendorResult = await doVendor({
    name,
    username,
    mobile,
    mobileno,
    company_url,
    lname,
    description,
    account_id,
    accont_num,
    altemail,
    address,
    address2,
    zipno,
    provider,
    tax_idtype,
    taxpayerid,
    policynum,
    cat_id,
    state_id,
    city_id,
    country_code,
    role_id,
    companyname,
    expirationdate,
  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Vendor added successfully!',
      data: vendorResult,
    },
  };
};



//View Vendor
const getVendor = ({
  BadRequestError,
  doGetVendor,
  Vendor
}) => async (httpRequest) => {
  const data = await doGetVendor({
    BadRequestError,
    Vendor
  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Fetched Vendor successfully!',
      data,
    },
  };
};

// Search Vendors
const searchVendor = ({
  doSearchVendor,
  Vendor,
}) => async (httpRequest) => {
  const { name, username, company_url, status } = httpRequest.body;
  console.log("BODY DATA=>>>", httpRequest.body);
  const data = await doSearchVendor({
    name,
    username,
    company_url,
    status,
    Vendor,
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


// Edit Vendor 
const updateVendor = ({
  doUpdatevendor,
  Vendor,
  BadRequestError,
  validateUpdateVendor
}) => async (httpRequest) => {
  const { id } = httpRequest.params;
  const vendordata = httpRequest.body;
  // const {
  //   error,
  // } = validateUpdateVendor(httpRequest.body);
  // if (error) throw new BadRequestError(error.message);
  const data = await doUpdatevendor({
    id,
    Vendor,
    BadRequestError,
    vendordata
  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: ' Vendor updated successfully!',
      data,
    },
  };
};


//Delete Vendor   
const Vendordelete = ({
  BadRequestError,
  doDeleteVendor
}) => async (httpRequest) => {
  const {
    id,
  } = httpRequest.params;

  const data = await doDeleteVendor({
    id,
    BadRequestError
  });
  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Deleted  Vendor successfully!',
      data,
    },
  };
};





module.exports = {
  categoryAdd,
  getCategory,
  Categorydelete,
  updateCategory,
  VendorAdd,
  getVendor,
  searchVendor,
  updateVendor,
  Vendordelete,
  status,
};
