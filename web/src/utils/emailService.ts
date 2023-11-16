export function sendEmail(data: {email: string, subject: string, content: string}) {
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data)
  }).then((res) => res.json())
  .then((data) => alert(data))
  .catch((e)=> alert("Error " + e.message));
}