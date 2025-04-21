import { readFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let respiracoes = JSON.parse(
    readFileSync(__dirname + '/../data/respiracoes.json', 'utf-8')
  );
  
  export function getRespiracao(req, res) {
    const index = Math.floor(Math.random() * respiracoes.length);
    res.status(200).json(respiracoes[index]);
  }
  
  export function postRespiracao(req, res) {
    const { nome, instrucoes } = req.body;
    if (!nome || !instrucoes) {
      return res.status(400).json({ erro: 'Nome e instruções são obrigatórios' });
    }
  
    respiracoes.push({ nome, instrucoes });
    res.status(201).json({ mensagem: 'Técnica de respiração adicionada', nome });
  }
  