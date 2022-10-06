echo "****** deploy.sh start ****** "

npm install
mkdir tmp

zip -r ./tmp/api.zip api/ node_modules/ index.js package.json package-lock.json swagger.json .env

cd deployment

cd ..
rm -rf tmp/

echo "****** deploy.sh end ****** "