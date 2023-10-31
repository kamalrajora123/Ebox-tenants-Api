const { WEB_URL, EMAIL, EMAIL_PASS, EMAIL_HOST ,site_url,site_name} = require('config');


const forgetPasswordTemplate = ({ fromUser, fromEmail, toEmail, Name, password, subject, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{Name}/g, Name).replace(/{password}/g, password).replace(/{site_url}/g, site_url).replace(/{admin_username}/g, 'contact@propertybull.com').replace(/{html}/g, html),

  password: password,
  template_id: "d-67b60cd879a64256847be80c5924029b",
});

//Registered users in web 
const RegisteredTemplate = ({ fromUser, fromEmail, toEmail, username, Name, mobile, role, password, subject, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{mobile}/g, mobile).replace(/{admin_username}/g, 'contact@propertybull.com').replace(/{site_url}/g, site_url).replace(/{site_name}/g, site_name).replace(/{username}/g, username).replace(/{role}/g, role).replace(/{password}/g, password).replace(/{html}/g, html),

  password: password,
  template_id: "d-67b60cd879a64256847be80c5924029b",
});
const UpdateProfileTemplate = ({ fromUser, fromEmail, toEmail, username, site_url, Name, subject, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{admin_username}/g, 'contact@propertybull.com').replace(/{site_url}/g, site_url).replace(/{site_name}/g, site_name).replace(/{username}/g, username),
  template_id: "d-67b60cd879a64256847be80c5924029b",
});
const ChangePasswordTemplate = ({ fromUser, fromEmail, toEmail, username, Name, mobile, role, password, subject, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{mobile}/g, mobile).replace(/{admin_username}/g, 'contact@propertybull.com').replace(/{username}/g, username).replace(/{password}/g, password).replace(/{role}/g, role).replace(/{password}/g, password).replace(/{html}/g, html),
  password: password,
  template_id: "d-67b60cd879a64256847be80c5924029b",
});
const SandLoaninquryTemplate = ({ fromUser, fromEmail, toEmail, Name, occup,
  email,
  mobile,
  location,
  dob,
  loan_type,
  gross_salary,
  monthly_salary, subject, html }) => ({
    from: `"${fromUser}" <${fromEmail}>`,
    to: toEmail,
    subject: subject,
    html: html.replace(/{name}/g, Name).replace(/{mobile}/g, mobile).replace(/{admin_username}/g, 'contact@propertybull.com').replace(/{location}/g, location).replace(/{occup}/g, occup).replace(/{loantype}/g, loan_type).replace(/{email}/g, email).replace(/{gross_salary}/g, gross_salary).replace(/{monthly_salary}/g, monthly_salary).replace(/{dob}/g, dob).replace(/{site_name}/g, "propertybull.com").replace(/{html}/g, html),
    template_id: "d-67b60cd879a64256847be80c5924029b",
  });
const SandLoaninquryAdminTemplate = ({ fromUser, fromEmail, toEmail, Name, occup,
  email,
  mobile,
  location,
  dob,
  loan_type,
  gross_salary,
  monthly_salary, subject, html }) => ({
    from: `"${fromUser}" <${fromEmail}>`,
    to: toEmail,
    subject: subject,
    html: html.replace(/{name}/g, Name).replace(/{mobile}/g, mobile).replace(/{admin_username}/g, 'contact@propertybull.com').replace(/{location}/g, location).replace(/{occup}/g, occup).replace(/{loantype}/g, loan_type).replace(/{email}/g, email).replace(/{gfms}/g, gross_salary).replace(/{mths}/g, monthly_salary).replace(/{dob}/g, dob).replace(/{site_name}/g, "propertybull.com").replace(/{html}/g, html),
    template_id: "d-67b60cd879a64256847be80c5924029b",
  });


// subscribe Newsletter
const subscribeTemplate = ({ fromUser, fromEmail, toEmail, username, subject, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, username).replace(/{html}/g, html),


  template_id: "d-67b60cd879a64256847be80c5924029b",
});

// Requirement Add 
const RequirementaddTemplate = ({ fromUser, fromEmail, toEmail, Name, subject, html, budget, room, build, category, Address, PropertyType }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{html}/g, html).replace(/{budget}/g, budget).replace(/{build}/g, build).replace(/{room}/g, room).replace(/{looking}/g, category).replace(/{site_name}/g, "propertybull.com")
    .replace(/{admin_username}/g, "contact@propertybull.com").replace(/{address}/g, Address).replace(/{type}/g, PropertyType),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});


