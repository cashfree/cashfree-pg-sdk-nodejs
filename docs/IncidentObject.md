# IncidentObject

Represents an active incident entry in the ecosystem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incident_id** | **string** | Unique identifier for the incident. | [optional] [default to undefined]
**incident_impact** | **string** | Impact level of the incident. | [optional] [default to undefined]
**incident_message** | **string** | Description of the incident. | [optional] [default to undefined]
**incident_start_time** | **string** | Start time of the incident. | [optional] [default to undefined]
**incident_end_time** | **string** | End time of the incident, or null if ongoing. | [optional] [default to undefined]
**incident_status** | **string** | Status of the incident. | [optional] [default to undefined]
**incident_type** | **string** | Type of the incident. | [optional] [default to undefined]
**payment_method** | [**IncidentObjectPaymentMethod**](IncidentObjectPaymentMethod.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IncidentObject } from 'cashfree-pg';

const instance: IncidentObject = {
    incident_id,
    incident_impact,
    incident_message,
    incident_start_time,
    incident_end_time,
    incident_status,
    incident_type,
    payment_method,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
