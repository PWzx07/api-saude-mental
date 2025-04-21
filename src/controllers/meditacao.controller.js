import { readFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let meditacoes = JSON.parse(
    readFileSync(__dirname + '/../data/meditacoes.json', 'utf-8')
  );
  
  export function getMeditacao(req, res) {
    const index = Math.floor(Math.random() * meditacoes.length);
    res.status(200).json(meditacoes[index]);
  }
  
  export function postMeditacao(req, res) {
    const { titulo, descricao, link } = req.body;
    if (!titulo || !descricao || !link) {
      return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
    }
  
    meditacoes.push({ titulo, descricao, link });
    res.status(201).json({ mensagem: 'Meditação adicionada', titulo });
  }
  