// middleware/authSession.js
const authorizationMiddleware = (req, res, next) => {
    if (req.session && req.session.user) {
      // O usuário está logado, permita o acesso
      next();
    } else {
      res.status(401).send('Acesso não autorizado. Faça login para continuar.');
      
    }
  };
  
  module.exports = authorizationMiddleware;
  