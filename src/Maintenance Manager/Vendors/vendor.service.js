
const { sequelize, Vendorcategory, Vendor } = require('../../db');
const { NotFoundError, BadRequestError } = require('../../utils/api-errors');

//Add Vendor Category
const doCategory = async ({ name }) => {
  const category = await Vendorcategory.create({
    name,
  });

  return {
    categoryId: category.id
  };
};

//view Vendor Category
const doGetCategory = async ({
}) => {
  const categories = await Vendorcategory.findAll(
    {
      order: [["createdAt", "DESC"]],
    }
  );
  return categories
};


//Edit vendor categoryes
const doUpdateCategory = async ({
  id,
  BadRequestError,
  categorydata
}) => {
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




//status data in faq
const doStatus = async ({
  id,
  BadRequestError,
  status
}) => {
  const data = await Faq.update({ status },
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
}) => {
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
    expirationdate
  });

  return {
    vendorId: vendor.id
  };
};


//view Vendor
const doGetVendor = async ({
}) => {
  const vendoress = await Vendor.findAll(
    {
      where: { role_id: 5 },
      order: [["createdAt", "DESC"]],
    }
  );
  return vendoress
};


// Search Vendor
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const doSearchVendor = async ({
  name,
  username,
  company_url,
  status,
  Vendor,
  BadRequestError,
}) => {

  let newobject = {};
  if (name) {
    newobject.name = { [Op.like]: `%${name}%` }
  }
  if (username) {
    newobject.username = { [Op.like]: `%${username}%` }
  } if (company_url) {
    newobject.company_url = { [Op.like]: `%${company_url}%` }
  }
  if (status) {
    newobject.status = status
  }
  newobject.role_id = 5;
  console.log("newobject", newobject);
  const data = await Vendor.findAll({
    where: newobject,
    order: [['name', 'ASC']],
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
};

