import React, { useState } from "react";
import * as S from "./styles";
import { MdCheck } from "react-icons/md";
import medalha from "../../../../../../assets/medalha.png";
import books from "../../../../../../assets/books.png";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiHackathon from "../../../../../../config/axiosConfig";
import useUserIdStore from "../../../../../../state/userIdState";

export function TaskItem({
  idStatus,
  title,
  hour,
  initialStatus,
  onUpdateStatus,
}) {
  const [status, setStatus] = useState(initialStatus);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (idParam) => {
      const { data } = await apiHackathon.put(`/class/${idParam}`, {
        status: !status,
      });
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries("dataClass");
      onUpdateStatus(idStatus, !status); // Chama a função de atualização do pai
      setStatus(!status); // Atualiza o estado local
    },
    onError: (data) => {
      console.log("error: ", data.message);
    },
  });

  function handleCheck() {
    mutation.mutate(idStatus);
  }

  return (
    <S.TaskItem status={status}>
      <S.Selected status={status}>
        <MdCheck onClick={handleCheck} />
      </S.Selected>
      <S.Image>
        <img src={status === "pronto" ? medalha : books} alt="status-icon" />
      </S.Image>
      <S.Infos>
        <S.Title status={status}>{title}</S.Title>
        <S.Description status={status}>
          <span>{!status ? "Pendente" : "Concluido"}</span>
          <span>{hour}</span>
        </S.Description>
      </S.Infos>
    </S.TaskItem>
  );
}
