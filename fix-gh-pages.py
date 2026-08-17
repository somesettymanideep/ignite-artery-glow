import re
import os
import glob

# Find the main bundle JS file
js_files = glob.glob('dist/client/assets/index-*.js')
if not js_files:
    print("Error: Could not find main bundle in dist/client/assets/")
    exit(1)

main_js = '/' + os.path.relpath(js_files[0], 'dist/client')
print(f"Found main JS bundle: {main_js}")

# Find the main CSS file
css_files = glob.glob('dist/client/assets/styles-*.css')
main_css = '/' + os.path.relpath(css_files[0], 'dist/client') if css_files else None
print(f"Found main CSS bundle: {main_css}")

index_path = 'index.html'
with open(index_path, 'r') as f:
    content = f.read()

# Replace the dev script with the production bundle
new_content = content.replace('src="/src/start.ts"', f'src="{main_js}"')

# Inject CSS if found and missing
if main_css and main_css not in new_content:
    new_content = new_content.replace('</head>', f'    <link rel="stylesheet" href="{main_css}">\n  </head>')

with open('dist/client/index.html', 'w') as f:
    f.write(new_content)
with open('dist/client/404.html', 'w') as f:
    f.write(new_content)
print("Successfully generated dist/client/index.html and dist/client/404.html")
