import { useParams } from "react-router-dom";
import { members } from "./members";

function MemberPage() {

  const { id } = useParams();
  const data = members[id];

  if (!data) {
    return <h1 style={{ textAlign: "center" }}>Member not found</h1>;
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, purple, blue)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        textAlign: "center",
        width: "300px"
      }}>

        <img
          src={data.image}
          alt="profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%"
          }}
        />

        <h2>{data.name}</h2>

        <p><b>Role:</b> {data.role}</p>
        <p><b>Department:</b> {data.dept}</p>
        <p><b>Semester:</b> {data.semester}</p>
        <p><b>Blood Group:</b> {data.blood}</p>
        <p><b>Address:</b> {data.address}</p>

      </div>

    </div>
  );
}

export default MemberPage;