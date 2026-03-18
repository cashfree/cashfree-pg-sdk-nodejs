# TerminalTransactionEntity

Create terminal response object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_payment_id** | **string** |  | [optional] [default to undefined]
**payment_amount** | **number** |  | [optional] [default to undefined]
**payment_method** | **string** |  | [optional] [default to undefined]
**payment_url** | **string** |  | [optional] [default to undefined]
**qrcode** | **string** |  | [optional] [default to undefined]
**timeout** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TerminalTransactionEntity } from 'cashfree-pg';

const instance: TerminalTransactionEntity = {
    cf_payment_id,
    payment_amount,
    payment_method,
    payment_url,
    qrcode,
    timeout,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
