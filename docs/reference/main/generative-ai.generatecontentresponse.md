<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@google/generative-ai](./generative-ai.md) &gt; [GenerateContentResponse](./generative-ai.generatecontentresponse.md)

## GenerateContentResponse interface

Individual response from [GenerativeModel.generateContent()](./generative-ai.generativemodel.generatecontent.md) and [GenerativeModel.generateContentStream()](./generative-ai.generativemodel.generatecontentstream.md)<!-- -->. `generateContentStream()` will return one in each chunk until the stream is done.

**Signature:**

```typescript
export interface GenerateContentResponse 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [candidates?](./generative-ai.generatecontentresponse.candidates.md) |  | [GenerateContentCandidate](./generative-ai.generatecontentcandidate.md)<!-- -->\[\] | _(Optional)_ Candidate responses from the model. |
|  [promptFeedback?](./generative-ai.generatecontentresponse.promptfeedback.md) |  | [PromptFeedback](./generative-ai.promptfeedback.md) | _(Optional)_ The prompt's feedback related to the content filters. |
|  [usageMetadata?](./generative-ai.generatecontentresponse.usagemetadata.md) |  | [UsageMetadata](./generative-ai.usagemetadata.md) | _(Optional)_ Metadata on the generation request's token usage. |

