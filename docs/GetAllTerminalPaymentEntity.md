# GetAllTerminalPaymentEntity

Response object containing detailed information about a terminal payment transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_terminal_id** | **number** | Unique Cashfree terminal identifier. | [optional] [default to undefined]
**terminal_id** | **string** | Merchant-defined terminal identifier. | [optional] [default to undefined]
**terminal_vpa** | **string** | Virtual payment address (VPA) associated with the terminal. | [optional] [default to undefined]
**cf_payment_id** | **number** | Unique Cashfree payment identifier. | [optional] [default to undefined]
**payment_amount** | **number** | Payment transaction amount in the specified currency. | [optional] [default to undefined]
**payment_mode** | **string** | Payment method used for the transaction (for example, UPI_OFFLINE_STATIC). | [optional] [default to undefined]
**payment_status** | **string** | Current status of the payment transaction (SUCCESS, FAILED, or PENDING). | [optional] [default to undefined]
**payment_time** | **string** | Timestamp when the payment was processed in ISO8601 format. | [optional] [default to undefined]
**error_details** | [**ErrorDetailsInPaymentsEntity**](ErrorDetailsInPaymentsEntity.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetAllTerminalPaymentEntity } from 'cashfree-pg';

const instance: GetAllTerminalPaymentEntity = {
    cf_terminal_id,
    terminal_id,
    terminal_vpa,
    cf_payment_id,
    payment_amount,
    payment_mode,
    payment_status,
    payment_time,
    error_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
