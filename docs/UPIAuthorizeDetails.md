# UPIAuthorizeDetails

object when you are using preauth in UPI in order pay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approve_by** | **string** | Time by which this authorization should be approved by the customer. | [optional] [default to undefined]
**start_time** | **string** | This is the time when the UPI one time mandate will start | [optional] [default to undefined]
**end_time** | **string** | This is the time when the UPI mandate will be over. If the mandate has not been executed by this time, the funds will be returned back to the customer after this time. | [optional] [default to undefined]

## Example

```typescript
import { UPIAuthorizeDetails } from 'cashfree-pg';

const instance: UPIAuthorizeDetails = {
    approve_by,
    start_time,
    end_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
