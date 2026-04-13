# OfferExtendedDetails

Details of the offer which got applied to the paid order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **string** |  | [optional] [default to undefined]
**offer_status** | **string** |  | [optional] [default to undefined]
**offer_meta** | [**OfferMeta**](OfferMeta.md) |  | [optional] [default to undefined]
**offer_tnc** | [**OfferTnc**](OfferTnc.md) |  | [optional] [default to undefined]
**offer_details** | [**OfferDetails**](OfferDetails.md) |  | [optional] [default to undefined]
**offer_validations** | [**OfferValidations**](OfferValidations.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OfferExtendedDetails } from 'cashfree-pg';

const instance: OfferExtendedDetails = {
    offer_id,
    offer_status,
    offer_meta,
    offer_tnc,
    offer_details,
    offer_validations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
