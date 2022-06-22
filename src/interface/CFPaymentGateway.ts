import {
    CFOrderResponse,
    CFPayResponse,
    CFPaymentsForOrderResponse,
    CFPaymentEntityResponse,
    CFRefundResponse,
    CFAllRefundsResponse,
    CFSettlementsResponse,
    CFAllInstrumentsResponse,
    CFInstrumentsResponse,
    CFCryptogramResponse,
    CFLinkResponse,
    CFCancelledLinkResponse,
    CFPaymentLinkOrdersRespnse,
} from "./CFResponses";

import { CFConfig, CFEnvironment } from "./CFConfig";
import { CFHeader } from "./CFHeader";
import {
    CFOrderRequest,
    CFOrderPayRequest,
    CFAuthorizationRequest,
    CFRefundRequest,
    CFLinkRequest,
} from "../model/models";
import {
    OrdersApi,
    TokenVaultApi,
    PaymentsApi,
    RefundsApi,
    SettlementsApi,
    PaymentLinksApi,
} from "../api/apis";

export class CFPaymentGateway {
    getURL(environment: CFEnvironment): string {
        if (environment == CFEnvironment.SANDBOX) {
            return "https://sandbox.cashfree.com/pg";
        }
        return "https://api.cashfree.com/pg";
    }
    async orderCreate(
        cfConfig: CFConfig,
        cFOrderRequest: CFOrderRequest,
        header: CFHeader = {}
    ): Promise<CFOrderResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new OrdersApi(url);
        const result: CFOrderResponse = await apiInstance.createOrder(
            cfConfig.clientId,
            cfConfig.clientSecret,
            cfConfig.apiVersion,
            false,
            header?.idempotencyKey,
            header?.requestID,
            cFOrderRequest,
            cfConfig.timeout,
            cfConfig.webProxy = null,
        );
        return result;
    }
    async orderPay(
        cfConfig: CFConfig,
        cFOrderPayRequest: CFOrderPayRequest,
        header: CFHeader = {}
    ): Promise<CFPayResponse> {
        const url = this.getURL(cfConfig.environment);

        var apiInstance = new OrdersApi(url);
        const cfPayResponse: CFPayResponse = await apiInstance.orderPay(
            cfConfig.apiVersion,
            header?.requestID,
            cFOrderPayRequest,
            cfConfig.timeout,
            cfConfig.webProxy = null,
        );
        return cfPayResponse;
    }

    async getOrder(
        cfConfig: CFConfig,
        orderID: string,
        header: CFHeader = {}
    ): Promise<CFOrderResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new OrdersApi(url);
        const cfPayResponse: CFOrderResponse = await apiInstance.getOrder(
            cfConfig.clientId,
            cfConfig.clientSecret,
            orderID,
            cfConfig.apiVersion,
            undefined,
            undefined,
            header?.requestID,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return cfPayResponse;
    }

    async preAuthorization(
        cfConfig: CFConfig,
        orderId: string,
        cfAuthorizationRequest: CFAuthorizationRequest,
        header: CFHeader = {}
    ): Promise<CFPaymentEntityResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new OrdersApi(url);
        var result = await apiInstance.preauthorization(
            cfConfig.clientId,
            cfConfig.clientSecret,
            orderId,
            cfConfig.apiVersion,
            undefined,
            header?.idempotencyKey,
            header?.requestID,
            cfAuthorizationRequest,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return result;
    }

    async getPaymentsForOrder(
        cfConfig: CFConfig,
        orderID: string,
        header: CFHeader = {}
    ): Promise<CFPaymentsForOrderResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new PaymentsApi(url);
        var cFPaymentsForOrderResponse = await apiInstance.getPaymentsfororder(
            cfConfig.clientId,
            cfConfig.clientSecret,
            orderID,
            cfConfig.apiVersion,
            undefined,
            undefined,
            header?.requestID,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return cFPaymentsForOrderResponse;
    }

    async getPaymentsByPaymentID(
        cfConfig: CFConfig,
        orderID: string,
        cfPaymentID: number,
        header: CFHeader = {}
    ): Promise<CFPaymentEntityResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new PaymentsApi(url);
        var cfPaymentsEntity = apiInstance.getPaymentbyId(
            cfConfig.clientId,
            cfConfig.clientSecret,
            orderID,
            cfPaymentID,
            cfConfig.apiVersion,
            undefined,
            undefined,
            header?.requestID,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return cfPaymentsEntity;
    }

    async createRefund(
        cfConfig: CFConfig,
        orderID: string,
        cfRefundRequest: CFRefundRequest,
        header: CFHeader = {}
    ): Promise<CFRefundResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new RefundsApi(url);
        var cfRefundResponse = await apiInstance.createrefund(
            cfConfig.clientId,
            cfConfig.clientSecret,
            orderID,
            cfConfig.apiVersion,
            undefined,
            header?.idempotencyKey,
            header?.requestID,
            cfRefundRequest,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return cfRefundResponse;
    }
    async getRefund(
        cfConfig: CFConfig,
        orderID: string,
        refundID: string,
        header: CFHeader = {}
    ): Promise<CFRefundResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new RefundsApi(url);
        var cfRefundResponse = await apiInstance.getRefund(
            cfConfig.clientId,
            cfConfig.clientSecret,
            orderID,
            refundID,
            cfConfig.apiVersion,
            undefined,
            undefined,
            header?.requestID,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return cfRefundResponse;
    }
    async getAllRefundsForOrder(
        cfConfig: CFConfig,
        orderID: string,
        header: CFHeader = {}
    ): Promise<CFAllRefundsResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new RefundsApi(url);
        var cfRefundResponse = await apiInstance.getallrefundsfororder(
            cfConfig.clientId,
            cfConfig.clientSecret,
            orderID,
            cfConfig.apiVersion,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return cfRefundResponse;
    }
    async getSettlements(
        cfConfig: CFConfig,
        orderID: string,
        header: CFHeader = {}
    ): Promise<CFSettlementsResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new SettlementsApi(url);
        var cfSettlementResponse = apiInstance.getsettlements(
            cfConfig.clientId,
            cfConfig.clientSecret,
            orderID,
            cfConfig.apiVersion,
            undefined,
            header?.idempotencyKey,
            header?.requestID,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return cfSettlementResponse;
    }

    async getAllSavedInstruments(
        cfConfig: CFConfig,
        customerID: string,
        instrumentType: "card" = "card",
        header: CFHeader = {}
    ): Promise<CFAllInstrumentsResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new TokenVaultApi(url);
        var instrumentsResponse = await apiInstance.fetchAllSavedInstruments(
            cfConfig.clientId,
            cfConfig.clientSecret,
            customerID,
            instrumentType,
            cfConfig.apiVersion,
            undefined,
            header?.idempotencyKey,
            header?.requestID,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return instrumentsResponse;
    }
    async getSavedInstrumentById(
        cfConfig: CFConfig,
        customerID: string,
        instrumentID: string,
        header: CFHeader = {}
    ): Promise<CFInstrumentsResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new TokenVaultApi(url);
        var instrumentResponse = await apiInstance.fetchSpecificSavedInstrument(
            cfConfig.clientId,
            cfConfig.clientSecret,
            customerID,
            instrumentID,
            cfConfig.apiVersion,
            undefined,
            header?.idempotencyKey,
            header?.requestID,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return instrumentResponse;
    }
    async getCryptogramByInstrumentID(
        cfConfig: CFConfig,
        customerID: string,
        instrumentID: string,
        header: CFHeader = {}
    ): Promise<CFCryptogramResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new TokenVaultApi(url);
        var cryptogramResponse = await apiInstance.fetchCryptogram(
            cfConfig.clientId,
            cfConfig.clientSecret,
            customerID,
            instrumentID,
            cfConfig.apiVersion,
            undefined,
            header?.idempotencyKey,
            header?.requestID,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return cryptogramResponse;
    }
    async deleteInstrumentByID(
        cfConfig: CFConfig,
        customerID: string,
        instrumentID: string,
        header: CFHeader = {}
    ): Promise<CFInstrumentsResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new TokenVaultApi(url);
        var instrumentsResponse =
            await apiInstance.deleteSpecificSavedInstrument(
                cfConfig.clientId,
                cfConfig.clientSecret,
                customerID,
                instrumentID,
                cfConfig.apiVersion,
                cfConfig?.timeout,
                cfConfig.webProxy = null,
            );
        return instrumentsResponse;
    }
    async createPaymentLink(
        cfConfig: CFConfig,
        cfLinkRequest: CFLinkRequest,
        header: CFHeader = {}
    ): Promise<CFLinkResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new PaymentLinksApi(url);
        var response = await apiInstance.createPaymentLink(
            cfConfig.clientId,
            cfConfig.clientSecret,
            cfConfig.apiVersion,
            undefined,
            header?.idempotencyKey,
            header?.requestID,
            cfLinkRequest,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return response;
    }
    async getPaymentLinkDetails(
        cfConfig: CFConfig,
        linkID: string,
        header: CFHeader = {}
    ): Promise<CFLinkResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new PaymentLinksApi(url);
        var response = await apiInstance.getPaymentLinkDetails(
            cfConfig.clientId,
            cfConfig.clientSecret,
            linkID,
            cfConfig.apiVersion,
            undefined,
            header?.idempotencyKey,
            header?.requestID,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return response;
    }
    async cancelPaymentLink(
        cfConfig: CFConfig,
        linkID: string,
        header: CFHeader = {}
    ): Promise<CFCancelledLinkResponse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new PaymentLinksApi(url);
        var response = await apiInstance.cancelPaymentLink(
            cfConfig.clientId,
            cfConfig.clientSecret,
            linkID,
            cfConfig.apiVersion,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return response;
    }
    async getPaymentLinkOrders(
        cfConfig: CFConfig,
        linkID: string,
        header: CFHeader = {}
    ): Promise<CFPaymentLinkOrdersRespnse> {
        const url = this.getURL(cfConfig.environment);
        var apiInstance = new PaymentLinksApi(url);
        var response = await apiInstance.getPaymentLinkOrders(
            cfConfig.clientId,
            cfConfig.clientSecret,
            linkID,
            cfConfig.apiVersion,
            undefined,
            header?.idempotencyKey,
            header?.requestID,
            cfConfig?.timeout,
            cfConfig.webProxy = null,
        );
        return response;
    }
}
