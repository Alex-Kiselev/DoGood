const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/img/');
  },

  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const storageAvatar = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/img/avatars');
  },

  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });
const uploadAvatar = multer({ storageAvatar });

const addToLocals = (req, res, next) => {
  res.locals.userId = req.session?.userId;
  res.locals.userName = req.session?.userName;
  next();
};

const checkUser = (req, res, next) => {
  if (req.session.userName) {
    next();
  } else {
    res.redirect('/users/login');
  }
};

const checkProtection = async (req, res, next) => {
  if (Number(req.session.userId) === Number(req.params.id)) {
    next();
  } else {
    res.redirect(`/users/profile/${req.session.userId}`);
  }
};


module.exports = { addToLocals, checkUser, checkProtection, upload, uploadAvatar };
