const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { config } = require('../config/config');
const UserService = require('./user.service');
const service = new UserService();

class AuthService {
    async getUser(email, password) {
        const user = await service.findByEmail(email);
        if (!user) {
            throw boom.unauthorized('Invalid email');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw boom.unauthorized('Invalid email');
        }
        delete user.dataValues.password;
        return user;
    }

    signToken(user) {
        const payload = {
            sub: user.id,
            role: user.role
        }
        const token = jwt.sign(payload, config.jwtSecret);
        return {
            user,
            token
        };
    }

    async sendMail(email) {
        const user = await service.findByEmail(email);
        if (!user) {
            throw boom.unauthorized('Invalid email');
        }
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            secure: true, // true for 465, false for other ports
            port: 465,
            auth: {
                user: config.emailSender,
                pass: config.emailPassword
            }
        });
        await transporter.sendMail({
            from: '"Juanito Ortega 👻" <ortegaj83@gmail.com>', // sender address
            to: `${user.email}`, // list of receivers
            subject: "Hola ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        return { message: 'Mail sent' };
    }
}

module.exports = AuthService;