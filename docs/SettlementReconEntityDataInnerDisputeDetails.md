# SettlementReconEntityDataInnerDisputeDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed_in_favor_of** | **string** | Specifies whether the dispute was closed in favor of the merchant or customer. Possible values - Merchant, Customer. | [optional] [default to undefined]
**dispute_resolved_on** | **string** | Date and time when the dispute was resolved. | [optional] [default to undefined]
**dispute_category** | **string** | Category of the dispute - Dispute code and the reason for dispute is shown. | [optional] [default to undefined]
**dispute_note** | **string** | Note regarding the dispute. | [optional] [default to undefined]

## Example

```typescript
import { SettlementReconEntityDataInnerDisputeDetails } from 'cashfree-pg';

const instance: SettlementReconEntityDataInnerDisputeDetails = {
    closed_in_favor_of,
    dispute_resolved_on,
    dispute_category,
    dispute_note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
