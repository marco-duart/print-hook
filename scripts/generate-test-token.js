require('dotenv').config();
const jwt = require('jsonwebtoken');

const payload = {
  sub: 'print-hook',
  username: 'development',
  eventId: 'test-event',
  iat: Math.floor(Date.now() / 1000),
};

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key_2025';

console.log('Secret JWT usado:', JWT_SECRET);

if (!JWT_SECRET || JWT_SECRET === 'fallback_secret_key_2025') {
  console.warn('⚠️  AVISO: Usando secret fallback. Verifique se o .env está configurado.');
}

const token = jwt.sign(payload, JWT_SECRET, {
  expiresIn: '24h'
});

console.log('🔐 Token JWT para testes:');
console.log(token);
console.log('\n📋 Use no Header do Postman:');
console.log(`Authorization: Bearer ${token}`);