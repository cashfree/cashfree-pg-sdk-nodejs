# SettlementSimulationResponse

Object to simulate a settlement request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**simulation_id** | **string** | A unique identifier for the simulation request. | [optional] [default to undefined]
**entity** | **string** | Entity type for which the simulation is performed. Example: \&quot;SETTLEMENTS\&quot;. | [optional] [default to undefined]
**settlement_ids** | **Array&lt;number&gt;** | List of simulated settlement IDs. | [optional] [default to undefined]
**simulation_status** | **string** | Status of the simulation request. Example: \&quot;SUCCESS/FAILED/PENDING\&quot;. | [optional] [default to undefined]

## Example

```typescript
import { SettlementSimulationResponse } from 'cashfree-pg';

const instance: SettlementSimulationResponse = {
    simulation_id,
    entity,
    settlement_ids,
    simulation_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
