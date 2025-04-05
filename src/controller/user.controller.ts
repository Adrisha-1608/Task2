import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user.models";
import { createUserSchema } from "../validation/user.validation";

export const createUser = async (req: Request, res: Response, next:Function):Promise<any> => {
  //const { error } = createUserSchema.validate(req.body);
  //if (error) {
    //return res.status(400).json({ error: error.details[0].message });
  //}

  try {
    const { name, age, email, password, phoneNumber } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      age,
      email,
      password: hashedPassword,
      phoneNumber
    });

    await user.save();

    // Don’t return the password
    const { password: _, ...userData } = user.toObject();

    return res.status(201).json(userData);
  } catch (err: any) {
    return res.status(500).json({ error: "Failed to create user", details: err.message });
  }
};


