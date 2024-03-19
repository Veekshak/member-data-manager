export async function fetchAllMembersData() {
  const response = await fetch(`http://localhost:6969/members/all`);
  if (!response.ok) {
    const error = new Error("Failed to fetch member data");
    error.code = response.status;
    error.info = response.json();
    throw error;
  }

  const memberData = await response.json();

  return memberData;
}
export async function fetchAllDirectorsData() {
  const response = await fetch(`http://localhost:6969/directors/all`);
  if (!response.ok) {
    const error = new Error("Failed to fetch director data");
    error.code = response.status;
    error.info = response.json();
    throw error;
  }

  const memberData = await response.json();

  return memberData;
}
export async function fetchMemberById({ signal, id }) {
  const response = await fetch(`http://localhost:6969/members/${id}`, {
    signal: signal,
  });
  if (!response.ok) {
    const error = new Error("Failed to fetch member data");
    error.code = response.status;
    error.info = response.json();
    throw error;
  }

  const memberData = await response.json();

  return memberData;
}
export async function deleteMemberById({ signal, id }) {
  const response = await fetch(`http://localhost:6969/members/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const error = new Error("Failed to delete member data");
    error.code = response.status;
    error.info = response.json();
    throw error;
  }

  return response.json();
}

export async function createNewMember(memberData) {
  console.log(JSON.stringify(memberData));
  const response = await fetch(`http://localhost:6969/members/add`, {
    method: "POST",
    body: JSON.stringify(memberData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error("Error occured while submitting");
    error.code = response.status;
    error.info = response.json();
    throw error;
  }

  return response.json();
}
export async function updateMember(memberData) {
  const id = memberData.id;
  console.log(JSON.stringify(memberData));
  const response = await fetch(`http://localhost:6969/members/${id}`, {
    method: "PUT",
    body: JSON.stringify(memberData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error("Error occured while submitting");
    error.code = response.status;
    error.info = response.json();
    throw error;
  }

  return response.json();
}
