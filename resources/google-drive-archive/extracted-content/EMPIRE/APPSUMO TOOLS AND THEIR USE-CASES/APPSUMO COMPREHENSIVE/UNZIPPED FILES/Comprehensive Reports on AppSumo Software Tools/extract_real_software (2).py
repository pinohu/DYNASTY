import csv
import re

# Read the CSV and extract unique software names
software_names = set()
with open('/home/ubuntu/upload/tigertail-product-list-05-05-2025.csv', 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    for row in reader:
        product_name = row.get('Product name', '').strip()
        if product_name and not any(skip in product_name.lower() for skip in [
            'appsumo plus', 'digital download', 'masterclass', 'template', 'canva'
        ]):
            # Clean up the product name
            clean_name = re.sub(r'\s*-.*', '', product_name)  # Remove everything after dash
            clean_name = re.sub(r'\s*\(.*?\)\s*', '', clean_name)  # Remove parentheses content
            clean_name = clean_name.strip()
            if clean_name and len(clean_name) > 2:
                software_names.add(clean_name)

# Sort and print all software names
sorted_names = sorted(list(software_names))
print(f'Total unique software applications: {len(sorted_names)}')
print()

# Save to file
with open('/home/ubuntu/appsumo_research/real_software_list.txt', 'w') as f:
    for i, name in enumerate(sorted_names, 1):
        line = f'{i:3d}. {name}'
        print(line)
        f.write(line + '\n')

print(f'\nList saved to real_software_list.txt')

# Also add the mentioned ones that might not be in CSV
additional_apps = ['vidBoard', 'Vocable AI']
print(f'\nAdditional apps mentioned: {additional_apps}')

