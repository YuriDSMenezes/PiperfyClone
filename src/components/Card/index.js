import React from "react";
import { useDrag } from "react-dnd";

import { Container, Label } from "./styles";

export default function Card({ data }) {
  const [{ isDragging }, dragRef] = useDrag({
    //estilizar o item que está sendo arrastado, pega as props e desestrutura pegando o isDragging
    item: { type: "CARD" },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <header>
        {data.labels.map(label => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="avatar" />}
      {/* so mostra imagem se tiver data.user  */}
    </Container>
  );
}
