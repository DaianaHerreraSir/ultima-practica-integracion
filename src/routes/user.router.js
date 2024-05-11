import { Router } from "express";
import usersModel from "../models/users.model.js";
import passportCall from "../middleware/passportCall.js";
import authorization from "../middleware/authentication.middleware.js";
import { UserControllers } from "../controllers/user.controllers.js";

const userRouter = Router()

 
const { getUsers,
        getUserBy,
        createUser,
        updateUser,
        deleteUser,
    userRole}= new UserControllers()


userRouter.get("/", getUsers)

userRouter.get("/:uid", getUserBy)

userRouter.post("/",createUser)

userRouter.put("/:uid", updateUser)

userRouter.delete("/:uid", deleteUser)

// Nueva ruta para cambiar el rol de un usuario a premium o user
userRouter.put("/premium/:uid", userRole);