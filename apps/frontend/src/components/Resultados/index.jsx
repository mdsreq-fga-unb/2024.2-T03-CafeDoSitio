import React, { useState, useEffect } from "react";
import produtoService from "../../services/produto.service.js";
import { toast } from 'react-toastify'; // Importação do toast
import {
  Container,
  Title,
  ScrollArea,
  Card
} from "./styled.js";

const Resultados = ({ nomeProduto }) => {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [nomeProdutoEncontrado, setNomeProdutoEncontrado] = useState(""); // Novo estado para o nome do produto

  useEffect(() => {
    const fetchData = async () => {
      if (!nomeProduto) return; // Evita chamadas desnecessárias

      setEstabelecimentos([]); // Limpa os resultados anteriores antes da busca
      setNomeProdutoEncontrado(""); // Limpa o nome do produto anterior

      try {
        const response = await produtoService.buscarProduto(nomeProduto);
        const produtos = response.data;

        if (produtos.length > 0) {
          setNomeProdutoEncontrado(produtos[0].nome); // Atualiza o estado com o nome do produto
          setEstabelecimentos(produtos[0].estabelecimentos || []);
        } else {
          toast.error("Nenhum produto encontrado com esse nome!");
          setEstabelecimentos([]);
        }
      } catch (error) {
        toast.error("Nenhum produto encontrado com esse nome!");
        setEstabelecimentos([]);
      }
    };

    fetchData();
  }, [nomeProduto]); // Dispara a busca quando nomeProduto muda

  return (
    <Container>
      <Title>Resultados</Title>
      <ScrollArea>
        {estabelecimentos.length > 0 ? (
          estabelecimentos.map((estab, index) => (
            <Card key={index}>
              <h2>{nomeProdutoEncontrado}</h2> {/* Nome do produto agora será exibido corretamente */}
              <h3>{estab.nomeEstabelecimento}</h3>
              <p>{estab.rua}, {estab.bairro} - {estab.estado}</p>
              <p>CEP: {estab.cep}</p>
            </Card>
          ))
        ) : (
          <p>Nenhum local encontrado.</p>
        )}
      </ScrollArea>
    </Container>
  );
};

export default Resultados;