// Requirement  send to Admin
const adminRequirementTemplate = ({ fromUser, fromEmail, toEmail, subject, html, PropertyType, category, budget, Name, UserName, Phone, Cityname }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{type}/g, PropertyType).replace(/{html}/g, html).replace(/{looking}/g, category).replace(/{budget}/g, budget).replace(/{uname}/g, Name).replace(/{email}/g, UserName).replace(/{phone}/g, Phone).replace(/{address}/g, Cityname)
    .replace(/{site_name}/g, "propertybull.com").replace(/{admin_username}/g, "contact@propertybull.com")
  ,


  template_id: "d-67b60cd879a64256847be80c5924029b",
});







// Contact Now
const propertyInquiryTemplate = ({ fromUser, fromEmail, toEmail, Name, Mobile, subject, html, Email, PropertyId, ownername, Price, Propertyname }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{html}/g, html).replace(/{ownermobile}/g, Mobile).replace(/{owneremail}/g, Email).replace(/{pid}/g, PropertyId).replace(/{ownername}/g, ownername).replace(/{price}/g, Price).replace(/{pname}/g, Propertyname).replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g, "propertybull.com"),


  template_id: "d-67b60cd879a64256847be80c5924029b",
});
const propertyInquiryToOwnerTemplate = ({ fromUser, fromEmail, toEmail, Name, Mobile, subject, html, Email, PropertyId, ownername, Price, Propertyname }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{html}/g, html).replace(/{ownermobile}/g, Mobile).replace(/{owneremail}/g, Email).replace(/{pid}/g, PropertyId).replace(/{ownername}/g, ownername).replace(/{price}/g, Price).replace(/{pname}/g, Propertyname).replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g, "propertybull.com"),


  template_id: "d-67b60cd879a64256847be80c5924029b",
});
// property add on propertybull.com Email templete
const propertyaddTemplate = ({ fromUser, fromEmail, toEmail, Name, subject, html, Bath, Face, propertyName, Room, Address, Address2, Pincode, Tot_price, Description, Option, PropertyType, PropertyonFloor, TotalFloors, Locationname, Area, City, State }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{html}/g, html).replace(/{pnm}/g, propertyName).replace(/{add}/g, Address).replace(/{address2}/g, Address2).replace(/{pincode}/g, Pincode).replace(/{opt}/g, Option)
    .replace(/{tot_price}/g, Tot_price).replace(/{description}/g, Description).replace(/{typ}/g, PropertyType).replace(/{namelocation}/g, Locationname).replace(/{area}/g, Area).replace(/{cttt}/g, City).replace(/{state}/g, State)
    .replace(/{room}/g, Room).replace(/{bath}/g, Bath).replace(/{sace}/g, Face).replace(/{site_name}/g, "propertybull.com").replace(/{admin_username}/g, "contact@propertybull.com").replace(/{floor}/g, TotalFloors).replace(/{p_floor}/g, PropertyonFloor),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});


// property add admin tempate
const propertyaddadminTemplate = ({ fromUser, fromEmail, toEmail, Name, subject, html, Bath, Face, propertyName, Room, Address, Address2, Pincode, Tot_price, Description, Option, PropertyType, PropertyonFloor, TotalFloors, Locationname, Area, City, State }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{html}/g, html).replace(/{pnm}/g, propertyName).replace(/{add}/g, Address).replace(/{address2}/g, Address2).replace(/{pincode}/g, Pincode).replace(/{opt}/g, Option)
    .replace(/{tot_price}/g, Tot_price).replace(/{description}/g, Description).replace(/{typ}/g, PropertyType).replace(/{namelocation}/g, Locationname).replace(/{area}/g, Area).replace(/{cttt}/g, City).replace(/{state}/g, State)
    .replace(/{room}/g, Room).replace(/{bath}/g, Bath).replace(/{sace}/g, Face).replace(/{site_name}/g, "propertybull.com").replace(/{admin_username}/g, "contact@propertybull.com").replace(/{floor}/g, TotalFloors).replace(/{p_floor}/g, PropertyonFloor),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});


