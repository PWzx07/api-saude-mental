import express from 'express';
import motivacoesRoutes from "./routes/motivacoes.routes.js"
import meditacoesRoutes from './routes/meditacoes.routes.js';
import respiracoesRoutes from './routes/respiracoes.routes.js';


const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/motivacao", motivacoesRoutes)
app.use('/meditacao', meditacoesRoutes);
app.use('/respiracao', respiracoesRoutes);

app.listen(PORT, ()=>{
    console.log(`Rodando no http://localhost:${PORT}`);
})