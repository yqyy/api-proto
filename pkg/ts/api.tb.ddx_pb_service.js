// package: tbpb
// file: api.tb.ddx.proto

var api_tb_ddx_pb = require("./api.tb.ddx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TbApiService = (function () {
  function TbApiService() {}
  TbApiService.serviceName = "tbpb.TbApiService";
  return TbApiService;
}());

TbApiService.SearchGoods = {
  methodName: "SearchGoods",
  service: TbApiService,
  requestStream: false,
  responseStream: false,
  requestType: api_tb_ddx_pb.SearchGoodsRequest,
  responseType: api_tb_ddx_pb.SearchGoodsResponse
};

TbApiService.PromoteByID = {
  methodName: "PromoteByID",
  service: TbApiService,
  requestStream: false,
  responseStream: false,
  requestType: api_tb_ddx_pb.PromoteURLByIDRequest,
  responseType: api_tb_ddx_pb.PromoteURLResponse
};

TbApiService.PromoteByTKL = {
  methodName: "PromoteByTKL",
  service: TbApiService,
  requestStream: false,
  responseStream: false,
  requestType: api_tb_ddx_pb.PromoteURLByTKLRequest,
  responseType: api_tb_ddx_pb.PromoteURLResponse
};

exports.TbApiService = TbApiService;

function TbApiServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TbApiServiceClient.prototype.searchGoods = function searchGoods(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TbApiService.SearchGoods, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TbApiServiceClient.prototype.promoteByID = function promoteByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TbApiService.PromoteByID, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TbApiServiceClient.prototype.promoteByTKL = function promoteByTKL(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TbApiService.PromoteByTKL, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.TbApiServiceClient = TbApiServiceClient;

