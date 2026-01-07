#!/bin/bash

# Create directory
mkdir -p "public/assets/images/outreaches/pulse_health_initiative"

# Copy all images
cp "2024:25/Outreach Reports - Extracted Files/community outreach 2/word/media/image"*.jpeg "public/assets/images/outreaches/pulse_health_initiative/"

# Verify
echo "Images copied. Files in directory:"
ls -lh "public/assets/images/outreaches/pulse_health_initiative/"

