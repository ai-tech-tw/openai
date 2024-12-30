// ironnect/client.js
// SPDX-License-Identifier: MIT
// https://github.com/ai-tech-tw/ironnect

/**
 * Randomly choose an element from an array.
 * @param {Array<object>} choices The array of choices.
 * @return {object} The randomly chosen element.
 */
function choose(choices) {
    const seed = Math.random();
    const index = Math.floor(seed * choices.length);
    return choices[index];
}

/**
 * Create chat completions using the AI model.
 * @param {object} args The arguments to create chat completions.
 * @return {Promise<object>} The response from the AI.
 */
async function createChatCompletions(args) {
    const baseUrl = "https://web-tech.tw/recv/openai/v1";
    const accessToken = "groq zr3Pjc68z4bOtw==";
    const requestUrl = `${baseUrl}/chat/completions`;
    const response = await fetch(requestUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(args),
    });
    return await response.json();
}

/**
 * Chat with the AI.
 * @param {Array<object>} chatHistory The message box to store chat history.
 * @param {string} chatModel The chat model to chat with the AI.
 * @param {string} prompt The prompt to chat with the AI.
 * @return {Promise<string>} The response from the AI.
 */
async function chatWithAI(chatHistory, chatModel, prompt) {
    const userPromptMessage = {
        role: "user",
        content: prompt,
    };

    const response = await createChatCompletions({
        model: chatModel,
        messages: [
            ...chatHistory,
            userPromptMessage,
        ],
    });

    const choice = choose(response.choices);
    const reply = choice.message.content;
    const assistantReplyMessage = {
        role: "assistant",
        content: reply,
    };

    chatHistory.push(
        userPromptMessage,
        assistantReplyMessage,
    );
    if (chatHistory.length > 30) {
        chatHistory.shift();
        chatHistory.shift();
    }

    return reply;
}

/**
 * Slice the message content into multiple snippets.
 * @param {string} content - The content to slice.
 * @param {number} maxLength - The maximum length of each snippet.
 * @param {string} separator - The separator to split the content.
 * @return {Array<string>} The sliced snippets.
 */
function sliceContent(content, maxLength, separator = "\n") {
    const substrings = content.split(separator);
    const snippets = [];

    let lastSnippet = "";
    for (const text of substrings) {
        if (!text) {
            lastSnippet += separator;
            continue;
        }
        if (text.length + lastSnippet.length < maxLength) {
            lastSnippet += text;
            continue;
        }
        snippets.push(lastSnippet.trim());
        lastSnippet = "";
    }
    if (lastSnippet) {
        snippets.push(lastSnippet.trim());
    }

    return snippets;
}
