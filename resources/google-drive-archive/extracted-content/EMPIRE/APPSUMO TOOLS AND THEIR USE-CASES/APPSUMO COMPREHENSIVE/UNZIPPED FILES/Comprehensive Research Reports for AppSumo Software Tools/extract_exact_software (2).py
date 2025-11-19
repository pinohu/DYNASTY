import csv
import re

# Read the CSV file and extract unique product names
unique_products = set()

with open('/home/ubuntu/upload/tigertail-product-list-05-05-2025.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.DictReader(file)
    for row in csv_reader:
        product_name = row['Product name'].strip()
        if product_name and product_name != 'Product name':  # Skip header and empty rows
            unique_products.add(product_name)

# Sort the products alphabetically
sorted_products = sorted(list(unique_products))

# Write to file
with open('/home/ubuntu/appsumo_research/exact_software_list.txt', 'w', encoding='utf-8') as file:
    for i, product in enumerate(sorted_products, 1):
        file.write(f"{i}. {product}\n")

print(f"Extracted {len(sorted_products)} unique software applications:")
for i, product in enumerate(sorted_products[:20], 1):  # Show first 20
    print(f"{i}. {product}")

if len(sorted_products) > 20:
    print(f"... and {len(sorted_products) - 20} more applications")

# Also add the mentioned applications
additional_apps = ["vidBoard", "Vocable AI"]
print(f"\nAdditional applications mentioned: {', '.join(additional_apps)}")
print(f"\nTotal applications to research: {len(sorted_products) + len(additional_apps)}")

