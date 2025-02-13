<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@google/generative-ai](./generative-ai.md) &gt; [GenerationConfig](./generative-ai.generationconfig.md)

## GenerationConfig interface

Config options for content-related requests

**Signature:**

```typescript
export interface GenerationConfig 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [candidateCount?](./generative-ai.generationconfig.candidatecount.md) |  | number | _(Optional)_ |
|  [maxOutputTokens?](./generative-ai.generationconfig.maxoutputtokens.md) |  | number | _(Optional)_ |
|  [responseMimeType?](./generative-ai.generationconfig.responsemimetype.md) |  | string | _(Optional)_ Output response mimetype of the generated candidate text. Supported mimetype: <code>text/plain</code>: (default) Text output. <code>application/json</code>: JSON response in the candidates. |
|  [responseSchema?](./generative-ai.generationconfig.responseschema.md) |  | [ResponseSchema](./generative-ai.responseschema.md) | _(Optional)_ Output response schema of the generated candidate text. Note: This only applies when the specified <code>responseMIMEType</code> supports a schema; currently this is limited to <code>application/json</code>. |
|  [stopSequences?](./generative-ai.generationconfig.stopsequences.md) |  | string\[\] | _(Optional)_ |
|  [temperature?](./generative-ai.generationconfig.temperature.md) |  | number | _(Optional)_ |
|  [topK?](./generative-ai.generationconfig.topk.md) |  | number | _(Optional)_ |
|  [topP?](./generative-ai.generationconfig.topp.md) |  | number | _(Optional)_ |

