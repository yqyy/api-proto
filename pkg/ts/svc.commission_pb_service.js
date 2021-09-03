// package: commspb
// file: svc.commission.proto

var svc_commission_pb = require("./svc.commission_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CommissionService = (function () {
  function CommissionService() {}
  CommissionService.serviceName = "commspb.CommissionService";
  return CommissionService;
}());

CommissionService.UserBindOrder = {
  methodName: "UserBindOrder",
  service: CommissionService,
  requestStream: false,
  responseStream: false,
  requestType: svc_commission_pb.UserBindOrderReq,
  responseType: svc_commission_pb.UserBindOrderRes
};

CommissionService.UserBindPhone = {
  methodName: "UserBindPhone",
  service: CommissionService,
  requestStream: false,
  responseStream: false,
  requestType: svc_commission_pb.UserBindPhoneReq,
  responseType: svc_commission_pb.UserBindPhoneRes
};

CommissionService.UserGetOrders = {
  methodName: "UserGetOrders",
  service: CommissionService,
  requestStream: false,
  responseStream: false,
  requestType: svc_commission_pb.UserGetOrdersReq,
  responseType: svc_commission_pb.UserGetOrdersRes
};

CommissionService.UserQueryBalance = {
  methodName: "UserQueryBalance",
  service: CommissionService,
  requestStream: false,
  responseStream: false,
  requestType: svc_commission_pb.UserQueryBalanceReq,
  responseType: svc_commission_pb.UserQueryBalanceRes
};

CommissionService.UserWithdrawMoney = {
  methodName: "UserWithdrawMoney",
  service: CommissionService,
  requestStream: false,
  responseStream: false,
  requestType: svc_commission_pb.UserDrawMoneyReq,
  responseType: svc_commission_pb.UserDrawMoneyReq
};

CommissionService.UserQueryDrawMoneyRecords = {
  methodName: "UserQueryDrawMoneyRecords",
  service: CommissionService,
  requestStream: false,
  responseStream: false,
  requestType: svc_commission_pb.UserDrawMoneyRecordsReq,
  responseType: svc_commission_pb.UserDrawMoneyRecordsRes
};

exports.CommissionService = CommissionService;

function CommissionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CommissionServiceClient.prototype.userBindOrder = function userBindOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CommissionService.UserBindOrder, {
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

CommissionServiceClient.prototype.userBindPhone = function userBindPhone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CommissionService.UserBindPhone, {
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

CommissionServiceClient.prototype.userGetOrders = function userGetOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CommissionService.UserGetOrders, {
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

CommissionServiceClient.prototype.userQueryBalance = function userQueryBalance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CommissionService.UserQueryBalance, {
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

CommissionServiceClient.prototype.userWithdrawMoney = function userWithdrawMoney(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CommissionService.UserWithdrawMoney, {
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

CommissionServiceClient.prototype.userQueryDrawMoneyRecords = function userQueryDrawMoneyRecords(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CommissionService.UserQueryDrawMoneyRecords, {
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

exports.CommissionServiceClient = CommissionServiceClient;

