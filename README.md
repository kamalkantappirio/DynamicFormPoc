# :space_invader: React Native Template TypeScript

<p>
  <a href="https://travis-ci.org/react-native-community/react-native-template-typescript">
    <img alt="Build Status" src="https://img.shields.io/travis/react-native-community/react-native-template-typescript.svg" target="_blank" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> Clean and minimalist React Native template for a quick start with TypeScript.

## :star: Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- Consistent with the default React Native template
- Minimal additional dependencies

## :arrow_forward: Usage

> `react-native@0.61.0` or higher

```sh
npx react-native init MyApp --template react-native-template-typescript
```

> `react-native@0.60.x`

```sh
npx react-native init MyApp --template react-native-template-typescript@6.2.0
```

### Creating dynamic form with using following json
{ 

fields: [ 
    { 
      label: 'Division', // key from localization file 
      api_name: 'division__c', // Api name in service 
      input_type: 'drop_down', 
      validation: [{ validation_msg_key: 'empty_division', rule:'1 division must selected'], 
      Options: [{value:'', label:''}], 
      serviceCallName: getLocalDivisions/getWebDivisions, 
      isSingleSelect: true, 
      dependentValue: null,
      selectedValues:'JR__c/ORTH__c'
    },
    { 
      label: 'Branch', // key from localization file 
      api_name: 'branch__c', // Api name in service 
      input_type: 'drop_down', 
      validation: [{ validation_msg_key: 'empty_brnach', rule:'1 branch must selected'], 
      Options: [{value:'', label:''}], 
      serviceCallName: getLocalBranches/getWebBranches, 
      isSingleSelect: true, 
      dependentValue: 'division__c',
      selectedValues:'ABC'
    }
]





