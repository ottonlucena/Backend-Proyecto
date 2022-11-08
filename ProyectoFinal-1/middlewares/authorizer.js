const admin = false;
const authorizer = (req, res, next) => {
  if (admin) {
    next();
    return;
  }

  res.status(404).json({
    error: -1,
    descripcion: `Ruta: ${req.url}`,
    método: `${req.method}, no implementada!!!`,
  });
  return;
};

module.exports = authorizer;
