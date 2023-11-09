// controllers/AuthUser.js
const UserModel = require('../../models/auth/user');

async function authorizeAdmin(req, res, next) {
  const userId = req.session.userId;

  if (await UserModel.isUserAdmin(userId)) {
    next();
  } else {
    res.status(403).send('Acesso não autorizado');
  }
}

module.exports = {
  authorizeAdmin
};
