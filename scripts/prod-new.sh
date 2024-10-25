npm run playground:build
# echo "$1" > ./out/version.txt
node ./scripts/readJson.js package.json
netlify deploy --prod --dir=out
