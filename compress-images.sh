#!/bin/bash
# Wallantq Image Compressor — converts 37 MB PNGs → ~600 KB AVIF
# Output folder: ~/Downloads/wallantq-avif/
# After running: upload all .avif files to Hostinger at
#   public_html/assets/wallantq/AVIF/

BASE_URL="https://wallantq.com/assets/wallantq/PNG"
OUT_DIR="$HOME/Downloads/wallantq-avif"
mkdir -p "$OUT_DIR"

SKUS=(
  WMNXMF27
  WMNXMF16
  WMNXMF02
  WMNXMF05
  WMNXMF17
  WMNXMF19
  WMNXMF22
  WMNXMF26
  WMNXMF39
  WINXMF00
  WINXMF01
  WINXMF02
  WINXMF03
  WINXMF04
  WANXMF05
  WMNXMF27_sq
)

echo "Converting ${#SKUS[@]} images to AVIF (1400px)..."
echo ""

TOTAL_BEFORE=0
TOTAL_AFTER=0

for SKU in "${SKUS[@]}"; do
  SRC_URL="$BASE_URL/${SKU}.png"
  TMP_PNG="/tmp/wq_${SKU}.png"
  OUT_FILE="$OUT_DIR/${SKU}.avif"

  echo -n "  $SKU ... "

  curl -s -o "$TMP_PNG" "$SRC_URL"
  if [ ! -f "$TMP_PNG" ] || [ ! -s "$TMP_PNG" ]; then
    echo "SKIP (not found on server)"
    continue
  fi

  BEFORE=$(wc -c < "$TMP_PNG")
  TOTAL_BEFORE=$((TOTAL_BEFORE + BEFORE))

  # Resize to 1400px max, convert to AVIF (preserves transparency)
  sips -Z 1400 -s format avif "$TMP_PNG" --out "$OUT_FILE" > /dev/null 2>&1

  AFTER=$(wc -c < "$OUT_FILE")
  TOTAL_AFTER=$((TOTAL_AFTER + AFTER))

  BEFORE_MB=$(echo "scale=1; $BEFORE/1048576" | bc)
  AFTER_KB=$(echo "scale=0; $AFTER/1024" | bc)
  PCT=$(echo "scale=0; $AFTER*100/$BEFORE" | bc)

  echo "${BEFORE_MB} MB  →  ${AFTER_KB} KB  (${PCT}% of original)"

  rm -f "$TMP_PNG"
done

echo ""
BEFORE_MB=$(echo "scale=0; $TOTAL_BEFORE/1048576" | bc)
AFTER_MB=$(echo "scale=1; $TOTAL_AFTER/1048576" | bc)
echo "Total before: ${BEFORE_MB} MB"
echo "Total after:  ${AFTER_MB} MB"
echo ""
echo "Files saved to: $OUT_DIR"
echo ""
echo "═══════════════════════════════════════════════"
echo "  NEXT STEP — upload to Hostinger:"
echo "  File Manager → public_html/assets/wallantq/"
echo "  Create folder:  AVIF"
echo "  Upload all .avif files from $OUT_DIR into it"
echo "═══════════════════════════════════════════════"
