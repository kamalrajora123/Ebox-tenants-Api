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
  Category,
  Vendor
}) => async (httpRequest) => {
  const data = await doGetCategory({
    BadRequestError,
    Category,
    Vendor
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

//Delete Vendor Category  
const Categorydelete = ({
  BadRequestError,
  doDeleteCategory,
  doCheckVendorforcategory
}) => async (httpRequest) => {
  const { id } = httpRequest.params;

  try {
    await doCheckVendorforcategory({
      cat_id: id,
      BadRequestError,
    });
  }
  catch (err) {

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
  throw new BadRequestError('The Category Cannot Be Deleted Because Vendors Are Assigned To This Category.');
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
    expirationdate,
    alt_name,
    alt_lname,
    dif_add1,
    dif_add2,
    dif_city_id,
    dif_state_id,
    dif_zip,
    country } = httpRequest.body
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
    alt_name,
    alt_lname,
    dif_add1,
    dif_add2,
    dif_city_id,
    dif_state_id,
    dif_zip,
    country
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
  Vendor,
  Vendorcategory,
  Accounts,
  State
}) => async (httpRequest) => {
  const data = await doGetVendor({
    BadRequestError,
    Vendor,
    Accounts,
    State,
    Vendorcategory
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
  Vendorcategory
}) => async (httpRequest) => {
  const { name, username, companyname, status, cat_id, mobile } = httpRequest.body;
  console.log("BODY DATA=>>>", httpRequest.body);
  const data = await doSearchVendor({
    name,
    username,
    companyname,
    status,
    Vendor,
    Vendorcategory,
    cat_id,
    mobile
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

//status data
const status = ({
  doStatus,
  Vendor,
  BadRequestError,
  validateVendorStatus
}) => async (httpRequest) => {
  const { id } = httpRequest.params;
  let { status } = httpRequest.body;
  status = (status === "Y") ? "N" : "Y"
  const {
    error,
  } = validateVendorStatus(httpRequest.body);
  if (error) throw new BadRequestError(error.message);
  const data = await doStatus({
    id,
    Vendor,
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
