from rembg import remove
from PIL import Image
import sys

input_path = sys.argv[1]
output_path = sys.argv[2]
try:
    with open(input_path, 'rb') as i:
        with open(output_path, 'wb') as o:
            input_data = i.read()
            output_data = remove(input_data)
            o.write(output_data)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
