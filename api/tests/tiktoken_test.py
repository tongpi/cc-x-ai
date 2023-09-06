from langchain.llms import OpenAI
from langchain.chains.summarize import load_summarize_chain
from langchain.text_splitter import RecursiveCharacterTextSplitter
import tiktoken_ext.openai_public
import inspect
import os
import tiktoken
import hashlib

# blobpath = "p50k_base.tiktoken"
# blobpath = "cl100k_base.tiktoken"
blobpath = "vocab.bpe"

cache_key = hashlib.sha1(blobpath.encode()).hexdigest()
print(cache_key)
tiktoken_cache_dir = "../tiktoken_cache"
os.environ["TIKTOKEN_CACHE_DIR"] = tiktoken_cache_dir

assert os.path.exists(os.path.join(tiktoken_cache_dir,"9b5ad71b2ce5302211f9c61530b329a4922fc6a4"))

print("========1======================================")
print(dir(tiktoken_ext.openai_public))

print("=======2=======================================")
# The encoder we want is cl100k_base, we see this as a possible function

# print(inspect.getsource(tiktoken_ext.openai_public.cl100k_base))
# print("=======3=======================================")
# print(inspect.getsource(tiktoken_ext.openai_public.p50k_base))
# print("=======4=======================================")

for enc_name in tiktoken.list_encoding_names():
    # encoding = tiktoken.get_encoding(enc_name)
    model_name="text-embedding-ada-002"
    encoding = tiktoken.encoding_for_model(model_name)    
    print(enc_name,encoding)
    print(encoding.encode("Hello, world"))

# encoding = tiktoken.get_encoding("p50k_base")
# encoding = tiktoken.get_encoding("p50k_edit")
# encoding = tiktoken.get_encoding("r50k_base")
# encoding = tiktoken.get_encoding("gpt2")
# encoding = tiktoken.get_encoding("load_tiktoken_bpe")
# print(encoding.encode("Hello, world"))

# model_name="gpt-4"
# enc = tiktoken.encoding_for_model(model_name)
# print("-------------111--------")
# print(model_name,enc)
# print("-------------111--------")
# model_name="gpt-3.5-turbo"
# enc = tiktoken.encoding_for_model(model_name)
# print("-------------111--------")
# print(model_name,enc)
# print("-------------111--------")
# model_name="text-embedding-ada-002"
# enc = tiktoken.encoding_for_model(model_name)
# print("-------------111--------")
# print(model_name,enc)
# print("-------------111--------")

os.environ["OPENAI_API_BASE"] = "http://192.168.15.130:13090/v1"
os.environ["OPENAI_API_KEY"] = "ddddddddddddddddddddddddddddd"

llm = OpenAI(temperature=0)
with open('../README.md', 'r',encoding="utf-8") as file:
    text = file.read()

# Printing the first 285 characters as a preview
print (text[:285])
num_tokens = llm.get_num_tokens(text)

print (f"There are {num_tokens} tokens in your file")
