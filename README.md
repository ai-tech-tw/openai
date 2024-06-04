# OpenAI <=> Gemini API Route Gateway

[正體中文](README.zh-TW.md) | English

Have you ever struggled to learn the OpenAI API,
wanting to design your own ChatGPT robot,
but don't want to spend money?

Through Google Gemini,
get your own free version of the OpenAI API!

> Apply for "YOUR_GEMINI_API": <https://makersuite.google.com/app/apikey>

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

## Special Thanks

[zhu327/gemini-openai-proxy](https://github.com/zhu327/gemini-openai-proxy)

This is a converter between OpenAI and Gemini API,
this service is set up with this, it operates very simply, stably and quickly.

Special thanks to him for making such an excellent project.

## Other References

### zuisong/gemini-openai-proxy

<https://github.com/zuisong/gemini-openai-proxy>

> This is also a converter between OpenAI and Gemini API.
> 
> It's just that his Node.js version seems to have some problems, and other considerations, so it was not adopted.
> 
> But it is still a good choice, he provides his own preview service endpoint.

### BerriAI/litellm

<https://github.com/BerriAI/litellm>

> A lightweight, fast, and easy-to-use API for OpenAI's GPT-3 and GPT-4 models.

### Portkey-AI/gateway

<https://github.com/Portkey-AI/gateway>

> The gateway streamlines requests to 200+ open & closed source models with a unified API.

### Others

Other magical API route gateways.

- https://github.com/songquanpeng/one-api
- https://github.com/RockChinQ/free-one-api
- https://github.com/LLM-Red-Team/kimi-free-api