// property Update on propertybull.com templete
const propertyupdateTemplate = ({ fromUser, fromEmail, toEmail, Name, subject, html, Bath, Face, propertyName, Room, Address, Address2, Pincode, Tot_price, Description, Option, PropertyType, PropertyonFloor, TotalFloors, Locationname, Area, City, State }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{html}/g, html).replace(/{pnm}/g, propertyName).replace(/{add}/g, Address).replace(/{address2}/g, Address2).replace(/{pincode}/g, Pincode).replace(/{opt}/g, Option)
    .replace(/{tot_price}/g, Tot_price).replace(/{description}/g, Description).replace(/{typ}/g, PropertyType).replace(/{namelocation}/g, Locationname).replace(/{area}/g, Area).replace(/{cttt}/g, City).replace(/{state}/g, State)
    .replace(/{room}/g, Room).replace(/{bath}/g, Bath).replace(/{sace}/g, Face).replace(/{site_name}/g, "propertybull.com").replace(/{admin_username}/g, "contact@propertybull.com").replace(/{floor}/g, TotalFloors).replace(/{p_floor}/g, PropertyonFloor),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});


// property Update admin template
const propertyupdateadminTemplate = ({ fromUser, fromEmail, toEmail, Name, subject, html, Bath, Face, propertyName, Room, Address, Address2, Pincode, Tot_price, Description, Option, PropertyType, PropertyonFloor, TotalFloors, Locationname, Area, City, State }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{html}/g, html).replace(/{pnm}/g, propertyName).replace(/{add}/g, Address).replace(/{address2}/g, Address2).replace(/{pincode}/g, Pincode).replace(/{opt}/g, Option)
    .replace(/{tot_price}/g, Tot_price).replace(/{description}/g, Description).replace(/{typ}/g, PropertyType).replace(/{namelocation}/g, Locationname).replace(/{area}/g, Area).replace(/{cttt}/g, City).replace(/{state}/g, State)
    .replace(/{room}/g, Room).replace(/{bath}/g, Bath).replace(/{sace}/g, Face).replace(/{site_name}/g, "propertybull.com").replace(/{admin_username}/g, "contact@propertybull.com").replace(/{floor}/g, TotalFloors).replace(/{p_floor}/g, PropertyonFloor),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});







//Property Inquiry mail to Owner 
const propertyEnquiryTemplate = ({ fromUser, fromEmail,name,propertyurl,tot_price,title,p_typeid, toEmail, Name, subject, html, UserName, Mobile, Email, Enquiry, Propertyname, TotalPrice, PropertyId, Locationname, Propertytype }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{ownername}/g, Name).replace(/{html}/g, html).replace(/{username}/g, UserName).replace(/{usermobile}/g, Mobile).replace(/{useremail}/g, Email).replace(/{enquiry}/g, Enquiry)
    .replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g,site_name).replace(/{pname}/g, Propertyname).replace(/{price}/g, TotalPrice).replace(/{pid}/g, PropertyId)
    .replace(/{loc}/g, Locationname).replace(/{ptype}/g, Propertytype),
  template_id: "d-67b60cd879a64256847be80c5924029b",
});
const propertyEnquirytoadminTemplate = ({ fromUser, fromEmail, toEmail, Name, subject, html, UserName, Mobile, Email, Enquiry, Propertyname, TotalPrice, PropertyId, Locationname, Propertytype }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{ownername}/g, Name).replace(/{html}/g, html).replace(/{username}/g, UserName).replace(/{usermobile}/g, Mobile).replace(/{useremail}/g, Email).replace(/{enquiry}/g, Enquiry)
    .replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g, "propertybull.com").replace(/{pname}/g, Propertyname).replace(/{price}/g, TotalPrice).replace(/{pid}/g, PropertyId)
    .replace(/{loc}/g, Locationname).replace(/{ptype}/g, Propertytype),
  template_id: "d-67b60cd879a64256847be80c5924029b",
});
const propertyEnquirytouserTemplate = ({ fromUser, fromEmail, toEmail, subject, html, email,name,propertyurl,tot_price,title,p_typeid,
  mobile, message, }) => ({
    from: `"${fromUser}" <${fromEmail}>`,
    to: toEmail,
    subject: subject,
    html: html.replace(/{email}/g, email).replace(/{name}/g, name).replace(/{mobile}/g, mobile).replace(/{message}/g, message).replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g,site_name)
    .replace(/{site_url}/g,site_url).replace(/{propertyurl}/g,propertyurl).replace(/{tot_price}/g,tot_price).replace(/{title}/g,title).replace(/{p_typeid}/g,p_typeid),
    template_id: "d-67b60cd879a64256847be80c5924029b",
  });

