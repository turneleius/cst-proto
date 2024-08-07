'use server';

import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import Users from "../models/Users";

type User = {
  firstName: String
  lastName: String
  email: String
  password: String
  // passwordConfirmation: String
  country: String
}

export const createAccount = async (user: User) => {
  const data = await fetch("http://localhost:3000/api/users", {
    method: "POST", body: JSON.stringify(user)
  }).then((res) => res.json());
};

export const userLogin = async ({ email, password }: { email: string, password: string }) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await Users.findOne({
    email,
    // password: hashedPassword,
  });
  if (user?.email) {
    redirect("/");
  }
  return false;
}