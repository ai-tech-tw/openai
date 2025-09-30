# OpenAI <=> Gemini API 協定轉換閘道

正體中文 | [English](README.md)

[加入我們的 LINE OpenChat ✨](https://web-tech.tw/ai)

[閘道原始碼](https://github.com/ai-tech-tw/ironnect)

[線上試用](https://ai.web-tech.tw/openai)

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
> 協定轉換閘道 API 基底端點： <https://web-tech.tw/recv/openai/v1>

## 免申請試用金鑰

連申請金鑰都懶嗎？！
沒關係，我們為公眾提供了免費試用憑證！

可是每個憑證可用額度有限，容易資源耗盡。
仍舊建議自行申請屬於自己的金鑰。

| 供應商 | 金鑰                      |
| ------ | ------------------------- |
| Nymph  | `nymph zr3Pjc68z4bOtw==`  |
| Gemini | `gemini zr3Pjc68z4bOtw==` |
| Groq   | `groq zr3Pjc68z4bOtw==`   |
| Iron   | `iron zr3Pjc68z4bOtw==`   |

## 使用方法

在終端機中配合 `curl` 使用：

```sh
API_BASE_URL="https://web-tech.tw/recv/openai/v1"
API_KEY="nymph zr3Pjc68z4bOtw==" # 你的 API 金鑰

curl -X POST "$API_BASE_URL/chat/completions" \
    -H "Authorization: Bearer $API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
        "model": "auto",
        "messages": [{"role": "user", "content": "Hello"}],
        "temperature": 0.7
    }'
```

在終端機中配合 `codex` 使用：

```sh
npm install -g @openai/codex

tee -a "$HOME/.bashrc" <<EOF
# Codex
export NYMPH_API_KEY="gemini zr3Pjc68z4bOtw==" # 你的 API 金鑰
EOF

tee "$HOME/.codex/config.toml" <<EOF
model_provider = "nymph"
model = "gemini-2.0-flash"

[model_providers.nymph]
name = "Nymph"
base_url = "https://web-tech.tw/recv/openai/v1"
env_key = "NYMPH_API_KEY"
EOF

source "$HOME/.bashrc"
codex "explain ipv6 vs ipv4"
```

在 Python 配合 `openai` 使用：

```python
from openai import OpenAI

api_base_url = "https://web-tech.tw/recv/openai/v1"
api_key = "nymph zr3Pjc68z4bOtw==" # 你的 API 金鑰

client = OpenAI(
    api_key=api_key,
    base_url=api_base_url,
)

completion = client.chat.completions.create(
    model="auto",
    messages=[
        {"role": "user", "content": "Hello"}
    ],
    temperature=0.7,
)

print(completion)
```

在 Python 配合 `requests` 使用：

```python
from requests import post

api_base_url = "https://web-tech.tw/recv/openai/v1"
api_key = "nymph zr3Pjc68z4bOtw==" # 你的 API 金鑰

response = post(
    f"{api_base_url}/chat/completions",
    headers={
        "Authorization": f"Bearer {api_key}",
    },
    json={
        "model": "auto",
        "messages": [{"role": "user", "content": "Hello"}],
        "temperature": 0.7
    }
)

print(response.json())
```

## 特別感謝

### Google Gemini

> 感謝 Google 提供的 Gemini API 服務，
> 讓我們可以免費使用 OpenAI API 進行開發與學習。

## 其他參考

### zhu327/gemini-openai-proxy

<https://github.com/zhu327/gemini-openai-proxy>

> 這是一個 OpenAI 與 Gemini API 的轉換器。
>
> 這個服務原先是以這個程式架設的，
> 運作相當簡單、穩定且快速。
>
> 特別感謝他做出這麼優秀的專案。

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
