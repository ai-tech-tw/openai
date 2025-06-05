# OpenAI <=> Gemini API Protocol Conversion Gateway

[正體中文](README.zh-TW.md) | English

[Join our LINE OpenChat ✨](https://web-tech.tw/ai)

[Gateway Source Code](https://github.com/ai-tech-tw/ironnect)

[Online Demo](https://ai.web-tech.tw/openai)

Have you ever struggled to learn the OpenAI API,
wanting to design your own ChatGPT robot,
but don't want to spend money?

Through Google Gemini,
get your own free version of the OpenAI API!

We provide a free OpenAI API conversion gateway,
through this service, you can use the OpenAI API,
for development, testing, and learning, without spending a penny.

> Apply for "YOUR_GEMINI_API_KEY": <https://makersuite.google.com/app/apikey>
>
> Protocol Conversion Gateway base endpoint: <https://web-tech.tw/recv/openai/v1>

## Trial Tokens

Too lazy to even apply for a key?!
No problem, we offer free trial credentials for public use!

However, each credential has a limited quota and can be easily exhausted.
It is still recommended to apply for your own personal key.

| Provider | Token                     |
| -------- | ------------------------- |
| Gemini   | `gemini zr3Pjc68z4bOtw==` |
| Groq     | `groq zr3Pjc68z4bOtw==`   |

## Usage

Using in the terminal with `curl`:

```sh
API_BASE_URL="https://web-tech.tw/recv/openai/v1"
API_KEY="YOUR_GEMINI_API_KEY"

curl -X POST "$API_BASE_URL/chat/completions" \
    -H "Authorization: Bearer $API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
        "model": "gemini-1.5-flash",
        "messages": [{"role": "user", "content": "Hello"}],
        "temperature": 0.7
    }'
```

Using in Python with `openai`:

```python
from openai import OpenAI

api_base_url = "https://web-tech.tw/recv/openai/v1"
api_key = "YOUR_GEMINI_API_KEY"

client = OpenAI(
    api_key=api_key,
    base_url=api_base_url,
)

completion = client.chat.completions.create(
    model="gemini-1.5-flash",
    messages=[
        {"role": "user", "content": "Hello"}
    ],
    temperature=0.7,
)

print(completion)
```

Using in Python with `requests`:

```python
from requests import post

api_base_url = "https://web-tech.tw/recv/openai/v1"
api_key = "YOUR_GEMINI_API_KEY"

response = post(
    f"{api_base_url}/chat/completions",
    headers={
        "Authorization": f"Bearer {api_key}",
    },
    json={
        "model": "gemini-1.5-flash",
        "messages": [{"role": "user", "content": "Hello"}],
        "temperature": 0.7
    }
)

print(response.json())
```

## Special Thanks

### Google Gemini

> Thanks to Google for providing the Gemini API service,
> which allows us to use the OpenAI API for development and learning for free.

## Other References

### zhu327/gemini-openai-proxy

<https://github.com/zhu327/gemini-openai-proxy>

> This is a converter between OpenAI and Gemini API.
>
> This service was set up with this originally,
> it operates very simply, stably and quickly.
>
> Special thanks to him for making such an excellent project.

### zuisong/gemini-openai-proxy

<https://github.com/zuisong/gemini-openai-proxy>

> This is also a converter between OpenAI and Gemini API.
>
> It's just that his Node.js version seems to have some problems,
> and other considerations, so it was not adopted.
>
> But it is still a good choice, he provides his own preview service endpoint.

### BerriAI/litellm

<https://github.com/BerriAI/litellm>

> A lightweight, fast, and easy-to-use API for OpenAI's GPT-3 and GPT-4 models.

### Portkey-AI/gateway

<https://github.com/Portkey-AI/gateway>

> The gateway streamlines requests to 200+ open & closed source models with a unified API.

### Others

Other magical Protocol Conversion Gateways.

- <https://github.com/songquanpeng/one-api>
- <https://github.com/RockChinQ/free-one-api>
- <https://github.com/LLM-Red-Team/kimi-free-api>
