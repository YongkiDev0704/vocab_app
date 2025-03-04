import styled from "styled-components";
import { useState } from "react";
import { VocabLevelType } from "@ykvocab/shared";
import { Input } from "./Input";
import { useMutation } from "@apollo/client";

import { CREATE_VOCAB_MUTATION } from "../graphql";

interface VocabInputProp {
  word: string;
  level: VocabLevelType;
  exampleSentence: string;
  exampleSentenceKr: string;
  meaningEn: string;
  meaningKr: string;
  imageUrl: string;
  pronunciationEn: string;
  pronunciationKr: string;
};

export const VocabInput = () => {
  const [form, setForm] = useState<VocabInputProp>({
    word: "",
    level: VocabLevelType.A1, 
    exampleSentence: "",
    exampleSentenceKr: "",
    meaningEn: "",
    meaningKr: "",
    imageUrl: "",
    pronunciationEn: "",
    pronunciationKr: "",
  });

  const [createVocab, { loading, error }] = useMutation(CREATE_VOCAB_MUTATION, {
    onCompleted: (data) => {
      if (data.createVocab.success) {
        alert("Vocab added successfully!");
        resetForm();
      } else {
        alert(`Error: ${data.createVocab.error}`);
      }
    },
    onError: (err) => {
      console.error("Error adding vocab:", err);
    },
  });

  const resetForm = () => {
    setForm({
      word: "",
      level: VocabLevelType.A1,
      exampleSentence: "",
      exampleSentenceKr: "",
      meaningKr: "",
      meaningEn: "",
      imageUrl: "",
      pronunciationEn: "",
      pronunciationKr: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "level" ? (value as VocabLevelType) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createVocab({
      variables: { data: form },
    });
  };

  return (
    <Wrapper>

      <Form onSubmit={handleSubmit}>
        <Input 
          name="word"
          width="80px" 
          placeholder="Word" 
          value={form.word}
          onChange={handleChange}
        />

        <Select name="level" value={form.level} onChange={handleChange}>
          {Object.values(VocabLevelType).map((level) => (
            <Option key={level} value={level}>{level}</Option>
          ))}
        </Select>

        <Input 
          name="exampleSentence"
          width="180px" 
          placeholder="Example Sentence" 
          value={form.exampleSentence}
          onChange={handleChange}
        />
        <Input 
          name="exampleSentenceKr"
          width="180px" 
          placeholder="Example Sentence (KR)" 
          value={form.exampleSentenceKr}
          onChange={handleChange}
        />
        <Input 
          name="meaningEn"
          width="110px" 
          placeholder="Meaning (EN)" 
          value={form.meaningEn}
          onChange={handleChange}
        />
        <Input 
          name="meaningKr"
          width="110px" 
          placeholder="Meaning (KR)" 
          value={form.meaningKr}
          onChange={handleChange}
        />
        <Input 
          name="imageUrl"
          width="100px" 
          placeholder="ImageUrl" 
          value={form.imageUrl}
          onChange={handleChange}
        />
        <Input 
          name="pronunciationEn"
          width="150px" 
          placeholder="pronunciation (En)" 
          value={form.pronunciationEn}
          onChange={handleChange}
        />
        <Input 
          name="pronunciationKr"
          width="150px" 
          placeholder="pronunciation (KR)" 
          value={form.pronunciationKr}
          onChange={handleChange}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Vocab"}
        </Button>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}

      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  padding-left: 20px;
`;

const Select = styled.select`
  width: 80px;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  cursor: pointer;
  &:focus {
    border-color: #4caf50;
  }
`;

const Option = styled.option`
  all: unset;
`;

const Form = styled.form`
  display: flex;
  gap: 12px;
  width: 400px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;
