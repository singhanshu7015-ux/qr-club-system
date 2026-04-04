import QRCode from "react-qr-code";
import { members } from "./members";

function Home() {

  const baseURL = "http://10.183.125.203"; // 🔥 YOUR IP

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, purple, blue)",
      padding: "20px",
      color: "white"
    }}>

      <h1 style={{ textAlign: "center" }}>
        🎓 QR Club Member System
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "20px"
      }}>

        {Object.keys(members).map((id) => (
          <div key={id} style={{
            background: "white",
            color: "black",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center"
          }}>

            <h3>{id}</h3>

            <QRCode
              value={`${baseURL}/member/${id}`}
              size={200}
            />

          </div>
        ))}

      </div>

    </div>
  );
}

export default Home;