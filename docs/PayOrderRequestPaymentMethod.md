# PayOrderRequestPaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card** | [**Card**](Card.md) |  | [default to undefined]
**upi** | [**Upi**](Upi.md) |  | [default to undefined]
**netbanking** | [**Netbanking**](Netbanking.md) |  | [default to undefined]
**app** | [**App**](App.md) |  | [default to undefined]
**emi** | [**CardEMI**](CardEMI.md) |  | [default to undefined]
**cardless_emi** | [**CardlessEMI**](CardlessEMI.md) |  | [default to undefined]
**paylater** | [**Paylater**](Paylater.md) |  | [default to undefined]
**banktransfer** | [**Banktransfer**](Banktransfer.md) |  | [default to undefined]

## Example

```typescript
import { PayOrderRequestPaymentMethod } from 'cashfree-pg';

const instance: PayOrderRequestPaymentMethod = {
    card,
    upi,
    netbanking,
    app,
    emi,
    cardless_emi,
    paylater,
    banktransfer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
