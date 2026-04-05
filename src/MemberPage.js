import React from "react";
import { useParams } from "react-router-dom";
import { members } from "./members";

function MemberPage() {
  const { id } = useParams();
  const data = members[id];

  if (!data) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Member Not Found
      </h2>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        {/* PROFILE IMAGE */}
        <img
          src={data.image}
          alt={data.name}
          style={styles.image}
        />

        {/* DETAILS */}
        <h2>{data.name}</h2>
        <p><b>Department:</b> {data.dept}</p>
        <p><b>Semester:</b> {data.semester}</p>
        <p><b>Blood Group:</b> {data.blood}</p>
        <p><b>Address:</b> {data.address}</p>

      </div>
    </div>
  );
}

/* STYLING */
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, purple, blue)",
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "20px",
    textAlign: "center",
    width: "320px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  image: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
    border: "4px solid purple",
  },
};

export default MemberPage;