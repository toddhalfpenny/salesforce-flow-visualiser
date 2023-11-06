# Salesforce Flow Visualiser

Utility for parsing Salesforce Flow meta.xml to text-based graphical formats such as [mermaid](https://Mermaid.js.org/) and [PlantUML](https://plantuml.com/).

## Installtion

```
npm i salesforce-flow-visualiser
```

## Usage

```
import { parseFlow } from 'salesforce-flow-visualiser';

# Pass in XML string and get back a markdown string that includes mermaid representation of the Salesforce Flow

const mermaidStr = await parseFlow(<YourXMLStr>, 'mermaid', {outputAsMarkdown :true});
```

## Render Language Support
* [Mermaid](https://mermaid.js.org/) 
* [PlantUML](https://plantuml.com/)


## Roadmap / To do
* Tests... yeah of course
* Move each language out to it's own file
* Options... things like conditional wrapping into .md output
* Lint warnings?
* Other render engines?

## Contributing / Development

### Testing

#### Unit tests
We're using jest.
```
npm run test
```

#### To test locally
* Build the package (as below)
* In the *salesforce-flow-visualiser* directory
```
npm link
```
* In the project dir of the project that is using **salesforce-flow-visualiser**
```
npm link salesforce-flow-visualiser
```

### Build
We're using tsup
```
npm run build
```

### Publishing
```
```