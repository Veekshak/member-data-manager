import Members from "../models/members.js";
const members = new Members();

export async function fetchAllMembers(req, res) {
  try {
    const [rows, fieldData] = await members.fetchAll();
    res.json(rows);
  } catch (error) {
    console.error("Error Fetching Data:", error);
    return res.status(500).json({ error: "Error fetching Data" });
  }
}

export async function fetchMemberById(req, res) {
  try {
    const { id } = req.params;
    const [rows, fieldData] = await members.fetchById(id);
    res.json(rows);
  } catch (error) {
    console.error("Error Fetching Data:", error);
    return res.status(500).json({ error: "Error fetching Data" });
  }
}
export async function deleteMemberById(req, res) {
  try {
    const { id } = req.params;
    const [rows, fieldData] = await members.deleteById(id);
    res.json(rows);
  } catch (error) {
    console.error("Error Deleting Data:", error);
    return res.status(500).json({ error: "Error deleting Data" });
  }
}

export async function createNewMember(req, res) {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ message: "Data is required" });
  }

  const { id, name, address, phone_number, father_name, date, cur_state, dir } =
    data;

  if (
    !id?.trim() ||
    !name?.trim() ||
    !phone_number?.trim() ||
    !cur_state?.trim()
  ) {
    return res.status(400).json({ message: "Invalid data provided." });
  }

  try {
    const member = new Members(
      id,
      name,
      address,
      phone_number,
      father_name,
      date,
      cur_state,
      dir
    );
    const [data] = await member.save();
    console.log(data);
    return res.status(200).json({ message: "Data saved successfully", data });
  } catch (error) {
    console.error("Error Saving Data:", error);
    return res.status(500).json({ error: "Error saving Data" });
  }
}

export async function updateMember(req, res) {
  const Id = req.params.id;
  const { data } = req.body;
  console.log(data);
  if (!data) {
    return res.status(400).json({ message: "Data is required" });
  }

  const { id, name, address, phone_number, father_name, date, cur_state, dir } =
    data;

  if (
    !id?.trim() ||
    !name?.trim() ||
    !phone_number?.trim() ||
    !cur_state?.trim()
  ) {
    return res.status(400).json({ message: "Invalid data provided." });
  }

  try {
    const member = new Members(
      id,
      name,
      address,
      phone_number,
      father_name,
      date,
      cur_state,
      dir
    );
    const [data] = await member.updateById(Id);
    console.log(data);
    return res.status(200).json({ message: "Data saved successfully", data });
  } catch (error) {
    console.error("Error Saving Data:", error);
    return res.status(500).json({ error: "Error saving Data" });
  }
}

export async function fetchAllDirectors(req, res) {
  try {
    const [rows, fieldData] = await members.fetchAllDir();
    res.json(rows);
  } catch (error) {
    console.error("Error Fetching Data:", error);
    return res.status(500).json({ error: "Error fetching Data" });
  }
}
