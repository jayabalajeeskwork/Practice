import razorpay
from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import render

client = razorpay.Client(
    auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
)


def payment_page(request):
    return render(request, "payment.html")


def create_order(request):

    order = client.order.create({
        "amount": 10000,       # ₹100
        "currency": "INR",
        "payment_capture": 1 
    })

    return JsonResponse({
        "order_id": order["id"],
        "amount": order["amount"],
        "key": settings.RAZORPAY_KEY_ID
    })


def payment_success(request):

    data = request.POST

    try:
        client.utility.verify_payment_signature({
            "razorpay_order_id": data["razorpay_order_id"],
            "razorpay_payment_id": data["razorpay_payment_id"],
            "razorpay_signature": data["razorpay_signature"]
        })

        return JsonResponse({
            "success": True,
            "message": "Payment successful"
        })

    except:
        return JsonResponse({
            "success": False,
            "message": "Payment verification failed"
        })