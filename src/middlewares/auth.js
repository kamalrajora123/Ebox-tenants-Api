const {
  JWT_ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRES_IN,
  SIGN_OPTION,
} = require('config');
const { AuthService } = require('../auth');

const { verifyJWT } = require('../utils/jwt');
const { UnauthorizedError } = require('../utils/api-errors');

module.exports = async (req, res, next) => {
  // console.log('test');  
  let token = req.header('Authorization') || req.header('authorization');
  if (!token) throw new UnauthorizedError();
  // console.log(token);
  token = req.headers.authorization.replace('Bearer ', '');
  try {
    const payload = await verifyJWT({
      token,
      secretKey: JWT_ACCESS_TOKEN_SECRET,

      signOption: {
        ...SIGN_OPTION,
        expiresIn: ACCESS_TOKEN_EXPIRES_IN,
      },
    });
    req.user = payload;
  } catch (err) {
    throw new UnauthorizedError('Token expired');
  }
  // check if user is not blocked and exist
  // await AuthService.doCheckUserExist({ email: req.user.email });
  return next();
};
