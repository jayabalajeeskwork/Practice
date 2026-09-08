pip install django django-allauth 

"accounts",    
"allauth",
"allauth.account",
"allauth.socialaccount",
"allauth.socialaccount.providers.google",

"allauth.account.middleware.AccountMiddleware",

AUTHENTICATION_BACKENDS = [
    "django.contrib.auth.backends.ModelBackend",
    "allauth.account.auth_backends.AuthenticationBackend",
]

path("accounts/", include("allauth.urls")),
path("", include("accounts.urls")),


from django.urls import path
from .views import home, dashboard

urlpatterns = [
    path("", home, name="home"),
    path("dashboard/", dashboard, name="dashboard"),
]

from django.shortcuts import render
from django.contrib.auth.decorators import login_required


def home(request):
    return render(request, "home.html")


@login_required
def dashboard(request):
    return render(request, "dashboard.html")

<!DOCTYPE html>
<html>
<head>
    <title>OAuth Demo</title>
</head>

<body>

<h1>OAuth Login Demo</h1>

<a href="/accounts/google/login/">
    Login with Google
</a>

</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>

<body>

<h1>Dashboard</h1>

<h2>Welcome {{ user.username }}</h2>

<p>Email: {{ user.email }}</p>

<a href="/accounts/logout/">
    Logout
</a>

</body>
</html>