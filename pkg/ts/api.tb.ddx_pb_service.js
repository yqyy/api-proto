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

TbApiService.PublisherGet = {
  methodName: "PublisherGet",
  service: TbApiService,
  requestStream: false,
  responseStream: false,
  requestType: api_tb_ddx_pb.PublisherGetRequest,
  responseType: api_tb_ddx_pb.PublisherGetResponse
};

TbApiService.PublisherSave = {
  methodName: "PublisherSave",
  service: TbApiService,
  requestStream: false,
  responseStream: false,
  requestType: api_tb_ddx_pb.PublisherSaveRequest,
  responseType: api_tb_ddx_pb.PublisherSaveResponse
};

TbApiService.SyncOrderDetail = {
  methodName: "SyncOrderDetail",
  service: TbApiService,
  requestStream: false,
  responseStream: false,
  requestType: api_tb_ddx_pb.OrderDetailRequest,
  responseType: api_tb_ddx_pb.OrderDetailResponse
};

TbApiService.DecodeShortUrl = {
  methodName: "DecodeShortUrl",
  service: TbApiService,
  requestStream: false,
  responseStream: false,
  requestType: api_tb_ddx_pb.DecodeShortUrlRequest,
  responseType: api_tb_ddx_pb.DecodeShortUrlResponse
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

TbApiServiceClient.prototype.publisherGet = function publisherGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TbApiService.PublisherGet, {
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

TbApiServiceClient.prototype.publisherSave = function publisherSave(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TbApiService.PublisherSave, {
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

TbApiServiceClient.prototype.syncOrderDetail = function syncOrderDetail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TbApiService.SyncOrderDetail, {
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

TbApiServiceClient.prototype.decodeShortUrl = function decodeShortUrl(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TbApiService.DecodeShortUrl, {
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

