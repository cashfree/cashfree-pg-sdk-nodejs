# OnboardSoundboxVpaRequest

Request body to onboard soundbox vpa

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vpa** | **string** | Terminal Vpa ,that need to onboard on soundbox | [default to undefined]
**cf_terminal_id** | **string** | cashfree terminal id. | [default to undefined]
**device_serial_no** | **string** | Device Serial No of soundbox | [default to undefined]
**merchant_name** | **string** | Merchant Name that need to onboard on soundbox | [optional] [default to undefined]
**language** | **string** | language of soundbox,currently English, Hindi, Tamil | [optional] [default to undefined]

## Example

```typescript
import { OnboardSoundboxVpaRequest } from 'cashfree-pg';

const instance: OnboardSoundboxVpaRequest = {
    vpa,
    cf_terminal_id,
    device_serial_no,
    merchant_name,
    language,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
