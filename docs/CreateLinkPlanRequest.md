# CreateLinkPlanRequest

Request body to create a plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_id** | **string** | Unique ID to identify the plan. Only alpha-numerics, dot, hyphen and underscore allowed. | [default to undefined]
**plan_name** | **string** | Name of the plan. | [default to undefined]
**plan_type** | **string** | Type of the plan. Possible values - PERIODIC, ON_DEMAND. | [default to undefined]
**plan_currency** | **string** | Currency of the plan. | [optional] [default to undefined]
**plan_amount** | **number** | The amount to be charged for PERIODIC plan. This is a conditional parameter, only required for PERIODIC plans. | [optional] [default to undefined]
**plan_max_amount** | **number** | Maximum amount for the plan. | [default to undefined]
**plan_max_cycles** | **number** | Maximum number of payment cycles for the plan. | [optional] [default to undefined]
**plan_intervals** | **number** | Number of billing cycles between charges. | [optional] [default to undefined]
**plan_interval_type** | **string** | Interval type for the plan. Possible values - DAY, WEEK, MONTH, YEAR. | [optional] [default to undefined]
**plan_note** | **string** | Note for the plan. | [optional] [default to undefined]

## Example

```typescript
import { CreateLinkPlanRequest } from 'cashfree-pg';

const instance: CreateLinkPlanRequest = {
    plan_id,
    plan_name,
    plan_type,
    plan_currency,
    plan_amount,
    plan_max_amount,
    plan_max_cycles,
    plan_intervals,
    plan_interval_type,
    plan_note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
