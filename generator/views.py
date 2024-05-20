from .serializers import UserSerializer
from django.http import JsonResponse
from django.contrib.auth.models import User  # Assuming User model from django.contrib.auth
import random
import string

def generate_random_clue_api(request):
    characters = string.ascii_letters + string.digits + "!@#$%&*"
    min_length, max_length = 8, 15  # Adjust minimum and maximum clue length as needed

    password = ''.join(random.choice(characters) for _ in range(random.randint(min_length, max_length)))

    # **Security:** Use Django's password validation or a secure library
    user = User.objects.create_user(username=f"clue_{random.randint(1000, 9999)}", password=password)
    # Consider using a password hashing library like bcrypt or Argon2 for improved security

    serializer = UserSerializer(user)  # Assuming UserSerializer is defined elsewhere

    return JsonResponse({'clue': serializer.data['password']})  # Return 'clue' instead of 'password'
