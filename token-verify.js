const jwt = require('jsonwebtoken');

const secret = 'myCat'; // secret key
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0MzA1MTc4MX0.Mw8qzwE5Rib7IEzXzaPrgYosd4LC6mNWgYxoTck3u5c';

function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);