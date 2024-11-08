import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
/* ROUTE IMPORTS */
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";
import searchRoutes from "./routes/searchRoutes";
import userRoutes from "./routes/userRoutes";
import teamRoutes from "./routes/teamRoutes";

/* CONFIGURATIONS */
dotenv.config();
const app = express();

// CORS Configuration
const corsOptions = {
  origin: 'https://master.d3rpe2d2b8wltm.amplifyapp.com', // Adjust this to your frontend domain for better security
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Authorization', 'Content-Type', 'Accept', 'Origin'],
};
app.use(cors(corsOptions));

// Handle OPTIONS preflight requests globally
app.options('*', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': 'https://master.d3rpe2d2b8wltm.amplifyapp.com',
    'Access-Control-Allow-Headers': 'Authorization,Content-Type,Accept,Origin',
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
  });
  res.status(204).send();
});

// Other middlewares
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ROUTES */
app.get("/", (req, res) => {
  res.send("This is the home route");
});

app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/search", searchRoutes);
app.use("/users", userRoutes);
app.use("/teams", teamRoutes);

/* SERVER */
const port = Number(process.env.PORT) || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
