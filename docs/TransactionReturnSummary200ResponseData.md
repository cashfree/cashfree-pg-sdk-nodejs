# TransactionReturnSummary200ResponseData

Transaction return summary data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentId** | **number** | Payment ID for which the summary is generated. | [optional] [default to undefined]
**status** | **string** | Status of the summary generation (GENERATED or INITIALIZED). | [optional] [default to undefined]
**link** | **string** | Download link for the summary (if status is GENERATED). | [optional] [default to undefined]

## Example

```typescript
import { TransactionReturnSummary200ResponseData } from 'cashfree-pg';

const instance: TransactionReturnSummary200ResponseData = {
    paymentId,
    status,
    link,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
