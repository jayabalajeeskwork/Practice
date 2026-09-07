pip install django 

django-admin startproject EmailAppDjango .

django-admin startapp mailapp

INSTALLED_APPS = [ 
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "mailapp"
]

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"

EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_USE_TLS = True

EMAIL_HOST_USER = "work.jayabalajeesk@gmail.com"
EMAIL_HOST_PASSWORD = "fzrcewtciwzjaguk"

DEFAULT_FROM_EMAIL = EMAIL_HOST_USER


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


from django.urls import path
from .views import send_email

urlpatterns = [
    path("", send_email, name="send_email"),
]


from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("mailapp.urls")),
]

<html>
<head>
    <title>Send Mail</title>
</head>
<body>

    <h2>Send Test Email</h2>

    <form method="POST">
        {% csrf_token %}

        <button type="submit">
            Send Email
        </button>
    </form>

</body>
</html>

<html>
<head>
    <title>Success</title>
</head>
<body>

    <h2>Email sent successfully</h2>

    <a href="/">Send Another Email</a>

</body>
</html>