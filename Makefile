GOPATH:=$(shell go env GOPATH)
export GO111MODULE=on
export GOPROXY=https://goproxy.io,direct

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

.PHONY: go
go:
	for f in proto/*.proto; do \
		protoc --proto_path=proto --go_out=pkg --go-grpc_out=pkg $$f; \
		echo compiled: $$f; \
	done

.PHONY: ts
ts:
	for f in proto/*.proto; do \
		protoc --proto_path=proto --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--js_out="import_style=commonjs,binary:pkg/ts" --ts_out=service=grpc-web:pkg/ts $$f; \
		echo compiled: $$f; \
	done
