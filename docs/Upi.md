# Upi

UPI collect payment method object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | Specify the channel through which the payment must be processed. Can be one of [\&quot;link\&quot;, \&quot;collect\&quot;, \&quot;qrcode\&quot;] | [default to undefined]
**upi_id** | **string** | Customer UPI VPA to process payment.  ### Important This is a required parameter for channel &#x3D; &#x60;collect&#x60;  | [optional] [default to undefined]
**upi_redirect_url** | **boolean** | use this if you want cashfree to show a loader. Sample response below. It is only supported for collect &#x60;action:collect&#x60; will be returned with &#x60;data.url&#x60; having the link for redirection  | [optional] [default to undefined]
**upi_expiry_minutes** | **number** | The UPI request will be valid for this expiry minutes. This parameter is only applicable for a UPI collect payment. The default value is 5 minutes. You should keep the minimum as 5 minutes, and maximum as 15 minutes | [optional] [default to undefined]
**authorize_only** | **boolean** | For one time mandate on UPI. Set this as authorize_only &#x3D; true. Please note that you can only use the \&quot;collect\&quot; channel if you are sending a one time mandate request | [optional] [default to undefined]
**authorization** | [**UPIAuthorizeDetails**](UPIAuthorizeDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Upi } from 'cashfree-pg';

const instance: Upi = {
    channel,
    upi_id,
    upi_redirect_url,
    upi_expiry_minutes,
    authorize_only,
    authorization,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
