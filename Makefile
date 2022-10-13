run:
	docker run -dp 8000:5000 --name flask-app flask-app 

build:
	docker build --rm --tag=flask-app .
	docker image prune -f

clean:
	docker stop flask-app
	docker rm flask-app