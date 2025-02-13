<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@google/generative-ai](./generative-ai.md)

## generative-ai package

## Classes

|  Class | Description |
|  --- | --- |
|  [GoogleAICacheManager](./generative-ai.googleaicachemanager.md) | Class for managing GoogleAI content caches. |
|  [GoogleAIFileManager](./generative-ai.googleaifilemanager.md) | Class for managing GoogleAI file uploads. |

## Enumerations

|  Enumeration | Description |
|  --- | --- |
|  [FileState](./generative-ai.filestate.md) | Processing state of the <code>File</code>. |
|  [FunctionCallingMode](./generative-ai.functioncallingmode.md) |  |
|  [FunctionDeclarationSchemaType](./generative-ai.functiondeclarationschematype.md) | Contains the list of OpenAPI data types as defined by https://swagger.io/docs/specification/data-models/data-types/ |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [CachedContent](./generative-ai.cachedcontent.md) | Describes <code>CachedContent</code> interface for sending to the server (if creating) or received from the server (using getters or list methods). |
|  [CachedContentBase](./generative-ai.cachedcontentbase.md) |  |
|  [CachedContentCreateParams](./generative-ai.cachedcontentcreateparams.md) | Params to pass to [GoogleAICacheManager.create()](./generative-ai.googleaicachemanager.create.md)<!-- -->. |
|  [CachedContentUpdateInputFields](./generative-ai.cachedcontentupdateinputfields.md) | Fields that can be updated in an existing content cache. |
|  [CachedContentUpdateParams](./generative-ai.cachedcontentupdateparams.md) | Params to pass to [GoogleAICacheManager.update()](./generative-ai.googleaicachemanager.update.md)<!-- -->. |
|  [Content](./generative-ai.content.md) | Content type for both prompts and response candidates. |
|  [ErrorDetails](./generative-ai.errordetails.md) | Details object that may be included in an error response. |
|  [FileData](./generative-ai.filedata.md) | Data pointing to a file uploaded with the Files API. |
|  [FileDataPart](./generative-ai.filedatapart.md) | Content part interface if the part represents FunctionResponse. |
|  [FileMetadata](./generative-ai.filemetadata.md) | Metadata to provide alongside a file upload |
|  [FileMetadataResponse](./generative-ai.filemetadataresponse.md) | File metadata response from server. |
|  [FunctionCall](./generative-ai.functioncall.md) | A predicted \[FunctionCall\] returned from the model that contains a string representing the \[FunctionDeclaration.name\] and a structured JSON object containing the parameters and their values. |
|  [FunctionCallingConfig](./generative-ai.functioncallingconfig.md) |  |
|  [FunctionCallPart](./generative-ai.functioncallpart.md) | Content part interface if the part represents FunctionResponse. |
|  [FunctionDeclaration](./generative-ai.functiondeclaration.md) | Structured representation of a function declaration as defined by the \[OpenAPI 3.0 specification\](https://spec.openapis.org/oas/v3.0.3). Included in this declaration are the function name and parameters. This FunctionDeclaration is a representation of a block of code that can be used as a Tool by the model and executed by the client. |
|  [FunctionDeclarationSchema](./generative-ai.functiondeclarationschema.md) | Schema for parameters passed to [FunctionDeclaration.parameters](./generative-ai.functiondeclaration.parameters.md)<!-- -->. |
|  [FunctionDeclarationSchemaProperty](./generative-ai.functiondeclarationschemaproperty.md) | Schema for top-level function declaration |
|  [FunctionDeclarationsTool](./generative-ai.functiondeclarationstool.md) | A FunctionDeclarationsTool is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. |
|  [FunctionResponse](./generative-ai.functionresponse.md) | The result output from a \[FunctionCall\] that contains a string representing the \[FunctionDeclaration.name\] and a structured JSON object containing any output from the function is used as context to the model. This should contain the result of a \[FunctionCall\] made based on model prediction. |
|  [FunctionResponsePart](./generative-ai.functionresponsepart.md) | Content part interface if the part represents FunctionResponse. |
|  [GenerativeContentBlob](./generative-ai.generativecontentblob.md) | Interface for sending an image. |
|  [InlineDataPart](./generative-ai.inlinedatapart.md) | Content part interface if the part represents an image. |
|  [ListCacheResponse](./generative-ai.listcacheresponse.md) |  |
|  [ListFilesResponse](./generative-ai.listfilesresponse.md) | Response from calling [GoogleAIFileManager.listFiles()](./generative-ai.googleaifilemanager.listfiles.md) |
|  [ListParams](./generative-ai.listparams.md) | Params to pass to [GoogleAIFileManager.listFiles()](./generative-ai.googleaifilemanager.listfiles.md) or [GoogleAICacheManager.list()](./generative-ai.googleaicachemanager.list.md) |
|  [RequestOptions](./generative-ai.requestoptions.md) | Params passed to getGenerativeModel() or GoogleAIFileManager(). |
|  [ResponseSchema](./generative-ai.responseschema.md) | Schema passed to <code>GenerationConfig.responseSchema</code> |
|  [RpcStatus](./generative-ai.rpcstatus.md) | Standard RPC error status object. |
|  [Schema](./generative-ai.schema.md) | Schema is used to define the format of input/output data. Represents a select subset of an OpenAPI 3.0 schema object. More fields may be added in the future as needed. |
|  [TextPart](./generative-ai.textpart.md) | Content part interface if the part represents a text string. |
|  [ToolConfig](./generative-ai.toolconfig.md) | Tool config. This config is shared for all tools provided in the request. |
|  [UploadFileResponse](./generative-ai.uploadfileresponse.md) | Response from calling [GoogleAIFileManager.uploadFile()](./generative-ai.googleaifilemanager.uploadfile.md) |
|  [VideoMetadata](./generative-ai.videometadata.md) | Metadata populated when video has been processed. |

## Type Aliases

|  Type Alias | Description |
|  --- | --- |
|  [Part](./generative-ai.part.md) | Content part - includes text or image part types. |
|  [Tool](./generative-ai.tool.md) | Defines a tool that model can call to access external knowledge. |

