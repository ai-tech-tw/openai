# OpenAI <=> Gemini API 轉換閘道

你是否曾經苦於想學習 OpenAI API，
設計屬於自己的 ChatGPT 機器人，
卻不想花錢？

```sh
curl -X POST https://web-tech-tw.eu.org/openai/v1/chat/completions \
    -H "Authorization: Bearer YOUR_GEMINI_API" \
    -H "Content-Type: application/json" \
    -d '{
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Hello"}],
        "temperature": 0.7
    }'
```

## 特別感謝

[zhu327/gemini-openai-proxy](https://github.com/zhu327/gemini-openai-proxy)

這是一個 OpenAI 與 Gemini API 的轉換器，
這個服務便是以這架設的，運作相當簡單、穩定且快速。

特別感謝他做出這麼優秀的專案。

## 其他參考

### zuisong/gemini-openai-proxy

<https://github.com/zuisong/gemini-openai-proxy>

> 這也是一個 OpenAI 與 Gemini API 的轉換器。
> 
> 只是他的 Node.js 版本似乎有點狀況，以及其他的一些考量，就沒有採用了。
> 
> 但仍是一個不錯的選擇，他有提供屬於自己的預覽服務端點。

### BerriAI/litellm

<https://github.com/BerriAI/litellm>

### Portkey-AI/gateway

<https://github.com/Portkey-AI/gateway>

### 其他

其他神奇的 API 轉換閘道。

- https://github.com/songquanpeng/one-api
- https://github.com/RockChinQ/free-one-api
- https://github.com/LLM-Red-Team/kimi-free-api

