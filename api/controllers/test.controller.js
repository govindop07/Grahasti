import jwt from 'jsonwebtoken';

export const shouldBeLoggedIn = (req, res) => {
  console.log(req.userId);
  res.status(200).json({ message: "You are authenticated"});
}
