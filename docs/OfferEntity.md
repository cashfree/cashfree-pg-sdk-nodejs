# OfferEntity

Offer entity object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **string** |  | [optional] [default to undefined]
**offer_status** | **string** |  | [optional] [default to undefined]
**order_amount** | **number** |  | [optional] [default to undefined]
**payable_amount** | **number** |  | [optional] [default to undefined]
**offer_meta** | [**OfferMetaResponse**](OfferMetaResponse.md) |  | [optional] [default to undefined]
**offer_tnc** | [**OfferTncResponse**](OfferTncResponse.md) |  | [optional] [default to undefined]
**offer_details** | [**OfferDetailsResponse**](OfferDetailsResponse.md) |  | [optional] [default to undefined]
**offer_validations** | [**OfferValidationsResponse**](OfferValidationsResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OfferEntity } from 'cashfree-pg';

const instance: OfferEntity = {
    offer_id,
    offer_status,
    order_amount,
    payable_amount,
    offer_meta,
    offer_tnc,
    offer_details,
    offer_validations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
