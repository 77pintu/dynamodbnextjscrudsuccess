import {
  addMember,
  deleteMember,
  getMembers,
} from "../../config/memberdetails";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const result = await getMembers();
    res.json({ result });
  } else if (req.method === "POST") {
    const body = req.body;
    try {
      await addMember(body);
      res.status(201).json({ message: "success" });
    } catch (err) {
      res.status(500).json({ err: `Something went wrong ${err}` });
    }
  } else if (req.method === "PUT") {
    const body = req.body;
    try {
      await addMember(body);
      res.status(201).json({ message: "success" });
    } catch (err) {
      res.status(500).json({ err: `Something went wrong ${err}` });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      const myId = id;
      await deleteMember(myId);
      res.status(200).json({ message: "success" });
    } catch (err) {
      res.status(500).json({ err: `Something went wrong ${err}` });
    }
  }
}
