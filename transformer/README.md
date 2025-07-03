## 📚 Transformer 학습 목차

이 폴더는 `How Transformer LLMs Work` 강의를 듣고 정리한 내용 입니다.
https://www.deeplearning.ai/short-courses/how-transformer-llms-work/

## 목차

### 1. [Bag of Words](./1.bag-of-words.md)

- Bag of Words(BoW) 개념과 정의
- BoW 프로세스 (Input → Tokenization → Vocabulary → Vector Representation)
- BoW 예시와 벡터 표현 방법
- 용어 정리 (Vocabulary)

### 2. [Word2Vec와 Word Embedding](./2.word-2-vec.md)

- Word2Vec 개념과 신경망 구조
- Word2Vec의 Embedding 원리
- Word Embedding과 차원(Dimension) 설명
- 다양한 임베딩 종류와 Representation Model

### 3. [Encoding & Decoding Context with Attention](./3.encoding-and-decoding-context-with-attention.md)

- Word2Vec의 한계와 문맥(Context) 인코딩
- Autoregressive Decoder와 번역 과정
- Encoder-Decoder 구조의 단계별 설명
- Attention 메커니즘의 도입과 동작 원리

### 4. [Transformers와 현대 NLP 모델](./4.transformers.md)

- Transformer의 등장과 구조
- Transformer Encoder/Decoder의 동작 원리
- BERT: Bidirectional Encoder Representations
- Representation Model의 활용 (Pre-train, Fine-tune)
- Generative Model (GPT 등)
- Context Length의 한계
- 주요 LLM 비교

### 5. [Transformer LLM Architectural Overview](./5.architectural-overview.md)

- Transformer LLM의 주요 컴포넌트 (Tokenizer, Transformer Blocks, LM Head)
- Transformer Blocks의 구조와 역할
- Self-Attention의 세부 동작 (Coreference Resolution, Relevance Scoring, Combining Information)

### 6. [Self-Attention과 Transformer Block의 세부 구조](./6.self-attention.md)

- Transformer Block의 구조
- Self-Attention의 역할과 동작
- Self-Attention의 내부 연산 (Query, Key, Value)
- Multi-Head Attention(MHA)와 병렬 처리
- Sparse Attention의 개념과 방식
- Transformer Block의 주요 하이퍼파라미터

### 7. [최신 트랜스포머 구조의 변화](./7.recent-improvements.md)

- 트랜스포머 구조의 변화 (Positional Encoding, Grouped-query attention, Residual Connection)
- Training LLMs: 데이터 효율과 포지셔널 임베딩
- Rotary Positional Embedding(RoPE)
- Packing 방식과 Naive 방식 비교

---
