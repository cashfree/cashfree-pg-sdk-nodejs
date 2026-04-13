# CreateTerminalTransactionRequest

Request body to create a terminal transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_order_id** | **string** | cashfree order ID that was returned while creating an order. | [default to undefined]
**cf_terminal_id** | **string** | cashfree terminal id. this is a required parameter when you do not provide the terminal phone number. | [optional] [default to undefined]
**payment_method** | **string** | mention the payment method used for the transaction. possible values - QR_CODE, LINK. | [default to undefined]
**terminal_phone_no** | **string** | agent mobile number assigned to the terminal. this is a required parameter when you do not provide the cf_terminal_id. | [optional] [default to undefined]
**add_invoice** | **boolean** | make it true to have request be sent to create a Dynamic GST QR Code. | [optional] [default to undefined]

## Example

```typescript
import { CreateTerminalTransactionRequest } from 'cashfree-pg';

const instance: CreateTerminalTransactionRequest = {
    cf_order_id,
    cf_terminal_id,
    payment_method,
    terminal_phone_no,
    add_invoice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
