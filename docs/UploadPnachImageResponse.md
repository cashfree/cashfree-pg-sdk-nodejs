# UploadPnachImageResponse

Response of pnach image upload API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **string** | The payment_id against which the pnach image is uploaded. | [optional] [default to undefined]
**authorization_status** | **string** | Authorization status of the subscription. | [optional] [default to undefined]
**action** | **string** | Action performed on the file. | [optional] [default to undefined]
**payment_message** | **string** | Message of the API. | [optional] [default to undefined]

## Example

```typescript
import { UploadPnachImageResponse } from 'cashfree-pg';

const instance: UploadPnachImageResponse = {
    payment_id,
    authorization_status,
    action,
    payment_message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
