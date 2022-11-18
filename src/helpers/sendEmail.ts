import nodemailer from "nodemailer";
import premadeEmails from "../utils/premadeEmails";
require('dotenv').config();

const sendEmail = async (address: string, type: string) => {
    try {
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
              user: process.env.EMAIL_ADDRESS,
              pass: process.env.EMAIL_PASSWORD
          }
        });

        let info = await transporter.sendMail({
            from: '"RENAC" <itr.malbran.ort.info@gmail.com>',
            to: address,
            subject: premadeEmails.changePassword.subject,
            text: premadeEmails.changePassword.text,

            //Los siguientes valores para los atributos subject y text arrojan error porque un valor de tipo string no puede ser usado como índice.
            //subject: premadeEmails[type].subject,
            //text: premadeEmails[type].text,
        });

        console.log("Message sent: %s", info.messageId);
        
    } catch (e) {
      console.log(e)
    }
};

export default sendEmail