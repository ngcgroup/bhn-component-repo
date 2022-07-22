https://github.com/austincunningham/keycloak-express
https://github.com/keycloak/keycloak-quickstarts/blob/latest/service-nodejs/app.js


openssl req -nodes -new -x509 -keyout server.key -out server.cert
openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout server.key \
    -new \
    -out server.crt \
    -subj /CN=designsystem.internal.bhn \
    -sha256 \
    -out server.crt
  
  kubectl create secret tls designsystem-express-cert \
    --cert=server.crt \
    --key=server.key \
    --namespace designsystem
    