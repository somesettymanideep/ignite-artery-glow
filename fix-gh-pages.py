import re
import os
import glob
import shutil

# 1. Clear previous build if any to avoid stale assets
dist_dir = 'dist/client'
assets_dir = os.path.join(dist_dir, 'assets')

# Find the main bundle JS file
# TanStack Start / Vite typically names it index-[hash].js
js_files = glob.glob(os.path.join(assets_dir, 'index-*.js'))
if not js_files:
    print("Error: Could not find main bundle in dist/client/assets/")
    # List files to help debug
    if os.path.exists(assets_dir):
        print(f"Contents of {assets_dir}:")
        print(os.listdir(assets_dir))
    else:
        print(f"Directory {assets_dir} does not exist.")
    exit(1)

# Sort by mtime to get the latest if multiple exist
js_files.sort(key=os.path.getmtime, reverse=True)
main_js_rel = os.path.relpath(js_files[0], dist_dir)
main_js = '/' + main_js_rel
print(f"Found main JS bundle: {main_js}")

# Find the main CSS file
css_files = glob.glob(os.path.join(assets_dir, 'styles-*.css'))
main_css = None
if css_files:
    css_files.sort(key=os.path.getmtime, reverse=True)
    main_css_rel = os.path.relpath(css_files[0], dist_dir)
    main_css = '/' + main_css_rel
    print(f"Found main CSS bundle: {main_css}")

index_template_path = 'index.html'
with open(index_template_path, 'r') as f:
    content = f.read()

# Replace the dev script with the production bundle
# We look for /src/start.ts or src/start.ts
new_content = content.replace('src="/src/start.ts"', f'src="{main_js}"')
new_content = new_content.replace('src="src/start.ts"', f'src="{main_js}"')

# Inject CSS if found and missing
if main_css and main_css not in new_content:
    if '</head>' in new_content:
        new_content = new_content.replace('</head>', f'    <link rel="stylesheet" href="{main_css}">\n  </head>')
    else:
        # Fallback if no </head> tag
        new_content = new_content + f'\n<link rel="stylesheet" href="{main_css}">'

# Write index.html and 404.html to the build output
with open(os.path.join(dist_dir, 'index.html'), 'w') as f:
    f.write(new_content)
with open(os.path.join(dist_dir, '404.html'), 'w') as f:
    f.write(new_content)

# Create .nojekyll to prevent GitHub Pages from ignoring files starting with underscores (like Supabase folders if any)
with open(os.path.join(dist_dir, '.nojekyll'), 'w') as f:
    f.write('')

print(f"Successfully generated {dist_dir}/index.html, {dist_dir}/404.html and .nojekyll")
