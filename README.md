# 🖨️ PrintHook

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Multiplatform](https://img.shields.io/badge/Windows-Linux-0078D6?style=for-the-badge&logo=windows&logoColor=white)

> **Sistema de impressão remota inteligente** - Recebe requisições de impressão via API e gerencia filas sequenciais para impressoras locais em eventos por todo o Brasil.

## 🎯 Sobre o Projeto

O **PrintHook** é uma solução robusta para automação de impressão em eventos itinerantes. Ele permite que sistemas em nuvem (VM GCP) enviem documentos para impressão em notebooks Windows locais, que por sua vez comandam impressoras físicas em diferentes eventos pelo país.

### ⚡ Funcionalidades Principais

- 🖨️ **Impressão Multiplataforma** - Suporte nativo para Windows e Linux
- 📋 **Sistema de Fila** - Processamento sequencial e gerenciamento de jobs
- 🔐 **Autenticação JWT** - Segurança com tokens fixos ou dinâmicos
- 🌐 **API RESTful** - Documentação Swagger completa
- 📊 **Monitoramento** - Health checks e status da fila em tempo real
- 🔄 **Resiliência** - Retry automático e fallback inteligente

## 🚀 Começando Rápido

### Pré-requisitos

- **Node.js** 18+
- **Redis** 6+ (para sistema de filas)
- **Impressora** configurada no sistema

### Instalação

```bash
# Clone o repositório
git clone https://github.com/marco-duart/print-hook.git
cd print-hook

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
```

## 🎯 Configuração do Ambiente

Edite o arquivo .env:

```bash
# Application
NODE_ENV=development
PORT=3000

# Authentication
JWT_SECRET=seu_jwt_secret_super_seguro_aqui
JWT_EXPIRES_IN=24h

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# Printing
DEFAULT_PRINTER=
PRINT_TIMEOUT=30000

# Security
ALLOWED_ORIGINS=http://localhost:3000
```

### Execução

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod
```

Acesse: http://localhost:3000/api/docs para a documentação Swagger.

## 🔧 Configuração por Plataforma

### 🪟 Windows

O PrintHook usa automaticamente a biblioteca node-printer para acessar impressoras do Windows.

**Pré-requisitos:**

- Windows 10/11

- Impressora instalada e configurada

- .NET Framework 4.5+ (para node-printer)

### 🐧 Linux

No Linux, o sistema utiliza o CUPS (Common UNIX Printing System).

**Instalação do CUPS:**

```bash
# Ubuntu/Debian
sudo apt update && sudo apt install cups

# CentOS/RHEL
sudo yum install cups

# Habilitar serviço
sudo systemctl enable cups
sudo systemctl start cups

# Adicionar usuário ao grupo lp
sudo usermod -a -G lp $USER

# Reinicie a sessão para aplicar as mudanças
```

**Configurar Impressora:**

```bash
# Listar impressoras disponíveis
lpstat -p

# Configurar impressora padrão
lpoptions -d nome_da_impressora
```

## 📡 API Reference

**Autenticação**

Todas as requisições requerem header:

```bash
Authorization: Bearer <jwt_token>
```

## 🧪 Testes

```bash
# Todos os testes
npm test

# Testes unitários
npm run test:unit

# Testes de integração
npm run test:integration

# Testes com cobertura
npm run test:cov

# Testes E2E
npm run test:e2e
```

## 📊 Monitoramento

O endpoint /print/health retorna:

```json
{
  "success": true,
  "status": "healthy",
  "data": {
    "service": "PrintHook",
    "printers": {
      "available": true,
      "total": 3,
      "hasDefault": true
    },
    "queue": {
      "waiting": 0,
      "active": 1,
      "completed": 15
    }
  }
}
```
