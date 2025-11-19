#!/usr/bin/env python3

import csv
import os

# Read the user's product list CSV
owned_products = set()

with open('/home/ubuntu/upload/tigertail-product-list-05-05-2025(1).csv', 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    for row in reader:
        product_name = row['Product name'].strip()
        if product_name:
            owned_products.add(product_name)

# Convert to sorted list
owned_products_list = sorted(list(owned_products))

print(f"Total unique products owned: {len(owned_products_list)}")
print("\nOwned products:")
for i, product in enumerate(owned_products_list, 1):
    print(f"{i:3d}. {product}")

# Save to file
with open('/home/ubuntu/appsumo_research/owned_products.txt', 'w', encoding='utf-8') as f:
    for product in owned_products_list:
        f.write(f"{product}\n")

# Check which ones have been researched already
researched_files = []
for filename in os.listdir('/home/ubuntu/appsumo_research/'):
    if filename.endswith('_research.md'):
        researched_files.append(filename.replace('_research.md', ''))

# Convert research file names to match product names
def normalize_name(name):
    return name.lower().replace(' ', '_').replace('-', '_').replace(':', '').replace('&', 'and').replace('.', '').replace('(', '').replace(')', '').replace(',', '').replace("'", '').replace('"', '').replace('!', '').replace('?', '').replace('❤️', '').replace('⭐', '').replace('😁', '')

researched_normalized = {normalize_name(name): name for name in researched_files}
owned_normalized = {normalize_name(name): name for name in owned_products_list}

researched_owned = []
not_researched_owned = []

for norm_name, original_name in owned_normalized.items():
    if norm_name in researched_normalized:
        researched_owned.append(original_name)
    else:
        not_researched_owned.append(original_name)

print(f"\n\nOWNED PRODUCTS ALREADY RESEARCHED: {len(researched_owned)}")
for product in sorted(researched_owned):
    print(f"✓ {product}")

print(f"\n\nOWNED PRODUCTS NOT YET RESEARCHED: {len(not_researched_owned)}")
for i, product in enumerate(sorted(not_researched_owned), 1):
    print(f"{i:3d}. {product}")

# Save the not researched list
with open('/home/ubuntu/appsumo_research/owned_products_not_researched.txt', 'w', encoding='utf-8') as f:
    for product in sorted(not_researched_owned):
        f.write(f"{product}\n")

print(f"\n\nSUMMARY:")
print(f"Total owned products: {len(owned_products_list)}")
print(f"Already researched: {len(researched_owned)}")
print(f"Still need research: {len(not_researched_owned)}")

