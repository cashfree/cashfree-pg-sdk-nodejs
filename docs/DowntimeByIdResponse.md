# DowntimeByIdResponse

Response returned when fetching downtime details by ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the downtime. | [optional] [default to undefined]
**impact** | **string** | Impact level of the downtime (e.g., HIGH, MEDIUM, LOW). | [optional] [default to undefined]
**message** | **string** | Description of the issue. | [optional] [default to undefined]
**start_time** | **string** | Start time of the downtime. | [optional] [default to undefined]
**end_time** | **string** | End time of the downtime, if applicable; null if still ongoing. | [optional] [default to undefined]
**status** | **string** | Current status of the downtime (e.g., OPEN, UPDATE, RESOLVED). | [optional] [default to undefined]
**type** | **string** | Type/category of the downtime (e.g., SCHEDULED, UNSCHEDULED). | [optional] [default to undefined]
**payment_method** | [**DowntimeObjectPaymentMethod**](DowntimeObjectPaymentMethod.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DowntimeByIdResponse } from 'cashfree-pg';

const instance: DowntimeByIdResponse = {
    id,
    impact,
    message,
    start_time,
    end_time,
    status,
    type,
    payment_method,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
