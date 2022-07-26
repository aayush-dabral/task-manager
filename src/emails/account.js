const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
    to: email,
    from: 'aayush05dabral@gmail.com',
    subject: 'Welcome message',
    text: `Welcome to the app, ${name}. Let me know how you felt about the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aayush05dabral@gmail.com',
        subject: 'Account Cancellation',
        text: `Your account has been cancelled, ${name}. Do tell us why you considered removing your account.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}