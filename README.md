# Spooker — Site Institucional

Site institucional da Spooker Tecnologia. Stack: React 19 + Vite 8 + Tailwind CSS 3 + Express + Nodemailer.

---

## Estrutura do projeto

```
spoker.com.br/
├── src/
│   ├── assets/           # Logo e imagens estáticas
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── WhySpooker.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsOfUse.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server.js             # Servidor Express (produção)
├── .env.example          # Variáveis de ambiente necessárias
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Desenvolvimento local

### 1. Instalar dependências

```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

O site abre em `http://localhost:5173`.

> O formulário de contato em desenvolvimento proxia para `http://localhost:3000/api/contact`.
> Para testar o envio de email em dev, rode também o servidor em paralelo (ver seção abaixo).

---

## Variáveis de ambiente

Copie o arquivo de exemplo e preencha com os dados reais:

```bash
cp .env.example .env
```

| Variável      | Descrição                                      | Exemplo                      |
|---------------|------------------------------------------------|------------------------------|
| `PORT`        | Porta do servidor Express                      | `3000`                       |
| `SMTP_HOST`   | Host SMTP do seu provedor de email             | `mail.kinghost.net`          |
| `SMTP_PORT`   | Porta SMTP (587 = TLS, 465 = SSL)              | `587`                        |
| `SMTP_SECURE` | `true` para SSL (porta 465), `false` para TLS  | `false`                      |
| `SMTP_USER`   | Endereço de email remetente                    | `comercial@spooker.com.br`   |
| `SMTP_PASS`   | Senha do email                                 | `sua_senha`                  |
| `MAIL_TO`     | Destinatário dos leads recebidos               | `comercial@spooker.com.br`   |

### Configuração KingHost

```env
SMTP_HOST=mail.kinghost.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=comercial@spooker.com.br
SMTP_PASS=<senha do painel KingHost>
MAIL_TO=comercial@spooker.com.br
```

---

## Deploy na VPS (KingHost)

### Pré-requisitos na VPS

```bash
# Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# PM2 (gerenciador de processos)
npm install -g pm2

# Nginx
sudo apt install -y nginx

# Certbot (SSL)
sudo apt install -y certbot python3-certbot-nginx
```

### 1. Subir o projeto

```bash
# Clonar ou enviar os arquivos para a VPS
cd /var/www/spooker

# Instalar dependências
npm install

# Criar e preencher o .env
cp .env.example .env
nano .env

# Gerar o build de produção
npm run build
```

### 2. Iniciar com PM2

```bash
pm2 start server.js --name spooker
pm2 save
pm2 startup   # copie e execute o comando que aparecer
```

Comandos úteis do PM2:

```bash
pm2 status          # ver status
pm2 logs spooker    # ver logs em tempo real
pm2 restart spooker # reiniciar após mudanças
pm2 stop spooker    # parar
```

### 3. Configurar Nginx

```bash
sudo nano /etc/nginx/sites-available/spooker
```

Cole o conteúdo:

```nginx
server {
    listen 80;
    server_name spooker.com.br www.spooker.com.br;

    location / {
        proxy_pass         http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Ative e recarregue:

```bash
sudo ln -s /etc/nginx/sites-available/spooker /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. SSL com Certbot

```bash
sudo certbot --nginx -d spooker.com.br -d www.spooker.com.br
```

O Certbot configura HTTPS automaticamente e renova o certificado.

---

## Atualizar o site

```bash
# Na VPS, na pasta do projeto
npm run build
pm2 restart spooker
```

---

## Funcionalidades

| Seção            | Descrição                                                  |
|------------------|------------------------------------------------------------|
| **Navbar**       | Menu responsivo com scroll suave e blur progressivo        |
| **Hero**         | Imagem de fundo com overlay, headline e CTAs               |
| **Serviços**     | Grid de 8 cards com ícones e tags                          |
| **Por que nós**  | 3 diferenciais com animação de entrada                     |
| **Como funciona**| 4 etapas com conectores e layout mobile adaptado           |
| **Contato**      | Formulário com validação + envio real de email via SMTP    |
| **Footer**       | Links, redes sociais, política de privacidade e termos     |
| **Privacidade**  | Página de Política de Privacidade (LGPD)                   |
| **Termos**       | Página de Termos de Uso                                    |

---

## Paleta de cores

| Token              | Valor       | Uso                        |
|--------------------|-------------|----------------------------|
| `brand-primary`    | `#7c3aed`   | Roxo principal (violet-700) |
| `brand-bg`         | `#0a0a0a`   | Fundo escuro               |
| `brand-surface`    | `#111111`   | Cards e seções alternadas  |
| `brand-card`       | `#161616`   | Cards internos             |
| `brand-text`       | `#f1f5f9`   | Texto principal            |
| `brand-muted`      | `#94a3b8`   | Texto secundário           |

---

## Contato técnico

Dúvidas sobre o projeto: **projetosariel@gmail.com**
