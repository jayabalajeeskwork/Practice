from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from .models import User
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def register(request):

    if request.method == "POST":

        User.objects.create(
            username=request.POST["username"],
            email=request.POST["email"],
            password=request.POST["password"]
        )

        return redirect("/login/")

    return render(request, "register.html")

@csrf_exempt
def login_view(request):

    if request.method == "POST":

        user = User.objects.filter(
            email=request.POST["email"],
            password=request.POST["password"]
        ).first()

        if user:
            return render(request, "dashboard.html")

    return render(request, "login.html")