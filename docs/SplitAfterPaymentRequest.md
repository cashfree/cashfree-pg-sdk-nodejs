# SplitAfterPaymentRequest

Split After Payment Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**split** | [**Array&lt;SplitAfterPaymentRequestSplitInner&gt;**](SplitAfterPaymentRequestSplitInner.md) | Specify the vendors order split details. | [default to undefined]
**disable_split** | **boolean** | Specify if you want to end the split or continue creating further splits in future. | [optional] [default to undefined]

## Example

```typescript
import { SplitAfterPaymentRequest } from 'cashfree-pg';

const instance: SplitAfterPaymentRequest = {
    split,
    disable_split,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
