import React from "react";
import { useParams } from "react-router-dom";
import { members } from "./members";

function MemberPage() {
  const { id } = useParams();

  const member = members[id];

  if (!member) {
    return <h2 style={{ textAlign: "center" }}>Member not found</h2>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        {/* ✅ IMAGE */}
        <img
          src={member.image}
          alt={member.name}
          style={styles.image}
        />

        <h1>{member.name}</h1>

        <p><b>Department:</b> {member.dept}</p>
        <p><b>Semester:</b> {member.semester}</p>
        <p><b>Blood Group:</b> {member.blood}</p>
        <p><b>Address:</b> {member.address}</p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, purple, blue)",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "20px",
    textAlign: "center",
    width: "300px",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
};

export default MemberPage;