// property requirement template Send mail to owner
const propertyRequirementTemplate = ({ fromUser, fromEmail, toEmail, username, subject, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, username).replace(/{html}/g, html),


  template_id: "d-67b60cd879a64256847be80c5924029b",
});

/// use this code in builder and agent 
const BuilderRegisteredTemplate = ({ fromUser, fromEmail, toEmail, username, Name, mobile, role, password, subject, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{admin_username}/g, 'contact@propertybull.com').replace(/{site_name}/g, site_name).replace(/{site_url}/g, site_url).replace(/{mobile}/g, mobile).replace(/{username}/g, username).replace(/{password}/g, password).replace(/{role}/g, role).replace(/{html}/g, html),


  template_id: "d-67b60cd879a64256847be80c5924029b",
});


//  use this code in web and frontend 
const AddProjectTemplate = ({ fromUser, parking,fromEmail, toEmail,room,area,floor,flooring,bath, p_floor,typ, Name, opt, add,propertyurl, Description ,namelocation,pnm,state,tot_price, subject,address2,pincode,cttt, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name)
  .replace(/{opt}/g, opt).replace(/{area}/g, area).replace(/{flooring}/g, flooring).replace(/{p_floor}/g, p_floor)
  .replace(/{bath}/g, bath).replace(/{floor}/g, floor).replace(/{parking}/g, parking)
  .replace(/{typ}/g, typ).replace(/{pnm}/g, pnm).replace(/{pincode}/g, pincode).replace(/{site_name}/g, site_name).replace(/{site_url}/g, site_url).replace(/{propertyurl}/g, propertyurl)
  .replace(/{address2}/g, address2).replace(/{cttt}/g, 'Jaipur').replace(/{state}/g, 'Rajesthan')
  .replace(/{tot_price}/g, tot_price).replace(/{room}/g, room).replace(/{Description }/g, Description).replace(/{p_floor }/g, p_floor)
  .replace(/{add}/g, add).replace(/{namelocation}/g, namelocation).replace(/{admin_username}/g, 'contact@propertybull.com').replace(/{html}/g, html),


  template_id: "d-67b60cd879a64256847be80c5924029b",
});
//  use this code in web and frontend 
const UpdateProjectTemplate = ({ fromUser, fromEmail,parking, toEmail,room,area,floor,flooring,bath, p_floor,typ,propertyurl, Name, opt, add, description ,namelocation,pnm,state,tot_price, subject,address2,pincode,cttt, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name)
  .replace(/{opt}/g, opt).replace(/{area}/g, area).replace(/{flooring}/g, flooring).replace(/{p_floor}/g, p_floor)
  .replace(/{bath}/g, bath).replace(/{floor}/g, floor).replace(/{parking}/g, parking)
  .replace(/{typ}/g, typ).replace(/{pnm}/g, pnm).replace(/{pincode}/g, pincode).replace(/{site_name}/g, site_name).replace(/{site_url}/g, site_url).replace(/{propertyurl}/g, propertyurl)
  .replace(/{address2}/g, address2).replace(/{cttt}/g, 'Jaipur').replace(/{country_name}/g, 'Rajesthan')
  .replace(/{tot_price}/g, tot_price).replace(/{room}/g, room).replace(/{description }/g, description).replace(/{p_floor }/g, p_floor)
  .replace(/{add}/g, add).replace(/{namelocation}/g, namelocation).replace(/{admin_username}/g, 'contact@propertybull.com').replace(/{html}/g, html),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});


