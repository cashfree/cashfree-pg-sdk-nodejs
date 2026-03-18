# TransferDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendor_id** | **string** |  | [optional] [default to undefined]
**transfer_from** | **string** |  | [optional] [default to undefined]
**transfer_type** | **string** |  | [optional] [default to undefined]
**transfer_amount** | **number** |  | [optional] [default to undefined]
**remark** | **string** |  | [optional] [default to undefined]
**tags** | [**Array&lt;TransferDetailsTagsInner&gt;**](TransferDetailsTagsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TransferDetails } from 'cashfree-pg';

const instance: TransferDetails = {
    vendor_id,
    transfer_from,
    transfer_type,
    transfer_amount,
    remark,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
