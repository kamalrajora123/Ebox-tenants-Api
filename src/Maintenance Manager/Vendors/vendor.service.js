
const { sequelize, Vendorcategory, Vendor, Vendorfile, Vendorfilecategory } = require('../../db');
const { NotFoundError, BadRequestError } = require('../../utils/api-errors');

//Add Vendor Category
const doCategory = async ({ name }) => {
  const existingCategory = await Vendorcategory.findOne({ where: { name } });
  if (existingCategory) {
    throw new BadRequestError("Category With The Same Name Already Exists");
  }
  const category = await Vendorcategory.create({
    name,
  });
  return {
    categoryId: category.id
  };
};

//view Vendor Category
const doGetCategory = async ({
  Vendor,
  BadRequestError
}) => {
  const categories = await Vendorcategory.findAll(
    {
      include: { model: Vendor },
      order: [["createdAt", "DESC"]],
    }
  );
  return categories
};


//Edit vendor categoryes
const doUpdateCategory = async ({
  id,
  BadRequestError,
  categorydata,
}) => {
  const { name } = categorydata;

  const existingCategory = await Vendorcategory.findOne({
    where: {
      name: name,
      id: { [Op.ne]: id } // exclude the current 
    }
  });
  if (existingCategory) {
    throw new BadRequestError(" Category With The Same Name Already Exists");
  }

  const data = await Vendorcategory.update(categorydata,
    {
      where: {
        id: id,
      },
    },

  );
  if (data[0] == 0) throw new BadRequestError("Id Not Match");
  return data[0];
};






//delete vendor category
const doDeleteCategory = async ({
  id
}) => {
  const data = await Vendorcategory.destroy({
    where: {
      id: id,
    },
  })
  if (data == 0) throw new BadRequestError("Id Not Match");
  return data[0];
};
// find the vendor_id for deleted
const doCheckVendorforcategory = async ({
  cat_id,
}) => {
  const vndrs = await Vendor.findOne({
    where: {
      cat_id
    },
  });
  if (!vndrs) throw new NotFoundError('Agent not found!');
  return vndrs;
};