//  use this code in admin  
const ProjectAddTemplate = ({ fromUser, fromEmail, unit, toEmail, room, area, floor, flooring, bath, p_floor, typ, Name, opt, add, Description, namelocation, pnm, state, tot_price, subject, address2, pincode, cttt, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name)
    .replace(/{opt}/g, opt).replace(/{unit}/g, unit).replace(/{area}/g, area).replace(/{flooring}/g, flooring).replace(/{p_floor}/g, p_floor).replace(/{Unit}/g, "Sq Ft")
    .replace(/{bath}/g, bath).replace(/{floor}/g, floor).replace(/{site_name}/g, "propertybull.com")
    .replace(/{typ}/g, typ).replace(/{pnm}/g, pnm).replace(/{pincode}/g, pincode)
    .replace(/{address2}/g, address2).replace(/{cttt}/g, 'Jaipur').replace(/{state}/g, 'Rajesthan')
    .replace(/{tot_price}/g, tot_price).replace(/{room}/g, room).replace(/{Description }/g, Description).replace(/{p_floor }/g, p_floor)
    .replace(/{add}/g, add).replace(/{namelocation}/g, namelocation).replace(/{admin_username}/g, 'contact@propertybull.com').replace(/{html}/g, html),


  template_id: "d-67b60cd879a64256847be80c5924029b",
});
//  use this code in admin 
const ProjectUpdateTemplate = ({ fromUser, fromEmail, toEmail, room, area, floor, flooring, bath, p_floor, typ, Name, opt, add, description, namelocation, pnm, state, tot_price, subject, address2, pincode, cttt, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name)
    .replace(/{opt}/g, opt).replace(/{area}/g, area).replace(/{flooring}/g, flooring).replace(/{p_floor}/g, p_floor)
    .replace(/{bath}/g, bath).replace(/{floor}/g, floor).replace(/{site_name}/g, "propertybull.com")
    .replace(/{typ}/g, typ).replace(/{pnm}/g, pnm).replace(/{pincode}/g, pincode)
    .replace(/{address2}/g, address2).replace(/{cttt}/g, 'Jaipur').replace(/{country_name}/g, 'Rajesthan')
    .replace(/{tot_price}/g, tot_price).replace(/{room}/g, room).replace(/{description }/g, description).replace(/{p_floor }/g, p_floor)
    .replace(/{add}/g, add).replace(/{namelocation}/g, namelocation).replace(/{admin_username}/g, 'contact@propertybull.com').replace(/{html}/g, html),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});

// User Emquiry mail to user template 
const UserEnquiryTemplate = ({ fromUser, fromEmail, toEmail, subject, html, Name, Email, Mobile, Message }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{html}/g, html).replace(/{email}/g, Email).replace(/{mobile}/g, Mobile).replace(/{message}/g, Message).replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g, "propertybull.com"),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});


// User Emquiry mail to user template 
const UserEnquiryAdminTemplate = ({ fromUser, fromEmail, toEmail, subject, html, Name, Email, Mobile, Message }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{html}/g, html).replace(/{email}/g, Email).replace(/{mobile}/g, Mobile).replace(/{message}/g, Message).replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g, "propertybull.com"),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});



// Email to friend
const mailtofrndTemplate = ({ fromUser, fromEmail, toEmail, Name, subject, html, Option, PropertyName, AgeOfProperty, PropertyTypess, FaceName, Address, PropertyPrice, Description, Flooring, Bath, Room, TotalFloors, Area, PropertyOnFloor }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{fname}/g, Name).replace(/{html}/g, html).replace(/{pcat}/g, Option).replace(/{pname}/g, PropertyName).replace(/{address}/g, Address).replace(/{price}/g, PropertyPrice)
    .replace(/{description}/g, Description).replace(/{flooring}/g, Flooring).replace(/{bath}/g, Bath).replace(/{broom}/g, Room).replace(/{tfloor}/g, TotalFloors).replace(/{build}/g, Area)
    .replace(/{pfloor}/g, PropertyOnFloor).replace(/{ptype}/g, PropertyTypess).replace(/{pface}/g, FaceName).replace(/{page}/g, AgeOfProperty).replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g, "propertybull.com"),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});

// Subscription Package buy usertemplate
const subscriptionTemplate = ({ fromUser, fromEmail, toEmail, UserName, PackageName, PackageValidity, PackageExpiryDate, subject, html, PackageStartDate }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{username}/g, UserName).replace(/{html}/g, html).replace(/{pname}/g, PackageName).replace(/{pvalidity}/g, PackageValidity).replace(/{pedate}/g, PackageExpiryDate).replace(/{PstrtDate}/g, PackageStartDate).replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g, "propertybull.com"),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});

