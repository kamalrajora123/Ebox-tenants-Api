const { Subscription, Order, User, SaveOrder, Role } = require("../db");

// const { generateJWT, verifyJWT } = require("../../utils/jwt");

// const { NotFoundError, BadRequestError } = require("../../utils/api-errors");


// // subscription Add 
const doSubscription = async ({
  role_id,
  package_name,
  package_price,
  package_discount,
  package_validity,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
  f8,
  f9,
  f10,
}) => {
  const subscription = await Subscription.create({
    role_id,
    package_name,
    package_price,
    package_discount,
    package_validity,
    f1,
    f2,
    f3,
    f4,
    f5,
    f6,
    f7,
    f8,
    f9,
    f10,
  });
  return { subscriptionId: subscription.id };
};



// View Subscription
const doGetSubscription = async ({ BadRequestError, Subscription, Role }) => {
  const subscription = await Subscription.findAll({
    order: [["createdAt", "DESC"]],
    include: { model: Role }
  });
  if (subscription[0] == 0) throw new BadRequestError("Please try again later");
  return subscription;
};





// delete subscriptions
const doDeleteSubscription = async ({
  id
}) => {
  const subscription = await Subscription.destroy({
    where: {
      id: id,
    },
  })
  if (subscription == 0) throw new BadRequestError('id not match ');
  return subscription[0];
};

// Update Subscription
const doUpdateSubscription = async ({ id, Subscription, BadRequestError, SubscriptionUpdateData }) => {
  const data = await Subscription.update(SubscriptionUpdateData, {
    where: {
      id: id,
    },
  });
  if (data[0] == 0) throw new BadRequestError("id not match");
  return data;
};

// City Subscription By Id
const doGetSubscriptionById = async ({ id }) => {
  const data = await Subscription.findOne({
    where: {
      id,
    },
  });
  return data;
};

// View Subscriptionpkg
const doGetSubscriptionPackage = async ({ BadRequestError, SaveOrder, User, Subscription, Role }) => {
  const orderpkg = await SaveOrder.findAll({
    include: [{ model: Subscription },
    { model: User }, { model: Role }],
    order: [["createdAt", "DESC"]],
  });
  if (orderpkg[0] == 0) throw new BadRequestError("Please try again later");
  return orderpkg;
};

// Search subscriptions 
// const Sequelize = require("sequelize");
// const Op = Sequelize.Op;
// const doSearchSubscription = async ({
//   package_id,
//   user_id,
//   role_id,
//   amount,
//   pkg_expiredate,
//   validity,
//   discount,
//   SaveOrder,
//   BadRequestError,
//   Subscription,
//   User,
//   Role
// }) => {

//   let newobject = {};
//   if (package_id) {
//     newobject.package_id = { [Op.like]: `%${package_id}%` }
//   }
//   if (user_id) {
//     newobject.user_id = user_id
//   } if (role_id) {
//     newobject.role_id = { [Op.like]: `%${role_id}%` }
//   } if (amount) {
//     newobject.amount = { [Op.like]: `%${amount}%` }
//   } if (validity) {
//     newobject.validity = { [Op.like]: `%${validity}%` }
//   } if (discount) {
//     newobject.discount = { [Op.like]: `%${discount}%` }
//   }
//   // if (status) {
//   //   newobject.status = status
//   // }

//   console.log("newobject", newobject);
//   const data = await SaveOrder.findAll({
//     where: newobject,
//     // order: [['name', 'ASC']],
//     include: [{ model: Role }, { model: User }, { model: Subscription }],
//   });
//   if (data[0] == 0) throw new BadRequestError("Data Not Match");
//   return data;
// };

const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require('moment');

const doSearchSubscription = async ({
  package_id,
  name,
  mobile,
  user_id,
  role_id,
  username,
  package_name,
  packagestatus,
  pkg_startdate,
  pkg_expiredate,
  pkg_endDate,
  SaveOrder,
  BadRequestError,
  Subscription,
  User,
  Role
}) => {

  let newobject = {};
  if (role_id) {
    newobject.role_id = { [Op.like]: `%${role_id}%` }
  }
  if (user_id) {
    newobject.user_id = { [Op.like]: `%${user_id}%` }
  } if (package_id) {
    newobject.package_id = { [Op.like]: `%${package_id}%` }
  }
  if (name) {
    // Search for the name in the Users table
    newobject['$User.name$'] = { [Sequelize.Op.like]: `%${name}%` };
  }
  if (mobile) {
    // Search for the name in the Users table
    newobject['$User.mobile$'] = { [Sequelize.Op.like]: `%${mobile}%` };
  }
  if (username) {
    // Search for the username in the Users table
    newobject['$User.username$'] = { [Sequelize.Op.like]: `%${username}%` };
  }
  if (package_name) {
    // Search for the package_name in the Users table
    newobject['$Subscription.package_name$'] = { [Sequelize.Op.like]: `%${package_name}%` };
  }

  if (pkg_startdate) {
    const startDate = moment(pkg_startdate).startOf('day').toDate();
    newobject.createdAt = {
      [Op.gte]: startDate,
    };
  }
  if (pkg_endDate) {
    // Create a start date for the selected date
    const endDate = moment(pkg_endDate).endOf('day').toDate();
    // Use the start date in the Sequelize query
    newobject.createdAt = {
      [Op.lte]: endDate,
    };
  }


  // if (pkg_startdate) {
  //   newobject.createdAt = {
  //     [Op.between]: [
  //       moment(pkg_startdate).startOf('day').toDate(),
  //       // moment(pkg_expiredate).endOf('day').toDate(),
  //     ],
  //   };
  // }

  const now = moment();
  current_date = new Date();

  if (packagestatus == 1) {
    const pkgExpireDate = new Date(pkg_expiredate);
    newobject.pkg_expiredate = {
      [Op.gte]: current_date,
    };
  } else if (packagestatus == 2) {
    newobject.pkg_expiredate = {
      [Op.lte]: current_date,
    };
  }

  // return false;
  const data = await SaveOrder.findAll({
    where: newobject,
    // order: [['name', 'ASC']],
    include: [{ model: Role }, { model: User }, { model: Subscription }],
  });

  // if (data[0] == 0) throw new BadRequestError("Data Not Match");
  return data;
};




// Search packages
const doSearchPackage = async ({
  role_id,
  Subscription,
  Role
}) => {
  let newobject = {};
  if (role_id) {
    newobject.role_id = { [Op.like]: `%${role_id}%` }
  }
  // return false;
  const data = await Subscription.findAll({
    where: newobject,
    // order: [['name', 'ASC']],
    include: [{ model: Role }],
  });
  // if (data[0] == 0) throw new BadRequestError("Data Not Match");
  return data;
};




// view roles
const doGetRole = async ({ BadRequestError, Role }) => {
  const role = await Role.findAll({
    order: [["createdAt", "ASC"]],
    limit: 3
  });
  if (role[0] == 0) throw new BadRequestError("Please try again later");
  return role;
};








module.exports = {
  doSubscription,
  doGetSubscription,
  doGetSubscriptionById,
  doDeleteSubscription,
  doUpdateSubscription,
  doGetSubscriptionPackage,
  doGetRole,
  doSearchSubscription,
  doSearchPackage
  // doUpdateCityStatus,

  // doGetState
};
