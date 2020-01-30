npm run build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:bigciba/Dota2-API-Vuepress.git master:gh-pages