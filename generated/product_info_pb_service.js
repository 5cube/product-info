// package: products
// file: product_info.proto

var product_info_pb = require("./product_info_pb");
var grpc = require("grpc-web-client").grpc;

var ProductService = (function () {
  function ProductService() {}
  ProductService.serviceName = "products.ProductService";
  return ProductService;
}());

ProductService.List = {
  methodName: "List",
  service: ProductService,
  requestStream: false,
  responseStream: false,
  requestType: product_info_pb.Empty,
  responseType: product_info_pb.ProductList
};

ProductService.Insert = {
  methodName: "Insert",
  service: ProductService,
  requestStream: false,
  responseStream: false,
  requestType: product_info_pb.Product,
  responseType: product_info_pb.Product
};

ProductService.Get = {
  methodName: "Get",
  service: ProductService,
  requestStream: false,
  responseStream: false,
  requestType: product_info_pb.ProductId,
  responseType: product_info_pb.Product
};

ProductService.Remove = {
  methodName: "Remove",
  service: ProductService,
  requestStream: false,
  responseStream: false,
  requestType: product_info_pb.ProductId,
  responseType: product_info_pb.TextResponse
};

exports.ProductService = ProductService;

function ProductServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProductServiceClient.prototype.list = function list(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(ProductService.List, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ProductServiceClient.prototype.insert = function insert(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(ProductService.Insert, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ProductServiceClient.prototype.get = function get(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(ProductService.Get, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ProductServiceClient.prototype.remove = function remove(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(ProductService.Remove, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.ProductServiceClient = ProductServiceClient;

