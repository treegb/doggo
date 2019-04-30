#!/usr/bin/env sh

set -e
# .Abort on errors

npm run build
# .Build

cd dist
# .Navigate into the build output directory

#echo 'www.example.com' > CNAME
# .If you are deploying to a custom domain

git init
git remote add origin https://github.com/treegb/doggo.git
# .This line works with comment id 190429m232925.
git add -A
git commit -m 'deploy'

#git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# .If you are deploying to https://<USERNAME>.github.io

#git push -f git@github.com:treegb/doggo.git master:gh-pages
# .If you are deploying to https://<USERNAME>.github.io/<REPO>
# .This line don't work, maybe because this line is abut ssh:
# https://stackoverflow.com/questions/18710120/the-authenticity-of-host-github-com-192-30-252-128-cant-be-established
# , and I should use https instead of ssh, so I shouldn't write syntax like this.

git push -f origin master:gh-pages
# .Comment id 190429m232925.

cd -
