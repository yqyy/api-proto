// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package pddxpb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// PddApiServiceClient is the client API for PddApiService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PddApiServiceClient interface {
	AuthorityQuery(ctx context.Context, in *AuthorityQueryRequest, opts ...grpc.CallOption) (*AuthorityQueryResponse, error)
	CreateMarketingURL(ctx context.Context, in *CreateMarketingURLRequest, opts ...grpc.CallOption) (*CreateMarketingURLResponse, error)
	URLConvert(ctx context.Context, in *URLConvertRequest, opts ...grpc.CallOption) (*URLConvertResponse, error)
	Promotion(ctx context.Context, in *PromotionRequest, opts ...grpc.CallOption) (*PromotionResponse, error)
	GoodsSearch(ctx context.Context, in *SearchRequest, opts ...grpc.CallOption) (*SearchResponse, error)
}

type pddApiServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPddApiServiceClient(cc grpc.ClientConnInterface) PddApiServiceClient {
	return &pddApiServiceClient{cc}
}

func (c *pddApiServiceClient) AuthorityQuery(ctx context.Context, in *AuthorityQueryRequest, opts ...grpc.CallOption) (*AuthorityQueryResponse, error) {
	out := new(AuthorityQueryResponse)
	err := c.cc.Invoke(ctx, "/pddxpb.PddApiService/AuthorityQuery", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *pddApiServiceClient) CreateMarketingURL(ctx context.Context, in *CreateMarketingURLRequest, opts ...grpc.CallOption) (*CreateMarketingURLResponse, error) {
	out := new(CreateMarketingURLResponse)
	err := c.cc.Invoke(ctx, "/pddxpb.PddApiService/CreateMarketingURL", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *pddApiServiceClient) URLConvert(ctx context.Context, in *URLConvertRequest, opts ...grpc.CallOption) (*URLConvertResponse, error) {
	out := new(URLConvertResponse)
	err := c.cc.Invoke(ctx, "/pddxpb.PddApiService/URLConvert", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *pddApiServiceClient) Promotion(ctx context.Context, in *PromotionRequest, opts ...grpc.CallOption) (*PromotionResponse, error) {
	out := new(PromotionResponse)
	err := c.cc.Invoke(ctx, "/pddxpb.PddApiService/Promotion", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *pddApiServiceClient) GoodsSearch(ctx context.Context, in *SearchRequest, opts ...grpc.CallOption) (*SearchResponse, error) {
	out := new(SearchResponse)
	err := c.cc.Invoke(ctx, "/pddxpb.PddApiService/GoodsSearch", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PddApiServiceServer is the server API for PddApiService service.
// All implementations must embed UnimplementedPddApiServiceServer
// for forward compatibility
type PddApiServiceServer interface {
	AuthorityQuery(context.Context, *AuthorityQueryRequest) (*AuthorityQueryResponse, error)
	CreateMarketingURL(context.Context, *CreateMarketingURLRequest) (*CreateMarketingURLResponse, error)
	URLConvert(context.Context, *URLConvertRequest) (*URLConvertResponse, error)
	Promotion(context.Context, *PromotionRequest) (*PromotionResponse, error)
	GoodsSearch(context.Context, *SearchRequest) (*SearchResponse, error)
	mustEmbedUnimplementedPddApiServiceServer()
}

// UnimplementedPddApiServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPddApiServiceServer struct {
}

func (UnimplementedPddApiServiceServer) AuthorityQuery(context.Context, *AuthorityQueryRequest) (*AuthorityQueryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AuthorityQuery not implemented")
}
func (UnimplementedPddApiServiceServer) CreateMarketingURL(context.Context, *CreateMarketingURLRequest) (*CreateMarketingURLResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateMarketingURL not implemented")
}
func (UnimplementedPddApiServiceServer) URLConvert(context.Context, *URLConvertRequest) (*URLConvertResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method URLConvert not implemented")
}
func (UnimplementedPddApiServiceServer) Promotion(context.Context, *PromotionRequest) (*PromotionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Promotion not implemented")
}
func (UnimplementedPddApiServiceServer) GoodsSearch(context.Context, *SearchRequest) (*SearchResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GoodsSearch not implemented")
}
func (UnimplementedPddApiServiceServer) mustEmbedUnimplementedPddApiServiceServer() {}

// UnsafePddApiServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PddApiServiceServer will
// result in compilation errors.
type UnsafePddApiServiceServer interface {
	mustEmbedUnimplementedPddApiServiceServer()
}

func RegisterPddApiServiceServer(s grpc.ServiceRegistrar, srv PddApiServiceServer) {
	s.RegisterService(&PddApiService_ServiceDesc, srv)
}

func _PddApiService_AuthorityQuery_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AuthorityQueryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PddApiServiceServer).AuthorityQuery(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pddxpb.PddApiService/AuthorityQuery",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PddApiServiceServer).AuthorityQuery(ctx, req.(*AuthorityQueryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PddApiService_CreateMarketingURL_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateMarketingURLRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PddApiServiceServer).CreateMarketingURL(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pddxpb.PddApiService/CreateMarketingURL",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PddApiServiceServer).CreateMarketingURL(ctx, req.(*CreateMarketingURLRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PddApiService_URLConvert_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(URLConvertRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PddApiServiceServer).URLConvert(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pddxpb.PddApiService/URLConvert",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PddApiServiceServer).URLConvert(ctx, req.(*URLConvertRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PddApiService_Promotion_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PromotionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PddApiServiceServer).Promotion(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pddxpb.PddApiService/Promotion",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PddApiServiceServer).Promotion(ctx, req.(*PromotionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PddApiService_GoodsSearch_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SearchRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PddApiServiceServer).GoodsSearch(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pddxpb.PddApiService/GoodsSearch",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PddApiServiceServer).GoodsSearch(ctx, req.(*SearchRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PddApiService_ServiceDesc is the grpc.ServiceDesc for PddApiService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PddApiService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pddxpb.PddApiService",
	HandlerType: (*PddApiServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AuthorityQuery",
			Handler:    _PddApiService_AuthorityQuery_Handler,
		},
		{
			MethodName: "CreateMarketingURL",
			Handler:    _PddApiService_CreateMarketingURL_Handler,
		},
		{
			MethodName: "URLConvert",
			Handler:    _PddApiService_URLConvert_Handler,
		},
		{
			MethodName: "Promotion",
			Handler:    _PddApiService_Promotion_Handler,
		},
		{
			MethodName: "GoodsSearch",
			Handler:    _PddApiService_GoodsSearch_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api.pdd.ddx.proto",
}
