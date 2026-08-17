import re
import os

index_path = 'index.html'
with open(index_path, 'r') as f:
    content = f.read()

# Replace src="/src/start.ts" with the production bundle entry
# We know from the build output that index-DX30GWCB.js is the main bundle.
# However, we want Vite to handle this automatically if possible, 
# but since we are manually copying the root index.html, we need to fix it.

# Actually, the best way is to ensure Vite processes index.html correctly.
# TanStack Start normally uses the template from its own internal logic.

new_content = content.replace('src="/src/start.ts"', 'src="/assets/index-DX30GWCB.js"')
# Also fix other potential absolute paths if they are not handled by VITE_BASE_PATH
# But for now, let's just fix the entry script.

with open('dist/client/index.html', 'w') as f:
    f.write(new_content)
with open('dist/client/404.html', 'w') as f:
    f.write(new_content)
