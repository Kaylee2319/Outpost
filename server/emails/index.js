const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY; //============= need SENDGRID

sgMail.setApiKey(SENDGRID_API_KEY);

exports.sendWelcomeEmail = (email, user_name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Thanks for signing up.',
    text: `Hi ${user_name}! Welcome to OUTPOST.`
  });
};

exports.sendCancellationEmail = (email, user_name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Sorry to see you go.',
    text: `Bye ${user_name}. Hope to see you soon.`
  });
};
