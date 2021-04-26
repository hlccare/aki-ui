rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin git@github.com:hlccare/aki-ui-website.git &&
git push -f -u origin main &&
cd - &&
echo https://hlccare.github.io/aki-ui-website/index.html