function validateForm()
{
    let user = document.ContactMe.name.value;
    let email = document.ContactMe.email.value;
    let phone = document.ContactMe.phone.value;
    let msg = document.ContactMe.msg.value;

    if (user == "" || email == "" || phone == "" || msg == "")
        alert("Please fill all the fields!");
    else if (phone.length != 10)
        alert("Only provide 10-digit numbers");
    else if (!email.includes("@gmail.com") && !email.includes("outlook.com") && !email.includes("@utrgv.edu"))
        alert("Only use either a gmail, outlook, or utrgv email.");
    else if (msg.length == 0)
        alert("Compose a longer message!");
    else
    {
        alert("Loading mail client...");

        let subject = `Message via MyPortfolio website source ${user}`;
        let body = `From: ${email}\nPhone: ${phone}\nMessage: ${msg}\n`;

        let mailtolink = `mailto: eguzm0510@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtolink;
    }
}