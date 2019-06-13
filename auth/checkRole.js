module.exports = department => {
  return function(req, res, next) {
    if (req.user) {
      if (req.user.department) {
        next();
      } else {
        res
          .status(403)
          .json({ message: "You don't have access to this resource" });
      }
    } else {
      res.status(401).json({ message: "You shall not pass!" });
    }
  };
};
