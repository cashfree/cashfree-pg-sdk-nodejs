# UploadTerminalDocs

Request body to upload terminal documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**doc_type** | **string** | Mention the document type you are uploading. Possible values - ADDRESSPROOF, PHOTOGRAPH. | [default to undefined]
**doc_value** | **string** | Enter the display name of the uploaded file. | [default to undefined]
**file** | **string** | Select the document that should be uploaded or provide the path of that file. You cannot upload a file that is more than 2MB in size. | [default to undefined]

## Example

```typescript
import { UploadTerminalDocs } from 'cashfree-pg';

const instance: UploadTerminalDocs = {
    doc_type,
    doc_value,
    file,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
