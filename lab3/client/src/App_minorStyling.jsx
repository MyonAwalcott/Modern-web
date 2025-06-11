import { useState, useEffect } from "react";
import "./App.css";
function App() {
    const [message, setMessage] = useState("");
    const [singleFile, setSingleFile] = useState(null);
    const [displaySingleFile, setDisplaySingleFile] = useState(null);

    const fetchSingleFile = async () => {
        try {
            const response = await fetch(`http://localhost:8000/fetch/single`);

            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setDisplaySingleFile(imageUrl);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSingleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", singleFile);

        try {
            const response = await fetch(`http://localhost:8000/save/single`, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            setMessage(data.message || "Upload successful");
        } catch (error) {
            console.log(error);
            setMessage("Upload failed");
        }
    };

    return (
        <>
            <div
                style={{
                    fontFamily: "Arial, sans-serif",
                    maxWidth: "600px",
                    margin: "40px auto",
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    backgroundColor: "#f9f9f9",
                    color: "#000000",
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                    Single File Uploader
                </h2>
                <form
                    onSubmit={handleSingleUpload}
                    style={{ marginBottom: "20px" }}
                >
                    <input
                        type="file"
                        onChange={(e) => {
                            setSingleFile(e.target.files[0]);
                        }}
                        required
                        style={{ marginBottom: "10px" }}
                    />
                    <br></br>
                    <button
                        type="submit"
                        style={{
                            padding: "8px 16px",
                            backgroundColor: "#098765",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            marginRight: "10px",
                        }}
                    >
                        Upload
                    </button>
                </form>
                <button
                    type="button"
                    onClick={fetchSingleFile}
                    style={{
                        padding: "8px 16px",
                        backgroundColor: "#012345",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Fetch Random Image
                </button>
                {displaySingleFile && (
                    <div>
                        <h4>Fetched Image:</h4>
                        <img
                            src={displaySingleFile}
                            alt="Fetched from server"
                            style={{
                                maxWidth: "300px",
                                border: "1px solid #ccc",
                                borderRadius: "6px",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        />
                    </div>
                )}
                <br></br>
                {message && (
                    <p
                        style={{
                            padding: "10px",
                            backgroundColor: "#e0ffe0",
                            border: "1px solidrgb(0, 0, 0)",
                            borderRadius: "5px",
                            marginBottom: "20px",
                            color: "#333",
                        }}
                    >
                        {message}
                    </p>
                )}
            </div>
        </>
    );
}

export default App;
