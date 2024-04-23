# Quarkus and Patternfly

This project uses quarkus to server as the server and patternfly to serve as the front end connecting to the server via REST calls.

The project has been split into two folders the server and webui and considered as modules for the sake of
builds and working with the two seperate development environments. I know
these can placed into a single folder structure but to keep the logic seperated
and simpler to see which framework is being used where I have kept them apart. Ultimately
the server could be deployed behind a load balancer acting as a facade or proxy into the real
server side logic. The webui would be served from a CDN or similar and will only
have the client static resources and javascript.

The server was created using the quarkus mechanism and the webui used the patternfly seed technique. Each folder has it's own readme
from those technologies but the readme informs you have to replicate the envirnment for yourself.

If you want to learn more about Quarkus, please visit its website: https://quarkus.io/ .
If you want to learn more about Patternfly , please visit its website: https://www.patternfly.org/v4/ .

## server

The server was created using the quarkus build technique and initial classes simialr to the 
technique as used in the blog: https://quarkus.io/blog/gui-react-patternfly/

to start the server in dev mode go to the server folder and type:

```shell script
mvn quarkus:dev
```
you can check you get data back by using the following commend
```shell script
curl http://localhost:8080/api/particles
```
## webui
This module is held within the webui folder

The client was created using the patternfly seed which gives us the example dashboard layout
with menu options down the left.

This can be started with 
```shell script
npm install
npm run start:dev
```
The npm install option downloads the patternfly node files along with the dependencies
into node_modules folder. The run command will start a browser session linking to the node dev server on port 9000

For the purpose of this demo I have added a route within routes.tsx that has a menu option called 'Posts'. 
I have also created a src/Pages/Posts.tsx file that makes a call to the api server
using REST. At the moment it displays a simple list of particles returned from the server.

## Areas of problems
 
During the development I had to overcome a number of problems:

### 1. CORS

As the server and the webui page delivery are on seperate ports I had to worry about CORS
and this maybe also true in production deployment but maybe not if a common server can service via proxy or similar the front end
amd the server pages on the same url. For me though I had to disable CORS in the quarkus
server for dev mode. You will see in the server/src/main/resources folder an application.properties file
that contains the code to disable CORS in dev mode.
```shell script
quarkus.http.cors=true
%dev.quarkus.http.cors.origins=/.*/
```

### 2. API references
In the webui code I needed a way to reference the server without hard coding it into the
web page itself, so I used a .env file in the root directory to set up environment variables
that can be read within the typescript code. \
```
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
```
All the urls for the REST calls are relative based off of this base url such as '/api/particles'.