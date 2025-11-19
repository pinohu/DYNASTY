#!/usr/bin/env python3
"""
AI Agent Life Operating System - Tool Inventory Analysis
Analyzes the CSV data to extract all unique active tools and their details
"""

import pandas as pd
import json
from collections import defaultdict

def analyze_tool_inventory():
    """Analyze the CSV file to extract unique active tools"""
    
    # Read the CSV file
    df = pd.read_csv('/home/ubuntu/upload/tigertail-product-list-05-05-2025(1).csv')
    
    print("=== APPSUMO TOOL INVENTORY ANALYSIS ===")
    print(f"Total records in CSV: {len(df)}")
    
    # Filter for activated and redeemed tools
    active_tools = df[df['Status'].isin(['activated', 'redeemed'])]
    print(f"Total active/redeemed records: {len(active_tools)}")
    
    # Get unique tools
    unique_tools = active_tools['Product name'].unique()
    print(f"Unique active tools: {len(unique_tools)}")
    
    # Create detailed tool inventory
    tool_inventory = {}
    
    for tool in unique_tools:
        tool_data = active_tools[active_tools['Product name'] == tool]
        
        # Get all plan types for this tool
        plans = tool_data['Plan name'].unique()
        
        # Get purchase and activation dates
        purchase_dates = tool_data['Purchase date'].tolist()
        redeem_dates = tool_data['Redeem date'].dropna().tolist()
        
        tool_inventory[tool] = {
            'plans': plans.tolist(),
            'total_licenses': len(tool_data),
            'purchase_dates': purchase_dates,
            'redeem_dates': redeem_dates,
            'status_breakdown': tool_data['Status'].value_counts().to_dict()
        }
    
    # Sort tools alphabetically
    sorted_tools = sorted(tool_inventory.keys())
    
    # Create comprehensive report
    report = {
        'summary': {
            'total_records': len(df),
            'active_records': len(active_tools),
            'unique_tools': len(unique_tools),
            'analysis_date': '2025-07-08'
        },
        'tools': tool_inventory
    }
    
    # Save detailed JSON report
    with open('/home/ubuntu/ai_agent_system/analysis/tool_inventory.json', 'w') as f:
        json.dump(report, f, indent=2, default=str)
    
    # Create markdown summary
    with open('/home/ubuntu/ai_agent_system/analysis/tool_inventory_summary.md', 'w') as f:
        f.write("# AI Agent Life Operating System - Tool Inventory\n\n")
        f.write(f"**Analysis Date:** July 8, 2025\n\n")
        f.write(f"**Total AppSumo Purchases:** {len(df)}\n")
        f.write(f"**Active/Redeemed Tools:** {len(active_tools)}\n")
        f.write(f"**Unique Active Tools:** {len(unique_tools)}\n\n")
        
        f.write("## Complete Tool List (Alphabetical)\n\n")
        for i, tool in enumerate(sorted_tools, 1):
            data = tool_inventory[tool]
            f.write(f"{i}. **{tool}**\n")
            f.write(f"   - Licenses: {data['total_licenses']}\n")
            f.write(f"   - Plans: {', '.join(data['plans'])}\n")
            f.write(f"   - Status: {data['status_breakdown']}\n\n")
    
    print(f"\n=== TOOL CATEGORIES DETECTED ===")
    
    # Categorize tools by name patterns
    categories = {
        'AI & Intelligence': [],
        'Automation & Workflow': [],
        'Communication & CRM': [],
        'Content & Media': [],
        'Development & Integration': [],
        'Analytics & Optimization': [],
        'Lead Generation & Sales': [],
        'E-commerce & Marketing': [],
        'Design & Creative': [],
        'Other': []
    }
    
    # Basic categorization based on tool names and common patterns
    for tool in sorted_tools:
        tool_lower = tool.lower()
        
        if any(keyword in tool_lower for keyword in ['ai', 'gpt', 'neural', 'intelligence', 'smart', 'auto']):
            categories['AI & Intelligence'].append(tool)
        elif any(keyword in tool_lower for keyword in ['flow', 'magic', 'automation', 'workflow', 'process']):
            categories['Automation & Workflow'].append(tool)
        elif any(keyword in tool_lower for keyword in ['crm', 'chat', 'call', 'sms', 'communication', 'messenger']):
            categories['Communication & CRM'].append(tool)
        elif any(keyword in tool_lower for keyword in ['video', 'content', 'writer', 'media', 'studio', 'creator']):
            categories['Content & Media'].append(tool)
        elif any(keyword in tool_lower for keyword in ['code', 'api', 'dev', 'backend', 'frontend', 'graphql']):
            categories['Development & Integration'].append(tool)
        elif any(keyword in tool_lower for keyword in ['analytics', 'report', 'data', 'metric', 'insight']):
            categories['Analytics & Optimization'].append(tool)
        elif any(keyword in tool_lower for keyword in ['lead', 'sales', 'conversion', 'prospect']):
            categories['Lead Generation & Sales'].append(tool)
        elif any(keyword in tool_lower for keyword in ['marketing', 'ads', 'social', 'campaign', 'promotion']):
            categories['E-commerce & Marketing'].append(tool)
        elif any(keyword in tool_lower for keyword in ['design', 'creative', 'visual', 'graphic', 'brand']):
            categories['Design & Creative'].append(tool)
        else:
            categories['Other'].append(tool)
    
    # Print category breakdown
    for category, tools in categories.items():
        if tools:
            print(f"\n{category}: {len(tools)} tools")
            for tool in tools[:5]:  # Show first 5 tools in each category
                print(f"  - {tool}")
            if len(tools) > 5:
                print(f"  ... and {len(tools) - 5} more")
    
    return sorted_tools, tool_inventory

if __name__ == "__main__":
    tools, inventory = analyze_tool_inventory()
    print(f"\n=== ANALYSIS COMPLETE ===")
    print(f"Unique tools identified: {len(tools)}")
    print("Files created:")
    print("- /home/ubuntu/ai_agent_system/analysis/tool_inventory.json")
    print("- /home/ubuntu/ai_agent_system/analysis/tool_inventory_summary.md")

