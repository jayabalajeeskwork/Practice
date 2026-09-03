from django.contrib import admin
from django.urls import path
from payments import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("payment/", views.payment_page, name="payment_page"),
    path("create-order/", views.create_order, name="create_order"),
    path("payment-success/", views.payment_success, name="payment_success"),
]