// Subscription Package buy Admintemplate
const subscriptionAdminTemplate = ({ fromUser, fromEmail, toEmail, UserName, PackageName, PackageValidity, PackageExpiryDate, subject, html, PackageStartDate }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{UsrName}/g, UserName).replace(/{html}/g, html).replace(/{pname}/g, PackageName).replace(/{pvalidity}/g, PackageValidity).replace(/{pedate}/g, PackageExpiryDate).replace(/{PstrtDate}/g, PackageStartDate).replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g, "propertybull.com"),


  template_id: "d-67b60cd879a64256847be80c5924029b",
});


// property enquiry admin templet
const propertyInquiryAdminTemplate = ({ fromUser, fromEmail
  , toEmail, ptype, loc, username, usermobile, useremail, enquiry, Name, pid, subject, html, PropertyId,
  ownername, Price, Propertyname }) => ({
    from: `"${fromUser}" <${fromEmail}>`,
    to: toEmail,
    subject: subject,
    html: html.replace(/{name}/g, Name).replace(/{html}/g, html).replace(/{username}/g, username)
      .replace(/{ptype}/g, ptype).replace(/{pid}/g, pid).replace(/{loc}/g, loc).replace(/{ownername}/g, ownername)
      .replace(/{useremail}/g, useremail).replace(/{usermobile}/g, usermobile).replace(/{enquiry}/g, enquiry)
      .replace(/{PropertyId}/g, PropertyId).replace(/{price}/g, Price).replace(/{pname}/g, Propertyname)
      .replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g, "propertybull.com"),


    template_id: "d-67b60cd879a64256847be80c5924029b",
  });





//  The client will receive notification the package expiry 15 days,7days,1day,before the package expires.

const PackageexpiryOneDayNotification = ({ fromUser, fromEmail, toEmail, UserName, PackageNamess, PackageValiditys, PackageExpiryDate, subject, html, PackageStartDate }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{username}/g, UserName).replace(/{html}/g, html).replace(/{pname}/g, PackageNamess).replace(/{pvalidity}/g, PackageValiditys).replace(/{pedate}/g, PackageExpiryDate).replace(/{PstrtDate}/g, PackageStartDate).replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g, "Propertybull.com"),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});


//  The client will receive notification the package expiry 15 days,7days,1day,before the package expires.
const PackageexpirySevenDayNotification = ({ fromUser, fromEmail, toEmail, UserName, PackageNamess, PackageValiditys, PackageExpiryDate, subject, html, PackageStartDate }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{username}/g, UserName).replace(/{html}/g, html).replace(/{pname}/g, PackageNamess).replace(/{pvalidity}/g, PackageValiditys).replace(/{pedate}/g, PackageExpiryDate).replace(/{PstrtDate}/g, PackageStartDate).replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g, "propertybull.com"),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});




//  The client will receive notification the package expiry 15 days,7days,1day,before the package expires.
const PackageexpiryFifteenDayNotification = ({ fromUser, fromEmail, toEmail, UserName, PackageNamess, PackageValiditys, PackageExpiryDate, subject, html, PackageStartDate }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{username}/g, UserName).replace(/{html}/g, html).replace(/{pname}/g, PackageNamess).replace(/{pvalidity}/g, PackageValiditys).replace(/{pedate}/g, PackageExpiryDate).replace(/{PstrtDate}/g, PackageStartDate).replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g, "propertybull.com"),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});

// Admin missing project in this project 
// Admin missing project in this project 
const ProjectMIssingTemplate = ({ fromUser, fromEmail, toEmail, OtherProjectName, PropertyName, subject, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{othpro}/g, OtherProjectName).replace(/{pnm}/g, PropertyName).replace(/{html}/g, html).replace(/{admin_username}/g, "contact@propertybull.com").replace(/{site_name}/g, "propertybull.com"),
  template_id: "d-67b60cd879a64256847be80c5924029b",
});

