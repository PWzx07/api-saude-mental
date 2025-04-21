import express from 'express';
import { getMotivacao, postMotivacao } from '../controllers/motivacao.controller.js';

const router = express.Router();

router.get('/', getMotivacao);
router.post('/', postMotivacao);

export default router;
