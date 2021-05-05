import nodemailer from 'nodemailer'

export default async function contact (req, res) {
  
    const {name, email, msg} = req.body

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    });

    try {
        await transporter.sendMail({
          from: email,
          to: 'devzinochan@gmail.com',
          subject: `Contact form submission from ${email}`,
          html: `<p>You have a new contact form submission</p><br>
          <p><strong>Name: </strong> ${name} </p><br>
          <p><strong>Message: </strong> ${msg} </p><br>
          `,
        });

      } catch (err) {
        console.log(err.message);
      }

    res.status(200).json(req.body)
  
}