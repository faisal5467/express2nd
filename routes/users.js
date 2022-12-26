import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "Faisal",
    lastName: "Khan",
    age: 22,
  },
  {
    firstName: "Yasir",
    lastName: "Khan",
    age: 23,
  },
  {
    firstName: "Mohsin",
    lastName: "Khan",
    age: 25,
  },
];
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);

  res.send(`User with the name: ${user.firstName} added to the database`);
});

export default router;
