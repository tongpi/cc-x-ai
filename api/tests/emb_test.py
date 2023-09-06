import os

os.environ["OPENAI_API_BASE"] = "http://192.168.15.130:13090/v1"
os.environ["OPENAI_API_KEY"] = "ddddddddddddddddddddddddddddd"

from langchain.embeddings import OpenAIEmbeddings

embeddings = OpenAIEmbeddings()
query_result = embeddings.embed_query("什么是chatgpt？")
print(query_result)