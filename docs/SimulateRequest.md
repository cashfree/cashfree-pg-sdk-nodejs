# SimulateRequest

simulate payment request object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **string** | Entity type should be PAYMENTS or SUBS_PAYMENTS only. | [default to undefined]
**entity_id** | **string** | If the entity type is PAYMENTS, the entity_id will be the transactionId. If the entity type is SUBS_PAYMENTS, the entity_id will be the merchantTxnId | [default to undefined]
**entity_simulation** | [**EntitySimulationRequest**](EntitySimulationRequest.md) |  | [default to undefined]

## Example

```typescript
import { SimulateRequest } from 'cashfree-pg';

const instance: SimulateRequest = {
    entity,
    entity_id,
    entity_simulation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
