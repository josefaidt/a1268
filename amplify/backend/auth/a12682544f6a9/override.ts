import { AmplifyAuthCognitoStackTemplate } from '@aws-amplify/cli-extensibility-helper'

export function override(resources: AmplifyAuthCognitoStackTemplate) {
  const myCustomTenantIdAttribute = {
    attributeDataType: 'String',
    developerOnlyAttribute: false,
    mutable: true,
    name: 'tenantId',
    required: false,
  }
  resources.userPool.schema = [
    ...(resources.userPool.schema as any[]), // Carry over existing attributes (example: email)
    myCustomTenantIdAttribute,
  ]
}
