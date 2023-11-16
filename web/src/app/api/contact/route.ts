import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(req: Request) {
  const {email, subject, content} = await req.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD
    }
  })
  const mailOpts: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from: "${email}". Subject: "${subject}"`,
    text: content,
  }

  const sendMailPromise = () =>
  new Promise<string>((resolve, reject) => {
    transport.sendMail(mailOpts, (err) => {
      if(!err) resolve("Mail sent!");
      else reject(err.message);
    })
  })

  try {
    return Response.json(await sendMailPromise(), {status: 200});
  } catch(e) {
    return Response.json(e, {status: 500});
  }
}