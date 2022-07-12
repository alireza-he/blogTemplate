import data from "./slm.json";

export default (req, res) => {
  res.status(200).json(data);
};
