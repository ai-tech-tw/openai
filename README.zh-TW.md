# OpenAI <=> Gemini API 協定轉換閘道

正體中文 | [English](README.md)

[加入我們的 LINE OpenChat ✨](https://ncurl.xyz/s/wPDojAySg)

你是否曾經苦於想學習 OpenAI API，
設計屬於自己的 ChatGPT 機器人，
卻不想花錢？

透過 Google Gemini，
取得屬於自己的免費版 OpenAI API！

我們免費提供了一個 OpenAI API 轉換閘道，
透過這個服務，你可以使用 OpenAI API，
進行開發、測試與學習，不用花費一分錢。

> 申請 "你的 Gemini API 金鑰"： <https://makersuite.google.com/app/apikey>
> 
> 協定轉換閘道 API 基底端點： <https://web-tech-tw.eu.org/openai/v1>

## 使用方法

在終端機中配合 `curl` 使用：

```sh
API_BASE_URL="https://web-tech-tw.eu.org/openai/v1"
API_KEY="你的 Gemini API 金鑰"

curl -X POST "$API_BASE_URL/chat/completions" \
    -H "Authorization: Bearer $API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Hello"}],
        "temperature": 0.7
    }'
```

在 Python 配合 `openai` 使用：

```python
from openai import OpenAI

api_base_url = "https://web-tech-tw.eu.org/openai/v1"
api_key = "你的 Gemini API 金鑰"

client = OpenAI(
    api_key=api_key,
    base_url=api_base_url,
)

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "user", "content": "Hello"}
  ],
)

print(completion)
```

在 Python 配合 `requests` 使用：

```python
from requests import post

api_base_url = "https://web-tech-tw.eu.org/openai/v1"
api_key = "你的 Gemini API 金鑰"

response = post(
    f"{api_base_url}/chat/completions",
    headers={
        "Authorization": f"Bearer {api_key}",
    },
    json={
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Hello"}],
        "temperature": 0.7
    }
)

print(response.json())
```

## API 模型對應表

| OpenAI API 模型      | Gemini API 模型              |
| -------------------- | ---------------------------- |
| gpt-3.5-turbo        | gemini-1.0-pro-latest        |
| gpt-4                | gemini-1.5-flash-latest      |
| gpt-4-turbo-preview  | gemini-1.5-pro-latest        |
| gpt-4-vision-preview | gemini-1.0-pro-vision-latest |

## 特別感謝

### zhu327/gemini-openai-proxy

<https://github.com/zhu327/gemini-openai-proxy>

> 這是一個 OpenAI 與 Gemini API 的轉換器，
> 這個服務便是以這架設的，運作相當簡單、穩定且快速。
> 
> 特別感謝他做出這麼優秀的專案。

### Google Gemini

> 感謝 Google 提供的 Gemini API 服務，
> 讓我們可以免費使用 OpenAI API 進行開發與學習。

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

> 一個輕量、快速且易於使用的 OpenAI GPT-3 與 GPT-4 模型 API。

### Portkey-AI/gateway

<https://github.com/Portkey-AI/gateway>

> 這個閘道簡化了對 200+ 個開源與專有模型的請求，並統一了其 API 通訊協議。

### 其他

其他神奇的協定轉換閘道。

- <https://github.com/songquanpeng/one-api>
- <https://github.com/RockChinQ/free-one-api>
- <https://github.com/LLM-Red-Team/kimi-free-api>
