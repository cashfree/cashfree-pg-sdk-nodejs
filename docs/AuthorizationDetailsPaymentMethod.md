# AuthorizationDetailsPaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upi** | [**AuthResponseUpi**](AuthResponseUpi.md) |  | [optional] [default to undefined]
**enach** | [**AuthResponseEnach**](AuthResponseEnach.md) |  | [optional] [default to undefined]
**pnach** | [**AuthResponsePnach**](AuthResponsePnach.md) |  | [optional] [default to undefined]
**card** | [**AuthResponseCard**](AuthResponseCard.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AuthorizationDetailsPaymentMethod } from 'cashfree-pg';

const instance: AuthorizationDetailsPaymentMethod = {
    upi,
    enach,
    pnach,
    card,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
