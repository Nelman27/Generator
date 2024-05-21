from django.http import JsonResponse
import random
import string


def GeneratePasswordView(requets):
    characters = string.ascii_letters + string.digits + "!@#$%&*"
    min_length, max_length = 8, 15  # Adjust minimum and maximum clue length as needed
    password = ''.join(random.choice(characters) for _ in range(random.randint(min_length, max_length)))
    response_data={'password':password}
    return JsonResponse(response_data)
       
