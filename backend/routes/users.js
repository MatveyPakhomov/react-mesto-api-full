const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const { isValidURL } = require("../utils/methods");

const {
  getUsers,
  getUserById,
  getProfile,
  updateProfile,
  updateAvatar,
} = require("../controllers/users");

router.get("/users", getUsers);
router.get("/users/me", getProfile);
router.get(
  "/users/:id",
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().required().length(24).hex(),
    }),
  }),
  getUserById
);
router.patch(
  "/users/me",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      about: Joi.string().required().min(2).max(30),
    }),
  }),
  updateProfile
);
router.patch(
  "/users/me/avatar",
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().required().custom(isValidURL),
    }),
  }),
  updateAvatar
);

module.exports = router;
