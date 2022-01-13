build: build-webapp

build-wasm:
	@wasm-pack build --target web -s sha256-wasm-benchmarks --release wasm

link:
	@yarn --cwd webapp
	@yarn link --cwd wasm/pkg
	@yarn link --cwd webapp @sha256-wasm-benchmarks/wasm

build-webapp: build-wasm link
	@yarn --cwd webapp build
	@echo 
	@echo ---
	@echo Webapp assets available at webapp/dist.

serve: build-wasm link
	@yarn --cwd webapp dev
