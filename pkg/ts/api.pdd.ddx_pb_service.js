// package: pddxpb
// file: api.pdd.ddx.proto

var api_pdd_ddx_pb = require("./api.pdd.ddx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PddApiService = (function () {
  function PddApiService() {}
  PddApiService.serviceName = "pddxpb.PddApiService";
  return PddApiService;
}());

PddApiService.AuthorityQuery = {
  methodName: "AuthorityQuery",
  service: PddApiService,
  requestStream: false,
  responseStream: false,
  requestType: api_pdd_ddx_pb.AuthorityQueryRequest,
  responseType: api_pdd_ddx_pb.AuthorityQueryResponse
};

PddApiService.CreateMarketingURL = {
  methodName: "CreateMarketingURL",
  service: PddApiService,
  requestStream: false,
  responseStream: false,
  requestType: api_pdd_ddx_pb.CreateMarketingURLRequest,
  responseType: api_pdd_ddx_pb.CreateMarketingURLResponse
};

PddApiService.URLConvert = {
  methodName: "URLConvert",
  service: PddApiService,
  requestStream: false,
  responseStream: false,
  requestType: api_pdd_ddx_pb.URLConvertRequest,
  responseType: api_pdd_ddx_pb.URLConvertResponse
};

exports.PddApiService = PddApiService;

function PddApiServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PddApiServiceClient.prototype.authorityQuery = function authorityQuery(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PddApiService.AuthorityQuery, {
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

PddApiServiceClient.prototype.createMarketingURL = function createMarketingURL(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PddApiService.CreateMarketingURL, {
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

PddApiServiceClient.prototype.uRLConvert = function uRLConvert(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PddApiService.URLConvert, {
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

exports.PddApiServiceClient = PddApiServiceClient;

