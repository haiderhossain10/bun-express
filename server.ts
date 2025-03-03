import "dotenv/config";
import app from "./app";
import fs from "fs";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

// Watch for changes in .env file
fs.watch(".env", (e) => {
    if (e === "change") {
        console.log("🔄 Reloading .env file...");
        dotenv.config({ override: true });
        console.log("✅ .env file reloaded! New PORT:", process.env.PORT);
    }
});
