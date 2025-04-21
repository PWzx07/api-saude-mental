import express from 'express';
import { getMeditacao, postMeditacao } from '../controllers/meditacao.controller.js';

const router = express.Router();

router.get('/', getMeditacao);
router.post('/', postMeditacao);

export default router;
