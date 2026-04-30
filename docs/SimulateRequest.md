# SimulateRequest

Request body for simulation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **string** | Entity type should be PAYMENTS, SUBS_PAYMENTS OR VBA_TRANSFER only. | [default to undefined]
**entity_id** | **string** | If the entity type is PAYMENTS, the entity_id will be the cf_payment_id. If the entity type is SUBS_PAYMENTS, the entity_id will be the payment_id. If the entity type is VBA_TRANSFER, the entity_id will be the vba_account_number. | [optional] [default to undefined]
**entity_simulation** | [**EntitySimulationRequest**](EntitySimulationRequest.md) |  | [optional] [default to undefined]
**vba_simulation** | [**VBASimulationRequest**](VBASimulationRequest.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SimulateRequest } from 'cashfree-pg';

const instance: SimulateRequest = {
    entity,
    entity_id,
    entity_simulation,
    vba_simulation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
