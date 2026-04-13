# CreateOfferRequest

create offer backend request object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_meta** | [**OfferMeta**](OfferMeta.md) |  | [default to undefined]
**offer_tnc** | [**OfferTnc**](OfferTnc.md) |  | [default to undefined]
**offer_details** | [**OfferDetails**](OfferDetails.md) |  | [default to undefined]
**offer_validations** | [**OfferValidations**](OfferValidations.md) |  | [default to undefined]

## Example

```typescript
import { CreateOfferRequest } from 'cashfree-pg';

const instance: CreateOfferRequest = {
    offer_meta,
    offer_tnc,
    offer_details,
    offer_validations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
