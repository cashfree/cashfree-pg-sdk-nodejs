# SplitAfterPaymentRequestSplitInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendor_id** | **string** | Specify the merchant vendor ID to split the payment. | [optional] [default to undefined]
**amount** | **number** | Specify the amount to be split to the vendor. | [optional] [default to undefined]
**percentage** | **number** | Specify the percentage of amount to be split. | [optional] [default to undefined]
**tags** | **{ [key: string]: string; }** | Custom Tags in thr form of {\&quot;key\&quot;:\&quot;value\&quot;} which can be passed for an order. A maximum of 10 tags can be added | [optional] [default to undefined]

## Example

```typescript
import { SplitAfterPaymentRequestSplitInner } from 'cashfree-pg';

const instance: SplitAfterPaymentRequestSplitInner = {
    vendor_id,
    amount,
    percentage,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
