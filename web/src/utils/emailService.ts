export function sendEmail(data: {email: string, subject: string, content: string}) {
  const {email, subject, content} = data;

    console.log("Email: " + email);
    console.log("Subject: " + subject);
    console.log("Content: " + content);
}