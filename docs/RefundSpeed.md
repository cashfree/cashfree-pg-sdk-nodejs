# RefundSpeed

How fast refund has to be proecessed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested** | **string** | Requested speed of refund. | [optional] [default to undefined]
**accepted** | **string** | Accepted speed of refund. | [optional] [default to undefined]
**processed** | **string** | Processed speed of refund. | [optional] [default to undefined]
**message** | **string** | Error message, if any for refund_speed request | [optional] [default to undefined]

## Example

```typescript
import { RefundSpeed } from 'cashfree-pg';

const instance: RefundSpeed = {
    requested,
    accepted,
    processed,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
