import express from 'express';
import { getRespiracao, postRespiracao } from '../controllers/respiracao.controller.js';

const router = express.Router();

router.get('/', getRespiracao);
router.post('/', postRespiracao);

export default router;
