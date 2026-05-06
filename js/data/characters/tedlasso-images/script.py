import cv2
import numpy as np
from PIL import Image
import os

INPUT_DIR = "raw_images"
OUTPUT_DIR = "processed_faces"
os.makedirs(OUTPUT_DIR, exist_ok=True)

face_cascade = cv2.CascadeClassifier(
    cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
)

VALID_EXTENSIONS = (".jpg", ".jpeg", ".png", ".webp")

def process_local_image(input_path, output_name):
    try:
        img = Image.open(input_path).convert("RGB")
        img_np = np.array(img)

        gray = cv2.cvtColor(img_np, cv2.COLOR_RGB2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3, 5)

        if len(faces) == 0:
            print(f"No face found, fallback crop: {output_name}")
            crop = img
        else:
            x, y, w, h = max(faces, key=lambda f: f[2] * f[3])

            padding = int(0.35 * h)
            x1 = max(x - padding, 0)
            y1 = max(y - padding, 0)
            x2 = min(x + w + padding, img_np.shape[1])
            y2 = min(y + h + padding, img_np.shape[0])

            crop = img.crop((x1, y1, x2, y2))

        size = max(crop.size)
        square = Image.new("RGB", (size, size), (0, 0, 0))
        square.paste(crop, ((size - crop.size[0]) // 2, (size - crop.size[1]) // 2))

        final = square.resize((150, 150), Image.LANCZOS)
        final.save(os.path.join(OUTPUT_DIR, f"{output_name}.png"))

        print(f"Processed: {output_name}")

    except Exception as e:
        print(f"Error processing {output_name}: {e}")

for filename in os.listdir(INPUT_DIR):
    if filename.lower().endswith(VALID_EXTENSIONS):
        input_path = os.path.join(INPUT_DIR, filename)
        output_name = os.path.splitext(filename)[0]
        process_local_image(input_path, output_name)