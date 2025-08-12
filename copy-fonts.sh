#!/bin/bash
# Kopiert Fonts und CSS aus node_modules in die lokalen assets-Ordner für Jekyll

set -e

# Zielverzeichnisse anlegen
mkdir -p assets/fonts assets/css

# Font Awesome CSS und Webfonts
cp node_modules/@fortawesome/fontawesome-free/css/all.min.css assets/css/fontawesome.min.css
cp node_modules/@fortawesome/fontawesome-free/webfonts/fa-*.woff2 assets/webfonts/

# Inter Fonts (woff2)
cp node_modules/@fontsource/inter/files/*.woff2 assets/fonts/
# Montserrat Fonts (woff2)
cp node_modules/@fontsource/montserrat/files/*.woff2 assets/fonts/

# Inter CSS (optional, falls du eigene @font-face schreiben willst, nicht nötig)
# cp node_modules/@fontsource/inter/index.css assets/css/inter.css
# Montserrat CSS (optional)
# cp node_modules/@fontsource/montserrat/index.css assets/css/montserrat.css

echo "Alle Fonts und CSS wurden in assets/ kopiert."
