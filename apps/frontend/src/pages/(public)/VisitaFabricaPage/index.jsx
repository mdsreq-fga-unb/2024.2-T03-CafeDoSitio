import React, { useState, useEffect } from "react";
import Paginacao from "../../../components/Paginacao";
import { Space, Space2, Space3, ImageContainer, Conteudo, Informacoes, QuebraMobile, FlexImagesContainer, Agendamento, Legenda, Vazio } from "./styled";
import { findAllVisita, patchVisita } from "@familiadositio/core";
import ModalVisita from "../../../components/ModalVisita";
import CustomCalendar from "../../../components/CustomCalendar";
import DisponibilityCard from "../../../components/DisponibilityCard";
import { FaExclamationCircle } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS do <ToastContainer />
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";

// IMPORTAÇÃO DE IMAGENS E SVG's:
import VisiteaFabrica from "../../../assets/visitaFabrica.jpg";
import calendario from "../../../assets/calendario.svg";
import VisitaTecnica from "../../../assets/VisitaTecnica.png";
import VisitaTecnica2 from "../../../assets/VisitaTecnica2.png";
import VisitaTecnica3 from "../../../assets/VisitaTecnica3.png";
import atencao from "../../../assets/atencao.svg";
import VisitaTecnica4 from "../../../assets/VisitaTecnica4.png";
import VisitaTecnica5 from "../../../assets/VisitaTecnica5.png";
import VisitaTecnica6 from "../../../assets/VisitaTecnica6.png";


const VisitaFabricaPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [disponibilidades, setDisponibilidades] = useState([]); // Dias disponíveis
  const [agendamentos, setAgendamentos] = useState([]); // Dias agendados
  const [visitas, setVisitas] = useState([]);
  const [visitasFiltradas, setVisitasFiltradas] = useState([]);
  const [visitaSelected, setVisitaSelected] = useState(null);
  const [nomeSobrenome, setNomeSobrenome] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [numeroPessoas, setNumeroPessoas] = useState("1 à 10 Pessoas");
  const [mensagem, setMensagem] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Função chamada quando o usuário seleciona uma data
  const handleDateSelect = (date) => {
   setSelectedDate(date);
  };

  const handleVisitaSelect = (visita) => {
    setVisitaSelected(visita);
  };

  const handleNomeSobrenome = (e) => {
    setNomeSobrenome(e.target.value);
  };

  const handleInstitution = (e) => {
    setInstitution(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNumeroPessoas = (e) => {
    setNumeroPessoas(e.target.value);
  };

  const handleMensagem = (e) => {
    setMensagem(e.target.value);
  };

  const handleIsVisible = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  const validarTelefone = (telefone) => {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/; // Formato (DDD) 00000-0000
    return regex.test(telefone);
  };

  const formatarTelefone = (valor) => {
    // Remove tudo que não é dígito
    const apenasDigitos = valor.replace(/\D/g, "");

    // Aplica a máscara (DDD) 00000-0000
    if (apenasDigitos.length <= 2) {
      return `(${apenasDigitos}`;
    } else if (apenasDigitos.length <= 11) {
      return `(${apenasDigitos.slice(0, 2)}) ${apenasDigitos.slice(2, 7)}-${apenasDigitos.slice(7, 11)}`;
    } else {
      return `(${apenasDigitos.slice(0, 2)}) ${apenasDigitos.slice(2, 7)}-${apenasDigitos.slice(7, 11)}`;
    }
  };

  // Função chamada ao mudar o valor do input
  const handleTelefone = (e) => {
    const valorFormatado = formatarTelefone(e.target.value);
    setTelefone(valorFormatado);
  };

  async function fetchDisponibility(){
    try{
      const response = await findAllVisita();
      const arr = response.data.visita;
      arr.sort((a, b) => {
        if(a.startDateTime < b.startDateTime) return -1;
        if(a.startDateTime > b.startDateTime) return 1;
        return 0;
      });
      setVisitas(arr);
    } catch (err) {
      console.error("Erro ao carregar visitas.")
    }
  };

  const handlePatchVisita = async (e) => {
    e.preventDefault();
    try {
      if (!nomeSobrenome || !email || !telefone || !numeroPessoas || !institution || !mensagem) {
        toast.error("Preencha todos os campos.");
        return;
      }
      else if (!visitaSelected) {
        toast.error("Selecione uma data de disponibilidade.");
        return;
      }
      else if(visitaSelected.status === "agendado") {
        toast.error("Data já agendada.");
        setIsVisible(false);
        return;
      }
      else if (!validarTelefone(telefone)) {
        toast.error("Telefone inválido. Use o padrão (00) 00000-0000.");
        return;
      }
      const payload = {
        status: "solicitado",
        nameVisitor: nomeSobrenome,
        emailVisitor: email,
        phoneVisitor: telefone,
        numberVisitors: numeroPessoas,
        institution: institution,
        message: mensagem,
      };

      await patchVisita(visitaSelected._id, payload);
      toast.success("Agendamento solicitado com sucesso.");
      fetchDisponibility();
      setIsVisible(false);
      setEmail("");
      setNomeSobrenome("");
      setInstitution("");
      setTelefone("");
      setNumeroPessoas("1 à 10 Pessoas");
      setMensagem("");

    } catch (err) {
      console.log(err);
      toast.error("Erro ao solicitar agendamento.");
    }
  }
  

   // Simulação de dados de disponibilidade e agendamento
   useEffect(() => {
    fetchDisponibility();
  }, []);
  useEffect(() => {
    fetchDisponibility();
  }, [selectedDate]);
  useEffect(() => {
      const filtered = visitas.filter((item) => {  
        const matchesStatus = item.status === "disponivel";
  
        return matchesStatus;
      });
      const filtered2 = visitas.filter((item) => {
        const matchesStatus = item.status === "agendado";
        return matchesStatus;
      });
      // Conversão de datas para o formato YYYY-MM-DD
      setDisponibilidades(filtered.map((item) => item.startDateTime.split("T")[0]));
      setAgendamentos(filtered2.map((item) => item.startDateTime.split("T")[0]));
    }, [visitas]);
    useEffect(() => {
      const filtered = visitas.filter((item) => {
        const startDate = new Date(item.startDateTime).toISOString().split("T")[0];
        
        const matchesStartDate = !selectedDate || new Date(selectedDate).toISOString().split("T")[0] === startDate;
        const matchesStatus = item.status != "solicitado";

      return matchesStartDate && matchesStatus;
      });
      setVisitasFiltradas(filtered);
    }, [selectedDate]);


  return (
    <>
      <Paginacao>
       <Link className="page" to={ROUTES.MAIN}>Família do Sítio</Link>
        {" > "}
        <span>Visite a fábrica</span>
     </Paginacao>
      <Space />
      <ToastContainer />

      <ImageContainer>
        <img src={VisiteaFabrica} alt="Visite a fábrica" />
      </ImageContainer>

      <Space2 />

      <Conteudo>

        <Informacoes>
          <div className="redLine"/>
          <QuebraMobile>
          <div className="infos">
            <h1>Visite nossa Fábrica</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortisnisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quisnostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex eacommodo consequat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>

            <h1>O que você precisa saber:</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortisnisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quisnostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex eacommodo consequat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          
            <ul>
              <li>Ut wisi enim ad minim veniam.</li>
              <li>Ut wisi enim ad minim veniam.</li>
              <li>Ut wisi enim ad minim veniam.</li>
              <li>Ut wisi enim ad minim veniam.</li>
            </ul>
          </div>
          <div className="images">
            <img src={VisitaTecnica} alt="Visita" />
            <img src={VisitaTecnica2} alt="Visita" />
            <img src={VisitaTecnica3} alt="Visita" />
          </div>
          </QuebraMobile>
        </Informacoes>


          <h1>Agendamento:</h1>
          <div className="DateInfo">
            <img src={calendario} alt="Calendário" className="calendario"/>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </div>

          <Agendamento>
            <div className="CalendarioFunct">
              <CustomCalendar
                onDateSelect={handleDateSelect}
                disponibilidades={disponibilidades}
                agendamentos={agendamentos}
              />
              <Legenda>
                <div className="legenda legenda1">
                  <div className="colorlegend colorlegend1"/>
                  <label>DATA DISPONÍVEL</label>
                </div>

                <div className="legenda legenda2">
                  <div className="colorlegend colorlegend2"/>
                  <label>DATA ESGOTADA</label>
                </div>

              </Legenda>
            </div>
            <div className="Form">
              <form onSubmit={handleIsVisible}>

                <h1>Informe seus dados:</h1>
                <h3>Selecione a disponibilidade: </h3>
                <div className="visitas-list">
                  { visitasFiltradas.length > 0 ? (
                      visitasFiltradas.map((item, index) => {
                        return ( <DisponibilityCard 
                                    key={index}
                                    initTime={item.startDateTime}
                                    endTime={item.endDateTime}
                                    status={item.status}
                                    // isSelected={idVisita === item.id}
                                    onClick={() => handleVisitaSelect(item)}/>
                                )
                      })
                  ) : (
                    <Vazio>
                      <FaExclamationCircle className="icon"/>
                      <span>Selecione um dia de disponibilidade.</span>
                    </Vazio>
                  )}
                </div>

                <div className="input-zone">
                  <label>Nome e Sobrenome:</label>
                  <input value={nomeSobrenome} type="text" onChange={handleNomeSobrenome} required/>
                </div>
                <div className="input-zone">
                  <label>E-mail:</label>
                  <input value={email} type="email" onChange={handleEmail} required/>
                </div>
                <div className="input-zone">
                  <label>Telefone:</label>
                  <input value={telefone} type="text"  onChange={handleTelefone} required/>
                </div>
                <div className="input-zone">
                  <label>Número de Pessoas:</label>
                  <select onChange={handleNumeroPessoas}>
                    <option value="1"> 1 à 10 Pessoas </option>
                    <option value="1"> 11 à 30 Pessoas </option>
                    <option value="1"> 31 - 60 Pessoas </option>
                    <option value="1"> +60 Pessoas </option>
                  </select>
                </div>
                <div className="input-zone">
                  <label>Instituição:</label>
                  <input type="text" value={institution} onChange={handleInstitution} required/>
                </div>
                <div className="input-zone">
                  <label>Mensagem:</label>
                  <textarea type="text" value={mensagem} onChange={handleMensagem} required/>
                </div>

                <input type="submit" value="Solicitar Agendamento" className="submit" />
              </form>
            </div>
          </Agendamento>

          <div className="attetionDiv">
            <img src={atencao} alt="Atenção" />
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </div>
      </Conteudo>
      <FlexImagesContainer>
        <div>
          <img src={VisitaTecnica4} alt="Visita" />
          <img src={VisitaTecnica5} alt="Visita" className="image2"/>
          <img src={VisitaTecnica6} alt="Visita" />
        </div>
      </FlexImagesContainer>

      <Space3 />

      <ModalVisita visible={isVisible} onClose={handleIsVisible} tittle={"Confirmação de Agendamento"} onClick={handlePatchVisita}>
        <label>A Família do Sítio irá entrar em contato para confirmar seu agendamento em breve. Você tem certeza que deseja solicitar um agendamento para <b>{new Date(selectedDate).toISOString().split("T")[0]}</b>? </label>
      </ModalVisita>

    </>
  );
}

export default VisitaFabricaPage;
