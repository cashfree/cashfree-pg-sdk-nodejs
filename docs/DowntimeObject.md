# DowntimeObject

Represents an active downtime entry in the ecosystem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downtime_id** | **string** | Unique identifier for the downtime. | [optional] [default to undefined]
**downtime_impact** | **string** | Impact level of the downtime. | [optional] [default to undefined]
**downtime_message** | **string** | Description of the downtime. | [optional] [default to undefined]
**downtime_start_time** | **string** | Start time of the downtime. | [optional] [default to undefined]
**downtime_end_time** | **string** | End time of the downtime, or null if ongoing. | [optional] [default to undefined]
**downtime_status** | **string** | Status of the downtime (OPEN, UPDATE, RESOLVED). | [optional] [default to undefined]
**downtime_type** | **string** | Type of the downtime (SCHEDULED or UNSCHEDULED). | [optional] [default to undefined]
**payment_method** | [**DowntimeObjectPaymentMethod**](DowntimeObjectPaymentMethod.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DowntimeObject } from 'cashfree-pg';

const instance: DowntimeObject = {
    downtime_id,
    downtime_impact,
    downtime_message,
    downtime_start_time,
    downtime_end_time,
    downtime_status,
    downtime_type,
    payment_method,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
