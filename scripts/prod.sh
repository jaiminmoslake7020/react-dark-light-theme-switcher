npm run playground:build
# echo "${{ github.ref_name }}-${{ github.sha }}" > ./out/version.txt
node ./scripts/readJson.js package.json
netlify deploy --prod
