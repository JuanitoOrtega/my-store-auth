const bcrypt = require('bcrypt');

async function verifyPassword() {
    const myPassword = 'myPassword';
    const hash = '$2b$10$YELkvLMYAQ4pZ7BTv9amke/ze7yYlQbEMy/508TOyEJIzuLuTD2pq';
    const isMatch = await bcrypt.compare(myPassword, hash);
    console.log(isMatch);
}

verifyPassword();