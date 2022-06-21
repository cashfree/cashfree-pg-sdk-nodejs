export * from './ordersApi';
import { OrdersApi } from './ordersApi';
export * from './paymentLinksApi';
import { PaymentLinksApi } from './paymentLinksApi';
export * from './paymentsApi';
import { PaymentsApi } from './paymentsApi';
export * from './refundsApi';
import { RefundsApi } from './refundsApi';
export * from './settlementsApi';
import { SettlementsApi } from './settlementsApi';
export * from './tokenVaultApi';
import { TokenVaultApi } from './tokenVaultApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [OrdersApi, PaymentLinksApi, PaymentsApi, RefundsApi, SettlementsApi, TokenVaultApi];