//Add Vendor
const doVendor = async ({ name,
  username,
  mobile,
  lname,
  description,
  account_id,
  accont_num,
  altemail,
  mobileno,
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
}) => {

  const existingVendor = await Vendor.findOne({ where: { [Op.or]: [{ username }, { mobile }] } });
  if (existingVendor) {
    throw new BadRequestError("The Username And Mobile Number Already Exists. Please Select Another Username And Mobile Number");
  }
  const vendor = await Vendor.create({
    name,
    username,
    company_url,
    mobile,
    lname,
    mobileno,
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
    vendorId: vendor.id
  };
};



//view Vendor
const doGetVendor = async ({
  Vendorcategory,
  Accounts,
  State
}) => {
  const vendoress = await Vendor.findAll(
    {
      where: { role_id: 5 },
      order: [["createdAt", "DESC"]],
      include: [{ model: Vendorcategory }, { model: Accounts }, { model: State }]
    }
  );
  return vendoress
};


// Search Vendor
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require('moment');

const doSearchVendor = async ({
  name,
  username,
  companyname,
  status,
  cat_id,
  mobile,
  Vendor,
  StatrtDate,
  EndDate,
  Vendorcategory,
  BadRequestError,
}) => {

  let newobject = {};
  if (name) {
    newobject.name = { [Op.like]: `%${name}%` }
  }
  if (username) {
    newobject.username = { [Op.like]: `%${username}%` }
  } if (companyname) {
    newobject.companyname = { [Op.like]: `%${companyname}%` }
  } if (cat_id) {
    newobject.cat_id = { [Op.like]: `%${cat_id}%` }
  } if (mobile) {
    newobject.mobile = { [Op.like]: `%${mobile}%` }
  }
  if (status) {
    newobject.status = status
  }

  if (StatrtDate) {
    const startDate = moment(StatrtDate).startOf('day').toDate();
    newobject.createdAt = {
      [Op.gte]: startDate,
    };
  }
  if (EndDate) {
    // Create a start date for the selected date
    const endDate = moment(EndDate).endOf('day').toDate();
    // Use the start date in the Sequelize query
    newobject.createdAt = {
      [Op.lte]: endDate,
    };
  }





  newobject.role_id = 5;
  console.log("newobject", newobject);
  const data = await Vendor.findAll({
    where: newobject,
    // order: [['name', 'ASC']],
    order: [["createdAt", "DESC"]],
    include: { model: Vendorcategory },
  });
  if (data[0] == 0) throw new BadRequestError("Data Not Match");
  return data;
};

//Edit vendor
const doUpdatevendor = async ({
  id,
  BadRequestError,
  vendordata
}) => {
  // console.log("vendordata", vendordata.username)
  const existingVendor = await Vendor.findOne({
    where: {
      id: { [Op.ne]: id }, // exclude the current 
      [Op.or]: [
        { username: vendordata.username },
        { mobile: vendordata.mobile }
      ],

    }
  });
  if (existingVendor) {
    throw new BadRequestError("The Username And Mobile Number Already Exists. Please Select Another Username And Mobile Number");
  }

  const data = await Vendor.update(vendordata,
    {
      where: {
        id: id,
      },
    },

  );
  if (data[0] == 0) throw new BadRequestError("Id Not Match");
  return data[0];
};






//delete vendor 
const doDeleteVendor = async ({
  id
}) => {
  const data = await Vendor.destroy({
    where: {
      id: id,
    },
  })
  if (data == 0) throw new BadRequestError("Id Not Match");
  return data[0];
};


//status updated Vendor
const doStatus = async ({
  id,
  BadRequestError,
  status
}) => {
  const data = await Vendor.update({ status },
    {
      where: {
        id: id,
      },
    },
  );
  if (data[0] == 0) throw new BadRequestError("Id Not Match");
  return data[0];
};


// All detail for Vendor
const doGetDetail = async ({ BadRequestError, Accounts, Vendorfile,
  id
}) => {
  const Detaill = await Vendor.findOne(
    {
      include: [{ model: Accounts }, { model: Vendorfile }],
      where: { id: id },
    }
  );
  return Detaill
};


// Vendor Files Add
// const doVendorFile = async ({ vendor_id, filename }) => {
//   var image = filename;
//   const vendorfiless = await Vendorfile.create({
//     image,
//     vendor_id,
//   });
//   return {
//     VendorFileId: vendorfiless.id,
//   };
// };
const doVendorFile = async ({ filename, vendor_id,
}) => {

  const insertedDetails = [];

  for (const filenames of filename) {
    const detail = await Vendorfile.create({
      image: filenames,
      vendor_id
    });
    insertedDetails.push(detail);
    console.log("hyyyyy kamal", detail)
  }

  return insertedDetails;
};





// Vendor File deleted
const doDeleteVendorFiles = async ({
  id
}) => {
  const data = await Vendorfile.destroy({
    where: {
      id: id,
    },
  })
  if (data == 0) throw new BadRequestError("Id Not Match");
  return data[0];
};














// Vendor file category add
const doFilecategory = async ({ name }) => {
  const existingCategory = await Vendorfilecategory.findOne({ where: { name } });
  if (existingCategory) {
    throw new BadRequestError("There Is Already A Category. There Cannot Be Duplicate Categories.");
  }
  const categoryfile = await Vendorfilecategory.create({
    name,
  });
  return {
    categoryfileId: categoryfile.id
  };
};



// Find Vendor file category
const doGetFilecategory = async ({
  BadRequestError,
  Vendorfile
}) => {
  const filecategories = await Vendorfilecategory.findAll(
    {
      include: { model: Vendorfile },
      order: [["createdAt", "DESC"]],
    }
  );
  return filecategories
};



//Edit vendor categoryes
const doUpdateFileCategory = async ({
  id,
  BadRequestError,
  categorydata,
}) => {
  const { name } = categorydata;

  const existingCategory = await Vendorfilecategory.findOne({
    where: {
      name: name,
      id: { [Op.ne]: id } // exclude the current 
    }
  });
  if (existingCategory) {
    throw new BadRequestError(" Category With The Same Name Already Exists");
  }

  const data = await Vendorfilecategory.update(categorydata,
    {
      where: {
        id: id,
      },
    },

  );
  if (data[0] == 0) throw new BadRequestError("Id Not Match");
  return data[0];
};






//delete vendor category
const doDeleteFilecategory = async ({
  id
}) => {
  const data = await Vendorfilecategory.destroy({
    where: {
      id: id,
    },
  })
  if (data == 0) throw new BadRequestError("Id Not Match");
  return data[0];
};
// find the vendor_id for deleted
const doCheckVendorforfilecategory = async ({
  cat_id,
}) => {
  const vndrs = await Vendorfile.findOne({
    where: {
      cat_id
    },
  });
  if (!vndrs) throw new NotFoundError('Agent not found!');
  return vndrs;
};










module.exports = {
  doCategory,
  doGetCategory,
  doDeleteCategory,
  doUpdateCategory,
  doVendor,
  doGetVendor,
  doSearchVendor,
  doUpdatevendor,
  doDeleteVendor,
  doStatus,
  doCheckVendorforcategory,
  doGetDetail,
  doVendorFile,
  doFilecategory,
  doGetFilecategory,
  doUpdateFileCategory,
  doDeleteFilecategory,
  doCheckVendorforfilecategory,
  doDeleteVendorFiles
};

