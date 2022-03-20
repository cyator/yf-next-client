dev-build:
	docker build \
	-t yf-next-client-dev:0.0.0 \
	-f Dockerfile.dev .

staging-build:
	docker build \
	-t yf-next-client:0.0.0 \
	--build-arg BASE_URL=http://localhost:5000 \
	.
