import "dotenv/config"; // Load environment variables
import app from "./app";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const PORT = process.env.PORT || 3000;

// Only run server if it's not in Vercel (local mode)
if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
}

// Vercel API Handler
export default function handler(req: VercelRequest, res: VercelResponse) {
    return app(req, res);
}
