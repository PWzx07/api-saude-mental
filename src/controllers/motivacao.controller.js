import { readFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let motivacoes = JSON.parse(
  readFileSync(__dirname + '/../data/motivacoes.json', 'utf-8')
);

export function getMotivacao(req, res) {
  const index = Math.floor(Math.random() * motivacoes.length);
  res.status(200).json({ frase: motivacoes[index] });
}

export function postMotivacao(req, res) {
  const { frase } = req.body;
  if (!frase) {
    return res.status(400).json({ erro: 'Frase é obrigatória' });
  }

  motivacoes.push(frase);
  res.status(201).json({ mensagem: 'Frase adicionada com sucesso', frase });
}
