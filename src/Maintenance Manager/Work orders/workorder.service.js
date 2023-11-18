
const { sequelize, property, Unit, WorkOrder } = require('../../db');
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
  return {
    workId: work.id
  };
};


//view Work Order
const doGetWork = async ({
  property,
  Unit,
  Vendor,
  TaskCategory
}) => {
  const workerss = await WorkOrder.findAll(
    {

      order: [["createdAt", "DESC"]],
      include: [{ model: property }, { model: Unit }, { model: Vendor }, { model: TaskCategory }]
    }
  );
  return workerss
};


// Search Vendor
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const doSearchWork = async ({
  pro_id,
  priority,
  assignedto,
  status,
  vendor_id,
  WorkOrder,
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











module.exports = {
  doWork,
  doGetWork,
  doSearchWork,
  doUpdateWork,
  doDeleteWork,
  doStatus,
};

