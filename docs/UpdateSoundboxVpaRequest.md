# UpdateSoundboxVpaRequest

Request body to update soundbox vpa

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vpa** | **string** | Terminal Vpa,for which we need to update details. | [default to undefined]
**cf_terminal_id** | **string** | cashfree terminal id. | [default to undefined]
**merchant_name** | **string** | Merchant Name that need to updated on soundbox | [optional] [default to undefined]
**language** | **string** | language of soundbox,currently English, Hindi, Tamil | [optional] [default to undefined]

## Example

```typescript
import { UpdateSoundboxVpaRequest } from 'cashfree-pg';

const instance: UpdateSoundboxVpaRequest = {
    vpa,
    cf_terminal_id,
    merchant_name,
    language,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
