import csv
import re

# Read the CSV file and extract unique product names
unique_products = set()

with open('/home/ubuntu/upload/tigertail-product-list-05-05-2025(1).csv', 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    for row in reader:
        product_name = row['Product name'].strip()
        # Skip AppSumo Plus plans and other non-software items
        if not any(skip in product_name.lower() for skip in ['appsumo plus', 'digital download', 'masterclass', 'journal']):
            unique_products.add(product_name)

# Add the additional tools mentioned by the user
additional_tools = ['vidBoard', 'Vocable AI']
for tool in additional_tools:
    unique_products.add(tool)

# Sort the products alphabetically
sorted_products = sorted(list(unique_products))

print(f"Total unique software applications: {len(sorted_products)}")
print("\nUnique Software Applications:")
print("=" * 50)

for i, product in enumerate(sorted_products, 1):
    print(f"{i:3d}. {product}")

# Save to file
with open('/home/ubuntu/appsumo_research/software_list.txt', 'w', encoding='utf-8') as f:
    f.write(f"Total unique software applications: {len(sorted_products)}\n\n")
    for i, product in enumerate(sorted_products, 1):
        f.write(f"{i:3d}. {product}\n")

print(f"\nList saved to software_list.txt")

