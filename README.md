# blockchain_project

To download this project:

$ git clone https://github.com/VishalTalatii/blockchain_project

To install the dependencies (web3, express, etc):

$npm install

To run the code :s

$node method.js


Docker
To build a docker container from your Dockerfile (and .dockerignore) files (note by default it uses the file called Dockerfile)

$docker build -t [user/tag] .


To validate that your docker image is available

$docker images

To see your running containers

$docker ps

Finally, to run your docker container (validate it's running by seeing your running containers)

$docker run -p 3002:8080 --name nci -d vishal/bchainlab

To publish the docker image to docker hub 

$docker commit containerid docker-userid/imagename:tag

to push the docker image from locally to dockerhub

$docker push docker-userid/imagename:tag
