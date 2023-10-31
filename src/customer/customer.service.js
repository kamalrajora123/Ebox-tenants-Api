const {
  Customer,
  sequelize,
  Property,
  SaveOrder,
  Subscription,
  User
} = require('../db');

const { generateJWT, verifyJWT } = require('../utils/jwt');

const { NotFoundError, BadRequestError } = require('../utils/api-errors');


//  Add
const doCustomer = async ({
  Title,
  Description,
}) => {
  const customer = await Customer.create(
    { Title, Description, },
  );
  return { customerId: customer.id };
};




// view customer
const doGetCustomer = async ({ BadRequestError, Customer, property, SaveOrder,
  Role
}) => {
  const as = await Customer.findAll(
    {
      where: { role_id: 2 },
      include: [{ model: Role },
      { model: property },
        // {
        //   model: SaveOrder,
        //   include: [
        //     { model: Subscription }
        //   ]
        // }
      ],
      order: [["createdAt", "DESC"]],

    }
  );
  return as
};

//delete Customer

const doDeleteCustomer = async ({
  id,
  BadRequestError,
}) => {
  const users = await Customer.destroy({
    where: {
      id: id,
    },
  });
  if (users == 0) throw new BadRequestError('Id Not Match');
  return users[0];
};




// update customer

const doUpdateCustomer = async ({
  id,
  Customer,
  BadRequestError,
  CustomerUpdateData,
  filename
}) => {
  var image = filename;
  const { name, mobile, username, lname, description } = CustomerUpdateData;



  // check if username already exists in the database
  const existingCustomer = await Customer.findOne({
    where: {
      username: username,
      id: { [Op.ne]: id } // exclude the current customer's id from the search
    }
  });

  if (existingCustomer) {
    throw new BadRequestError(" This Username Already Exists");
  }

  if (image != null) {
    const data = await Customer.update({ name, mobile, username, lname, description, image }, {
      where: {
        id: id,
      },
    });

    if (data[0] == 0) throw new BadRequestError("Id Not Match");
    return data[0];

  }
  else {
    const data = await Customer.update({ name, mobile, username, lname, description }, {
      where: {
        id: id,
      },
    });

    if (data[0] == 0) throw new BadRequestError("Id Not Match");
    return data[0];

  };

}





//status change

const doStatusCustomer = async ({
  id,
  Customer,
  BadRequestError,
  status
}) => {
  const data = await Customer.update({ status },
    {
      where: {
        id: id,
      }
    });
  if (data[0] == 0) throw new BadRequestError("I'd Not Match");
  return data;
};








// Search Customer
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const doSearchCustomer = async ({
  name,
  username,
  mobile,
  status,
  Customer,
  Role,
  Property,
  SaveOrder,
  Subscription,
  BadRequestError,
}) => {

  let newobject = {};
  if (name) {
    newobject.name = { [Op.like]: `%${name}%` }
  }
  if (username) {
    newobject.username = { [Op.like]: `%${username}%` }
  } if (mobile) {
    newobject.mobile = { [Op.like]: `%${mobile}%` }
  }
  if (status) {
    newobject.status = status
  }
  newobject.role_id = 2;
  console.log("newobject", newobject);
  const data = await Customer.findAll({
    where: newobject,
    order: [['name', 'ASC']],
    include: [{ model: Role }, { model: Property },
    {
      model: SaveOrder,
      include: [
        { model: Subscription }
      ]
    }


    ],


  });
  if (data[0] == 0) throw new BadRequestError("Data Not Match");
  return data;
};

















// customer detailby id
const doGetCustomerdetailbyid = async ({ BadRequestError, Customer,

  id
}) => {
  const customer = await Customer.findOne(
    {
      where: { id: id },
    }
  );
  return customer
};



// customer Added Property view byid
const doGetCustomerbyid = async ({ BadRequestError, Customer, Property, PropertyTypes,
  Role, Facing,
  id
}) => {
  const customer = await Customer.findOne(
    {
      where: { id: id },
      include: [{ model: Role },

      {
        model: Property,
        include: [
          { model: PropertyTypes },
          { model: Facing },
        ]
      },
      ],

    }
  );
  return customer
};

// customerRequirements view byid

const doGetCustomerRequirmentbyid = async ({ BadRequestError, Customer, PropertyTypes,
  Role, Location, User,
  id
}) => {
  const customer = await Customer.findOne(
    {
      where: { id: id },
      include: [
        // { model: Role },
        // {
        //   model: Requirement,
        //   include: [{
        //     model: PropertyTypes
        //   },
        //   {
        //     model: Location
        //   },
        //   {
        //     model: User
        //   }
        //   ]
        // },
      ],

    }
  );
  return customer
};


// delete find by id 
const doCheckPropertyByagent = async ({
  cus_id,


}) => {
  const agent = await Property.findOne({
    where: {
      cus_id
    },
  });
  if (!agent) throw new NotFoundError('Agent not found!');
  return agent;
};

module.exports = {
  doCustomer,
  doGetCustomer,
  doDeleteCustomer,
  doUpdateCustomer,
  doStatusCustomer,
  doSearchCustomer,
  doGetCustomerbyid,
  doGetCustomerRequirmentbyid,
  doGetCustomerdetailbyid,
  doCheckPropertyByagent



}