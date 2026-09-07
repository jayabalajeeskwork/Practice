from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.core.mail import send_mail


def send_email(request):

    if request.method == "POST":

        send_mail(
            subject="Test Mail from Django",
            message="Hello! This is a test email sent from Django.",
            from_email=None,
            recipient_list=["jayabalajeesk04@gmail.com"],
        )

        return render(request, "mailapp/success.html")

    return render(request, "mailapp/send_email.html")