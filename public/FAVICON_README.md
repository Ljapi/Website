# Favicon Setup Instructions

The following favicon files need to be created by resizing `favicon.jpg`:

## Required Files:

1. **favicon-32x32.png** - 32x32 pixels
2. **favicon-16x16.png** - 16x16 pixels  
3. **apple-touch-icon.png** - 180x180 pixels (recommended)
4. **favicon-192.png** - 192x192 pixels
5. **favicon-512.png** - 512x512 pixels

## How to Create:

You can use any image editor (Photoshop, GIMP, online tools) to resize `favicon.jpg` to these dimensions and save as PNG format.

### Online Tools:
- https://www.favicon-generator.org/
- https://realfavicongenerator.net/
- https://favicon.io/

### Using ImageMagick (if installed):
```bash
magick convert favicon.jpg -resize 32x32 favicon-32x32.png
magick convert favicon.jpg -resize 16x16 favicon-16x16.png
magick convert favicon.jpg -resize 180x180 apple-touch-icon.png
magick convert favicon.jpg -resize 192x192 favicon-192.png
magick convert favicon.jpg -resize 512x512 favicon-512.png
```

Once these files are created, the favicon system will be fully functional across all platforms.

