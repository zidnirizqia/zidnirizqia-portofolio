import os
import subprocess
from PIL import Image

def generate_svg():
    svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <!-- Gradient for Monogram Z -->
    <linearGradient id="z-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f5ff" />
      <stop offset="45%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>

    <!-- Border highlight gradient -->
    <linearGradient id="border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f5ff" stop-opacity="0.6" />
      <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0.5" />
    </linearGradient>

    <!-- Center radial glow -->
    <radialGradient id="ambient-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00f5ff" stop-opacity="0.3" />
      <stop offset="50%" stop-color="#2563eb" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#050811" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Deep Dark Slate Background Container -->
  <rect width="512" height="512" rx="124" fill="#060913" />

  <!-- Ambient Glow Behind Monogram -->
  <circle cx="256" cy="256" r="220" fill="url(#ambient-glow)" />

  <!-- Subtle Hi-Tech Border -->
  <rect width="502" height="502" x="5" y="5" rx="120" fill="none" stroke="url(#border-grad)" stroke-width="7" />

  <!-- Inner subtle outline ring -->
  <rect width="478" height="478" x="17" y="17" rx="110" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="2" />

  <!-- Monogram Z: Bold, sleek, high-contrast geometric form -->
  <path d="M 124 136 L 388 136 C 396.8 136 404 143.2 404 152 L 404 196 C 404 201.2 401.4 206 397 209.5 L 217 352 L 388 352 C 396.8 352 404 359.2 404 368 L 404 416 C 404 424.8 396.8 432 388 432 L 124 432 C 115.2 432 108 424.8 108 416 L 108 372 C 108 366.8 110.6 362 115 358.5 L 295 216 L 124 216 C 115.2 216 108 208.8 108 200 L 108 152 C 108 143.2 115.2 136 124 136 Z" 
        fill="url(#z-grad)" />

  <!-- Sleek Top-Left Specular Sheen on Z -->
  <path d="M 124 136 L 388 136 C 396.8 136 404 143.2 404 152 L 404 164 C 360 164 160 164 108 164 L 108 152 C 108 143.2 115.2 136 124 136 Z" 
        fill="#ffffff" 
        opacity="0.22" />
</svg>"""
    return svg_content

def main():
    os.makedirs("public", exist_ok=True)
    svg_code = generate_svg()
    
    svg_path = os.path.abspath("public/favicon.svg")
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(svg_code)
    print("Saved SVG:", svg_path)

    # HTML render wrapper
    html_content = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  html, body {{ width: 512px; height: 512px; background: transparent; overflow: hidden; }}
  img {{ width: 512px; height: 512px; display: block; }}
</style>
</head>
<body>
  <img src="favicon.svg" />
</body>
</html>"""

    html_path = os.path.abspath("public/_render_icon.html")
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)

    edge_cmd = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    out_512 = os.path.abspath("public/icon-512x512.png")
    
    cmd = [
        edge_cmd,
        "--headless",
        "--disable-gpu",
        "--hide-scrollbars",
        "--default-background-color=00000000",
        f"--window-size=512,512",
        f"--screenshot={out_512}",
        f"file:///{html_path.replace(os.sep, '/')}"
    ]
    
    subprocess.run(cmd, check=True)
    print("Rendered 512x512 PNG:", out_512)

    # Generate downscaled crisp icons using Pillow with Lanczos resampling
    img = Image.open(out_512).convert("RGBA")
    
    # 192x192
    img_192 = img.resize((192, 192), Image.Resampling.LANCZOS)
    img_192.save("public/icon-192x192.png")
    print("Saved 192x192")

    # 180x180 (Apple Touch Icon)
    img_180 = img.resize((180, 180), Image.Resampling.LANCZOS)
    img_180.save("public/apple-touch-icon.png")
    print("Saved apple-touch-icon.png")

    # 32x32
    img_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
    img_32.save("public/icon-32x32.png")
    print("Saved 32x32")

    # 16x16
    img_16 = img.resize((16, 16), Image.Resampling.LANCZOS)
    img_16.save("public/icon-16x16.png")
    print("Saved 16x16")

    # Multi-resolution favicon.ico containing 16x16, 32x32, 48x48, 64x64, 128x128, 256x256
    img.save(
        "public/favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    )
    print("Saved multi-size favicon.ico")

    # Cleanup temp render HTML
    if os.path.exists(html_path):
        os.remove(html_path)

if __name__ == "__main__":
    main()
