/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { genAI } from "./utils/common.js";

async function run(options = {}) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest", ...options });

  const prompt = "One, two, three, ";

  const result = await model.generateContent(prompt);
  console.log(options, "\n" + result.response.text() + "\n");
}

async function runAll() {
  await run();
  await run({ generationConfig: { maxOutputTokens: 3 } });
  await run({ generationConfig: { stopSequences: ["seven"] } });
  await run({ generationConfig: { temperature: 0 } });
}

runAll();
