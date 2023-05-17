// POST /api/users/auth
export const authUser = async (req, res) => {
  console.log(req.url);
  try {
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(400).end("error captured!");
  }
};
