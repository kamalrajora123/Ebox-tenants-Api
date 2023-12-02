
const { sequelize, property, Unit, WorkOrder, Partslabour } = require('../../db');
const { NotFoundError, BadRequestError } = require('../../utils/api-errors');


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



//Add Work 
const doWork = async ({
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
}) => {
  var attachments = filename;
  const work = await WorkOrder.create({
    name,
    pro_id,
    pro_unitid,
    task_cat_id,
    vendor_id,
    invoicenumber,
    charge,
    workdetails,
    vendornotes,
    attachments,
    entry,
    priority,
    status,
    pro_staff_id,
    assignedto,
    collab,
    duedate,
    amount
  });

  console.log("work", work.dataValues.id);
  return work
  // return {
  //   workId: work.id
  // };
};

const doPartslabor = async ({
  workorder_id,
  qty,
  account_id,
  description,
  price,
  tot_price
}) => {
  const arrcheck_list = qty.split(",");
  const arraccount_list = account_id.split(",");
  const arrdescription_list = description.split(",");
  const arrprice_list = price.split(",");
  const arrtotal_list = tot_price.split(",");

  const maxLength = Math.max(
    arrcheck_list.length,
    arraccount_list.length,
    arrdescription_list.length,
    arrprice_list.length,
    arrtotal_list.length
  );

  for (let i = 0; i < maxLength; i++) {
    const checkdata = arrcheck_list[i] || '';
    const accountdata = arraccount_list[i] || '';
    const descriptiondata = arrdescription_list[i] || '';
    const pricetdata = arrprice_list[i] || '';
    const totaldata = arrtotal_list[i] || '';

    await Partslabour.create({
      workorder_id: workorder_id,
      qty: checkdata,
      account_id: accountdata,
      description: descriptiondata,
      price: pricetdata,
      tot_price: totaldata,
    });
  }

  return true;
};




//view Work Order
const doGetWork = async ({
  property,
  Unit,
  Vendor,
  TaskCategory,
  Partslabour,


}) => {
  const workerss = await WorkOrder.findAll(
    {
      order: [["createdAt", "DESC"]],
      include: [{ model: property }, { model: Unit }, { model: Vendor }, { model: TaskCategory }, { model: Partslabour }]
    }
  );
  return workerss
};


// Search Vendor
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require('moment');

const doSearchWork = async ({
  pro_id,
  priority,
  assignedto,
  status,
  vendor_id,
  WorkOrder,
  StatrtDate,
  EndDate,
  BadRequestError,
  property,
  Unit,
  Vendor,
  TaskCategory
}) => {

  let newobject = {};
  if (pro_id) {
    newobject.pro_id = { [Op.like]: `%${pro_id}%` }
  }
  if (priority) {
    newobject.priority = { [Op.like]: `%${priority}%` }
  } if (assignedto) {
    newobject.assignedto = { [Op.like]: `%${assignedto}%` }
  } if (vendor_id) {
    newobject.vendor_id = { [Op.like]: `%${vendor_id}%` }
  }
  if (status) {
    newobject.status = status
  }
  // console.log("StatrtDate@@@@", StatrtDate)
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








  console.log("newobject", newobject);
  const data = await WorkOrder.findAll({
    where: newobject,
    // order: [['name', 'ASC']],
    order: [["createdAt", "DESC"]],
    // include: { model: Vendorcategory },
    include: [{ model: property }, { model: Unit }, { model: Vendor }, { model: TaskCategory }]
  });
  if (data[0] == 0) throw new BadRequestError("Data Not Match");
  return data;
};

//Edit Work order
const doUpdateWork = async ({
  id,
  BadRequestError,
  workdata,
  WorkOrder,
  filename
}) => {

  var attachments = filename;
  const { name, pro_id, pro_unitid, task_cat_id, vendor_id, invoicenumber,
    charge, workdetails, vendornotes, entry, priority, status,
    pro_staff_id, assignedto, collab, duedate, amount } = workdata;

  const data = await WorkOrder.update({
    name, pro_id, pro_unitid, task_cat_id, vendor_id, invoicenumber,
    charge, workdetails, vendornotes, attachments, entry, priority, status,
    pro_staff_id, assignedto, collab, duedate, amount, attachments
  }, {
    where: {
      id: id,
    },
  });

  if (data[0] == 0) throw new BadRequestError("Id Not Match");
  return data[0];
};

// Update parts labour
const doUpdatePartslabor = async ({
  workorder_id,
  qty, account_id, description, price, tot_price
}) => {
  const users = await Partslabour.destroy({
    where: {
      workorder_id: workorder_id,
    },
  });
  console.log("users", users)
  const arrcheck_list = qty.split(",");
  const arraccount_list = account_id.split(",");
  const arrdescription_list = description.split(",");
  const arrprice_list = price.split(",");
  const arrtotal_list = tot_price.split(",");

  const maxLength = Math.max(
    arrcheck_list.length,
    arraccount_list.length,
    arrdescription_list.length,
    arrprice_list.length,
    arrtotal_list.length
  );

  for (let i = 0; i < maxLength; i++) {
    const checkdata = arrcheck_list[i] || '';
    const accountdata = arraccount_list[i] || '';
    const descriptiondata = arrdescription_list[i] || '';
    const pricetdata = arrprice_list[i] || '';
    const totaldata = arrtotal_list[i] || '';

    const Arry = await Partslabour.create({
      workorder_id: workorder_id,
      qty: checkdata,
      account_id: accountdata,
      description: descriptiondata,
      price: pricetdata,
      tot_price: totaldata,
    });
    console.log("Arry", Arry)
  }

  return true;
};



//delete Work order 
const doDeleteWork = async ({
  id
}) => {
  const data = await WorkOrder.destroy({
    where: {
      id: id,
    },
  })
  if (data == 0) throw new BadRequestError("Id Not Match");
  return data[0];
};


// All detail for work order
const doGetDetail = async ({ BadRequestError, Partslabour, Accounts, Vendor, property, Unit,
  id
}) => {
  const orderss = await WorkOrder.findOne(
    {
      include: [{ model: Partslabour, include: { model: Accounts } }, { model: Vendor }, { model: property }, { model: Unit }],
      where: { id: id },
    }
  );
  return orderss
};








module.exports = {
  doWork,
  doGetWork,
  doSearchWork,
  doUpdateWork,
  doDeleteWork,
  doStatus,
  doPartslabor,
  doGetDetail,
  doUpdatePartslabor
};

