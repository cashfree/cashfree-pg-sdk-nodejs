# OfferValidationsResponsePaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all** | **object** | All offers applicable | [default to undefined]
**card** | [**CardOffer**](CardOffer.md) |  | [default to undefined]
**netbanking** | [**OfferNBNetbanking**](OfferNBNetbanking.md) |  | [default to undefined]
**app** | [**WalletOffer**](WalletOffer.md) |  | [default to undefined]
**upi** | **object** |  | [default to undefined]
**paylater** | [**PaylaterOffer**](PaylaterOffer.md) |  | [default to undefined]
**emi** | [**EMIOffer**](EMIOffer.md) |  | [default to undefined]

## Example

```typescript
import { OfferValidationsResponsePaymentMethod } from 'cashfree-pg';

const instance: OfferValidationsResponsePaymentMethod = {
    all,
    card,
    netbanking,
    app,
    upi,
    paylater,
    emi,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
