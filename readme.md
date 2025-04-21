# 🧠 API de Apoio à Saúde Mental

Bem-vindo à API **Servindo 🐕‍🦺**, uma API de apoio à saúde mental desenvolvida como parte de um mini projeto com foco em back-end utilizando Node.js e Express.

---

## 📌 Propósito

Esta API tem como objetivo fornecer **funcionalidades úteis para o bem-estar emocional**, como frases motivacionais, técnicas de respiração, sugestões de meditação e muito mais. Ela pode ser consumida por aplicações front-end, bots ou sistemas de apoio pessoal/coletivo.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- ES6 Modules
- JSON (simulação de base de dados)
- Nodemon (modo dev)

---

## 📁 Estrutura do Projeto

```
src/
├── controllers/
├── data/
├── routes/
├── index.js
├── ...
```

- `controllers/`: lógica das rotas
- `routes/`: definição dos endpoints
- `data/`: arquivos JSON simulando um banco
- `index.js`: arquivo principal da aplicação

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/servindo-api.git
cd servindo-api
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o servidor
Modo normal:
```bash
npm start
```

Modo dev com auto reload:
```bash
npm run dev
```

---

## 📫 Rotas disponíveis

### 📍 `/motivacao`  
**GET:** Retorna uma frase motivacional aleatória  
**POST:** Adiciona uma nova frase motivacional

Exemplo:
```json
{ "frase": "Você é mais forte do que imagina." }
```

---

### 📍 `/meditacao`  
**GET:** Retorna uma sugestão de meditação guiada  
**POST:** Adiciona uma nova meditação

Exemplo:
```json
{
  "titulo": "Meditação para Iniciantes",
  "descricao": "Sente-se confortavelmente e concentre-se na respiração.",
  "link": "https://www.youtube.com/..."
}
```

---

### 📍 `/respiracao`  
**GET:** Retorna uma técnica de respiração  
**POST:** Adiciona uma nova técnica de respiração

Exemplo:
```json
{
  "nome": "Box Breathing",
  "instrucoes": "Inspire 4s, segure 4s, expire 4s, segure 4s."
}
```

---

## 🧪 Teste com ferramentas como:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- Ou diretamente no navegador para rotas GET

---

## 💡 Possibilidades de uso

- Aplicações web e mobile de autocuidado
- Bots motivacionais
- Plataformas de apoio psicológico
- Extensões para navegador

---

## 👤 Autor

Desenvolvido por **[Pedro Washington]**  
🔗 [Meu LinkedIn](https://www.linkedin.com/in/pedro-w-a52125324/)  
🔗 [Meu Github](https://github.com/PWzx07)

---

## 📄 Licença

MIT License

Copyright (c) 2025 [Pedro Washington]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in  
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN  
THE SOFTWARE.
