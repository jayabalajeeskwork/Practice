import razorpay

from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_POST


client = razorpay.Client(
    auth=(settings.JB_TEST_RAZORPAY_KEY_ID, settings.JB_TEST_RAZORPAY_KEY_SECRET) 
)


def payment_page(request):
    return render(request, "payment.html")


@require_POST
def create_order(request):
    order = client.order.create({
        "amount": 50000,  
        "currency": "INR",
    })

    request.session["order_id"] = order["id"]

    return JsonResponse({
        "order_id": order["id"],
        "amount": order["amount"],
        "key": settings.JB_TEST_RAZORPAY_KEY_ID,
    })


@require_POST
def payment_success(request):
    try:
        client.utility.verify_payment_signature({
            "razorpay_order_id": request.session["order_id"],
            "razorpay_payment_id": request.POST["razorpay_payment_id"],
            "razorpay_signature": request.POST["razorpay_signature"],
        })

        return JsonResponse({"message": "Payment successful"})

    except Exception:
        return JsonResponse(
            {"message": "Payment verification failed"},
            status=400
        )