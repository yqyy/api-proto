// package: jdpb
// file: api.jd.ddx.proto

var api_jd_ddx_pb = require("./api.jd.ddx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var JdApiService = (function () {
  function JdApiService() {}
  JdApiService.serviceName = "jdpb.JdApiService";
  return JdApiService;
}());

JdApiService.PromotionByUnionID = {
  methodName: "PromotionByUnionID",
  service: JdApiService,
  requestStream: false,
  responseStream: false,
  requestType: api_jd_ddx_pb.PromotionByUnionIDRequest,
  responseType: api_jd_ddx_pb.PromotionByUnionIDResponse
};

exports.JdApiService = JdApiService;

function JdApiServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

JdApiServiceClient.prototype.promotionByUnionID = function promotionByUnionID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(JdApiService.PromotionByUnionID, {
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

exports.JdApiServiceClient = JdApiServiceClient;

