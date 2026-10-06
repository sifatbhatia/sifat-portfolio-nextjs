#!/usr/bin/env python3
"""Resize preview images to reasonable sizes for web."""
import os
import glob
from PIL import Image

BASE_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'assets', 'previews')

# Max widths for different use cases
HERO_MAX = 1920   # 2x for 960px desktop
CARD_MAX = 640    # 2x for 320px mobile cards

def process_image(path):
    try:
        img = Image.open(path)
        w, h = img.size
        basename = os.path.basename(path)
        dirname = os.path.dirname(path)
        name, ext = os.path.splitext(basename)
        ext = ext.lower()
        
        # Skip if already small
        if w <= CARD_MAX and h <= CARD_MAX * 2:
            return
        
        # Convert to RGB if necessary (for PNG with alpha)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        
        # Create hero size
        if w > HERO_MAX:
            ratio = HERO_MAX / w
            new_h = int(h * ratio)
            hero = img.resize((HERO_MAX, new_h), Image.LANCZOS)
            hero_path = os.path.join(dirname, f"{name}-1920{ext}")
            hero.save(hero_path, 'WEBP', quality=85, method=6)
            print(f"  Created {HERO_MAX}w: {hero_path}")
        
        # Create card size  
        if w > CARD_MAX:
            ratio = CARD_MAX / w
            new_h = int(h * ratio)
            card = img.resize((CARD_MAX, new_h), Image.LANCZOS)
            card_path = os.path.join(dirname, f"{name}-640{ext}")
            card.save(card_path, 'WEBP', quality=80, method=6)
            print(f"  Created {CARD_MAX}w: {card_path}")
        
        # Keep original for now (we'll switch references later)
        # Actually, let's overwrite the original with the hero size
        # to save space, since the 3840px version is never needed
        if w > HERO_MAX:
            img_resized = img.resize((HERO_MAX, int(h * HERO_MAX / w)), Image.LANCZOS)
            img_resized.save(path, 'WEBP', quality=85, method=6)
            print(f"  Resized original: {path} -> {HERO_MAX}w")
        
    except Exception as e:
        print(f"  ERROR processing {path}: {e}")

def main():
    print("Resizing preview images...")
    
    for root, dirs, files in os.walk(BASE_DIR):
        for f in files:
            if f.endswith(('.jpg', '.jpeg', '.png', '.webp')):
                path = os.path.join(root, f)
                # Skip already-resized files
                if '-1920.' in f or '-640.' in f:
                    continue
                print(f"Processing: {path}")
                process_image(path)
    
    print("\nDone!")

if __name__ == '__main__':
    main()
