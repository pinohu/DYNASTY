#!/usr/bin/env python3

import re

# Read the complete software list
with open('complete_software_list.txt', 'r') as f:
    content = f.read()

# Extract software names from the numbered list
software_list = []
lines = content.split('\n')
for line in lines:
    if re.match(r'^\d+\.\s+', line):
        # Remove the number and period, clean up the name
        name = re.sub(r'^\d+\.\s+', '', line).strip()
        # Convert to lowercase and replace spaces/special chars with underscores for comparison
        normalized_name = re.sub(r'[^a-zA-Z0-9]+', '_', name.lower()).strip('_')
        software_list.append((name, normalized_name))

# Read completed research list
with open('completed_research.txt', 'r') as f:
    completed = set(line.strip() for line in f.readlines())

# Find remaining applications
remaining = []
for original_name, normalized_name in software_list:
    if normalized_name not in completed:
        remaining.append((original_name, normalized_name))

print(f"Total applications: {len(software_list)}")
print(f"Completed research: {len(completed)}")
print(f"Remaining to research: {len(remaining)}")
print("\nRemaining applications to research:")
print("=" * 50)

for i, (original_name, normalized_name) in enumerate(remaining, 1):
    print(f"{i:3d}. {original_name}")

# Save to file
with open('remaining_to_research.txt', 'w') as f:
    f.write("REMAINING APPLICATIONS TO RESEARCH\n")
    f.write("=" * 50 + "\n\n")
    for i, (original_name, normalized_name) in enumerate(remaining, 1):
        f.write(f"{i:3d}. {original_name} -> {normalized_name}\n")

print(f"\nRemaining applications saved to 'remaining_to_research.txt'")

