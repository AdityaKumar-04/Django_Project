from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from .models import *
from .serializers import *
@csrf_exempt
@api_view(['GET'])
def get_items(request):
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)
@csrf_exempt
@api_view(['POST'])
def create_item(request):
    serializer = ItemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@csrf_exempt
@api_view(['PUT'])
def update_item(request, pk):
    item = Item.objects.get(id=pk)
    serializer = ItemSerializer(instance=item, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@csrf_exempt
@api_view(['DELETE'])
def delete_item(request, pk):
    item = Item.objects.get(id=pk)
    item.delete()
    return Response('Item deleted!')
