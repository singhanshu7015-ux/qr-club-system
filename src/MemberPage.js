import React from "react";
import { useParams } from "react-router-dom";
import { members } from "./members";

function MemberPage() {
  const { id } = useParams();
  const data = members[id];

  if (!data) {
    return <h2>Member Not Found</h2>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img
        src={data.image}
        alt={data.name}
        width="150"
        height="150"
        style={{ borderRadius: "50%" }}
      />

      <h2>{data.name}</h2>
      <p><b>Department:</b> {data.dept}</p>
      <p><b>Semester:</b> {data.semester}</p>
      <p><b>Blood Group:</b> {data.blood}</p>
      <p><b>Address:</b> {data.address}</p>
    </div>
  );
}

export default MemberPage;