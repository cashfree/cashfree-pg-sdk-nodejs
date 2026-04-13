# DisputesEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dispute_id** | **number** |  | [optional] [default to undefined]
**dispute_type** | **string** |  | [optional] [default to undefined]
**reason_code** | **string** |  | [optional] [default to undefined]
**reason_description** | **string** |  | [optional] [default to undefined]
**dispute_amount** | **number** | Dispute amount may differ from transaction amount for partial cases. | [optional] [default to undefined]
**dispute_amount_currency** | **string** | Dispute amount currency for a dispute | [optional] [default to undefined]
**created_at** | **string** | This is the time when the dispute was created. | [optional] [default to undefined]
**respond_by** | **string** | This is the time by which evidence should be submitted to contest the dispute. | [optional] [default to undefined]
**updated_at** | **string** | This is the time when the dispute case was updated. | [optional] [default to undefined]
**resolved_at** | **string** | This is the time when the dispute case was closed. | [optional] [default to undefined]
**dispute_status** | **string** |  | [optional] [default to undefined]
**cf_dispute_remarks** | **string** |  | [optional] [default to undefined]
**preferred_evidence** | [**Array&lt;PreferredEvidenceInner&gt;**](PreferredEvidenceInner.md) |  | [optional] [default to undefined]
**dispute_evidence** | [**Array&lt;DisputeEvidenceInner&gt;**](DisputeEvidenceInner.md) |  | [optional] [default to undefined]
**order_details** | [**OrderDetailsInDisputesEntity**](OrderDetailsInDisputesEntity.md) |  | [optional] [default to undefined]
**customer_details** | [**CustomerDetailsInDisputesEntity**](CustomerDetailsInDisputesEntity.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DisputesEntity } from 'cashfree-pg';

const instance: DisputesEntity = {
    dispute_id,
    dispute_type,
    reason_code,
    reason_description,
    dispute_amount,
    dispute_amount_currency,
    created_at,
    respond_by,
    updated_at,
    resolved_at,
    dispute_status,
    cf_dispute_remarks,
    preferred_evidence,
    dispute_evidence,
    order_details,
    customer_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
