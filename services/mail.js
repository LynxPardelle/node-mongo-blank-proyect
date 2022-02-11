var nodemailer = require("nodemailer");

exports.DoSendEmail = (
  mails,
  service,
  user,
  pass,
  from,
  secure = null,
  port = null
) => {
  var protoTransporter = {
    service: service,
    auth: {
      user: user,
      pass: pass,
    },
  };

  if (secure) {
    protoTransporter.secure = secure;
  }

  if (port) {
    protoTransporter.port = port;
  }

  var transporter = nodemailer.createTransport(protoTransporter);

  for (let mail of mails) {
    var mailOptions = {
      from: from,
      to: mail.to,
      subject: mail.title,
      text: mail.text,
      html: mail.html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
};