// Project Update admin template
const ProjectupdateadminTemplate = ({ fromUser, fromEmail, toEmail, room, area, floor, flooring, bath, p_floor, typ, Name, opt, add, description, namelocation, pnm, state, tot_price, subject, address2, pincode, cttt, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{name}/g, Name)
    .replace(/{opt}/g, opt).replace(/{area}/g, area).replace(/{flooring}/g, flooring).replace(/{p_floor}/g, p_floor)
    .replace(/{bath}/g, bath).replace(/{floor}/g, floor).replace(/{site_name}/g, "propertybull.com")
    .replace(/{typ}/g, typ).replace(/{pnm}/g, pnm).replace(/{pincode}/g, pincode)
    .replace(/{address2}/g, address2).replace(/{cttt}/g, 'Jaipur').replace(/{country_name}/g, 'Rajesthan')
    .replace(/{tot_price}/g, tot_price).replace(/{room}/g, room).replace(/{description }/g, description).replace(/{p_floor }/g, p_floor)
    .replace(/{add}/g, add).replace(/{namelocation}/g, namelocation).replace(/{admin_username}/g, 'contact@propertybull.com').replace(/{html}/g, html),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});

const shortlistTemplate = ({ fromUser, fromEmail, toEmail, Title,P_Typeid, subject, html,  Tot_price, Area,Locality,name }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{Title}/g, Title).replace(/{html}/g, html).replace(/{P_Typeid}/g, P_Typeid).replace(/{Locality}/g, Locality).replace(/{Tot-Price}/g, Tot_price).replace(/{name}/g, name)
  .replace(/{area}/g, Area).replace(/{site_name}/g, site_url).replace(/{admin_username}/g, "contact@propertybull.com"),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});
const saveSearchTemplate = ({ fromUser, fromEmail, toEmail, category,P_Typeid, subject, html, Room, Tot_price, Age,Area,Locality,name }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: toEmail,
  subject: subject,
  html: html.replace(/{catgory}/g, category).replace(/{html}/g, html).replace(/{P_Typeid}/g, P_Typeid).replace(/{Locality}/g, Locality).replace(/{Tot-Price}/g, Tot_price).replace(/{name}/g, name).replace(/{Room}/g, Room).replace(/{Age}/g, Age)
  .replace(/{area}/g, Area).replace(/{site_name}/g, site_name).replace(/{site_url}/g, site_url).replace(/{admin_username}/g, "contact@propertybull.com"),

  template_id: "d-67b60cd879a64256847be80c5924029b",
});
const AgentRegisteredTemplate = ({ fromUser, fromEmail, toEmail, username, Name, mobile, role, password, subject, html }) => ({
  from: `"${fromUser}" <${fromEmail}>`,
  to: "arjunrajora7297@gmail.com",
  subject: subject,
  html: html.replace(/{name}/g, Name).replace(/{admin_username}/g, 'contact@propertybull.com').replace(/{mobile}/g, mobile).replace(/{username}/g, username).replace(/{password}/g, password).replace(/{role}/g, "Agent").replace(/{site_name}/g, site_name).replace(/{site_url}/g, site_url).replace(/{html}/g, html),


  template_id: "d-67b60cd879a64256847be80c5924029b",
});


module.exports = {
  forgetPasswordTemplate,
  subscriptionTemplate,
  RegisteredTemplate,
  subscriptionAdminTemplate,
  propertyInquiryAdminTemplate,
  UpdateProfileTemplate,
  ChangePasswordTemplate,
  SandLoaninquryTemplate,
  SandLoaninquryAdminTemplate,
  subscribeTemplate,
  RequirementaddTemplate,
  propertyInquiryTemplate,
  propertyaddTemplate,
  propertyupdateTemplate,
  propertyEnquiryTemplate,
  propertyRequirementTemplate,
  BuilderRegisteredTemplate,
  AddProjectTemplate,
  UpdateProjectTemplate,
  ProjectAddTemplate,
  ProjectUpdateTemplate,
  adminRequirementTemplate,
  propertyInquiryToOwnerTemplate,
  propertyEnquirytoadminTemplate,
  propertyEnquirytouserTemplate,
  UserEnquiryTemplate,
  UserEnquiryAdminTemplate,
  propertyaddadminTemplate,
  propertyupdateadminTemplate,
  mailtofrndTemplate,
  PackageexpiryOneDayNotification,
  PackageexpirySevenDayNotification,
  PackageexpiryFifteenDayNotification,
  ProjectMIssingTemplate,
  ProjectupdateadminTemplate,
  AgentRegisteredTemplate,
  shortlistTemplate,
  saveSearchTemplate

};
