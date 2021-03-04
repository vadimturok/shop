const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'turokvadim2510@gmail.com',
        pass: 'qpalzmtgv$7659'
        }
    },
    {
        from: 'Интернет-магазин ELECTRONICS <turokvadim2510@gmail.com>',
    }
    
)

transporter.verify((error, success) => {
    error ? console.log(error) :
    console.log('Server is ready to take our messages: ', success)
})

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
}

module.exports = mailer