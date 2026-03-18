# StaticSplitRequest

Static Split Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Specify if the split is to be active or not. Possible values: true/false | [default to undefined]
**terminal_id** | **string** | For Subscription payments, the subscription reference ID is to be shared as the terminal ID. Incase for Payment Gateway terminal ID is non-mandatory. Mention as 0 if not applicable. | [optional] [default to undefined]
**terminal_reference_id** | **number** | You can share additional information using the reference ID. | [optional] [default to undefined]
**product_type** | **string** | Specify the product for which the split should be created. If you want split to be created for Payment Gateway pass value as \&quot;PG\&quot;. If you want split to be created for Subscription, pass value as \&quot;SBC\&quot;. Accepted values - \&quot;STATIC_QR\&quot;, \&quot;SBC\&quot;, \&quot;PG\&quot;, \&quot;EPOS\&quot;. | [default to undefined]
**scheme** | [**Array&lt;StaticSplitRequestSchemeInner&gt;**](StaticSplitRequestSchemeInner.md) | Provide the split scheme details. | [default to undefined]

## Example

```typescript
import { StaticSplitRequest } from 'cashfree-pg';

const instance: StaticSplitRequest = {
    active,
    terminal_id,
    terminal_reference_id,
    product_type,
    scheme,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
