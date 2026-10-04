const getMembers = (req, res) => {
  res.json([
    {
      id: 1,
      name: "Rahul",
      plan: "Premium"
    }
  ]);
};

module.exports = {
  getMembers
};