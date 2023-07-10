import React from 'react';
import { BookOutlined, EditOutlined, HomeOutlined, InfoCircleOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;



const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};


const App: React.FC = () => {

  return(
    /*GESTIONE LAYOUT PER TUTTE LE PAGINE*/
    <Layout>

  {/*HEADER CON LOGO, TITOLO E BARRA DI RICERCA*/}
 

 




<Menu onClick={onClick} style={{ width: 256, height: '100vh', position: 'fixed', left: 0, top: 80, bottom: 0,}} mode="vertical">
    <Menu.Item key="home" icon={<HomeOutlined />}>
      Home
    </Menu.Item>
    <SubMenu key="organigramma" icon={<SolutionOutlined />} title="Organigramma">
      <Menu.Item key="sistema" icon={<UserOutlined />}>
        Figure di Sistema
      </Menu.Item>
      <Menu.Item key="pcto" icon={<UserOutlined />}>
        PCTO
      </Menu.Item>

      <Menu.Item key="tematiche" icon={<UserOutlined />}>
        Figure Tematiche
      </Menu.Item>

      <Menu.Item key="strumentali" icon={<UserOutlined />}>
        Funzioni Strumentali
      </Menu.Item>

      <Menu.Item key="presidenza" icon={<UserOutlined />}>
        Ufficio Presidenza
      </Menu.Item>

      <Menu.Item key="segreteria" icon={<UserOutlined />}>
        Uffico Segreteria
      </Menu.Item>
    </SubMenu> 
    
    <SubMenu key="circolari" icon={<InfoCircleOutlined />} title="Circolari">
      <Menu.Item key="circolari-diurno" icon={<UserOutlined />}>
        Circolari Diurno
      </Menu.Item>

      <Menu.Item key="circolari-serale" icon={<UserOutlined />}>
        Circolari Serale
      </Menu.Item>

      <Menu.Item key="circolari-2020" icon={<UserOutlined />}>
        Circolari 2020
      </Menu.Item>

      <Menu.Item key="circolari-2021" icon={<UserOutlined />}>
        Circolari 2021
      </Menu.Item>

    </SubMenu>
    <SubMenu key="offerta-formativa" icon={<BookOutlined />} title="Offerta Formativa">
      <Menu.Item key="ecdl" icon={<EditOutlined />}>
        ECDL
      </Menu.Item>
      <Menu.Item key="cisco" icon={<BookOutlined />}>
        Cisco
      </Menu.Item>
      <Menu.Item key="erasmus" icon={<UserOutlined />}>
        Erasmus
      </Menu.Item>
      <Menu.Item key="zero-robotics" icon={<UserOutlined />}>
        Zero Robotics
      </Menu.Item>
      <Menu.Item key="nao-challenge" icon={<UserOutlined />}>
        Nao Challenge
      </Menu.Item>
      <Menu.Item key="cambridge" icon={<UserOutlined />}>
        Cambridge
      </Menu.Item>
    </SubMenu>

    <SubMenu key="studenti" icon={<UserOutlined />} title="Studenti">
      <SubMenu key="modulistica-studenti" title="Modulistica" icon={<EditOutlined />}>
        <Menu.Item key="cambio-specializzazione" icon={<InfoCircleOutlined />}>
          Cambio specializzazione
        </Menu.Item>
        <Menu.Item key="richiesta-deroga" icon={<InfoCircleOutlined />}>
          Richiesta deroga
        </Menu.Item>
        <Menu.Item key="crediti-formativi" icon={<InfoCircleOutlined />}>
          Domanda Crediti Formativi
        </Menu.Item>
        <Menu.Item key="certificazione-medica" icon={<InfoCircleOutlined />}>
          Modello Certificazione Medica e PDP
        </Menu.Item>
        <Menu.Item key="conferma-iscrizione" icon={<InfoCircleOutlined />}>
          Conferma Iscrizione
        </Menu.Item>
        <Menu.Item key="nulla-osta" icon={<InfoCircleOutlined />}>
          Nulla Osta - Trasferimento
        </Menu.Item>
        <Menu.Item key="non-iscrizione" icon={<InfoCircleOutlined />}>
          Non Conferma Iscrizione
        </Menu.Item>
        <Menu.Item key="esonero-fisica" icon={<InfoCircleOutlined />}>
          Esonero Ed. Fisica
        </Menu.Item>
              <Menu.Item key="assemblea-classe" icon={<InfoCircleOutlined />}>
          Richiesta Assemblea di Classe
        </Menu.Item>
        <Menu.Item key="acquisto-libro" icon={<InfoCircleOutlined />}>
          Contributo Acquisto Libri
        </Menu.Item>
        <Menu.Item key="autorizzazione" icon={<InfoCircleOutlined />}>
          Autorizzazione Generica
        </Menu.Item>
        <Menu.Item key="ingresso-uscita" icon={<InfoCircleOutlined />}>
          Richiesta Ingresso Posticipato - Uscita Anticipata
        </Menu.Item>
        <Menu.Item key="iscrizione-serale" icon={<InfoCircleOutlined />}>
          Iscrizione Corso Serale
        </Menu.Item>
        </SubMenu>
       <SubMenu key="libri" icon={<UserOutlined />} title="Libri di Testo">
        <Menu.Item key="libri-tecnologico" icon={<InfoCircleOutlined />}>
          Tecnologico
        </Menu.Item>
        <Menu.Item key="libri-professionale" icon={<InfoCircleOutlined />}>
          Professionale
        </Menu.Item>
        <Menu.Item key="libri-serale" icon={<InfoCircleOutlined />}>
          Serale
        </Menu.Item>
        </SubMenu>
        <Menu.Item key="psicologia" icon={<InfoCircleOutlined />}>
          Sportello di Psicologia
        </Menu.Item>
        <Menu.Item key="registro-studente" icon={<InfoCircleOutlined />}>
          Registro Elettronico
        </Menu.Item>

        <Menu.Item key="giochiamo" icon={<InfoCircleOutlined />}>
          Giochiamo Insieme
        </Menu.Item>
      </SubMenu>

      <SubMenu key="docenti" icon={<UserOutlined />} title="Docenti">
      <SubMenu key="modulistica" title="Modulistica" icon={<EditOutlined />}>
        <Menu.Item key="scrutini" icon={<InfoCircleOutlined />}>
          Vademecum Scrutini Fine Anno
        </Menu.Item>
        <Menu.Item key="modulistica-docenti" icon={<InfoCircleOutlined />}>
          Modulistica Docenti
        </Menu.Item>
        <Menu.Item key="percorsi-trasversali" icon={<InfoCircleOutlined />}>
          Percorsi per le Competenze Trasversali
        </Menu.Item>
        <Menu.Item key="15-maggio" icon={<InfoCircleOutlined />}>
          Vademecum Documentazione 15 Maggio
        </Menu.Item>
        <Menu.Item key="libri-testo" icon={<InfoCircleOutlined />}>
          Vademecum Libri di Testo
        </Menu.Item>
        </SubMenu>

        <SubMenu key="dsa" title="DSA" icon={<EditOutlined />}>
        <Menu.Item key="linea-guida" icon={<InfoCircleOutlined />}>
          Linee Guida sui DSA
        </Menu.Item>
        <Menu.Item key="piano-didattico" icon={<InfoCircleOutlined />}>
          Piano Didattico Personalizzato
        </Menu.Item>
        </SubMenu>


        <SubMenu key="bes" title="BES" icon={<EditOutlined />}>
        <Menu.Item key="certificato-crediti-formativi" icon={<InfoCircleOutlined />}>
          Certificato Crediti Formativi
        </Menu.Item>
        <Menu.Item key="pei-diff" icon={<InfoCircleOutlined />}>
          PEI Differenziato
        </Menu.Item>
        <Menu.Item key="certificazione-medica-pdp" icon={<InfoCircleOutlined />}>
          Modello Consegna Certificazione Medica e Richiesta PDP
        </Menu.Item>
        <Menu.Item key="pdp" icon={<InfoCircleOutlined />}>
          Modello PDP Alunni di Cittadinanza italiana BES
        </Menu.Item>
        <Menu.Item key="pei-minimi" icon={<InfoCircleOutlined />}>
          PEI Obiettivi Minimi
        </Menu.Item>
        <Menu.Item key="inclusione" icon={<InfoCircleOutlined />}>
          Piano Annuale per L'Inclusività
        </Menu.Item>
 
        <Menu.Item key="profilo-dinamico" icon={<InfoCircleOutlined />}>
          Profilo Dinamico Funzionale
        </Menu.Item>
       </SubMenu>
        <SubMenu key="programmazione-didattica" title="Programmazione Didattica" icon={<EditOutlined />}>
        <Menu.Item key="programmazione-differenziale" icon={<InfoCircleOutlined />}>
          Obiettivi Differenziali
        </Menu.Item>
        <Menu.Item key="programmazione-minimi" icon={<InfoCircleOutlined />}>
        Obiettivi Minimi
        </Menu.Item>
        </SubMenu>


      <Menu.Item key="registro-docente" icon={<InfoCircleOutlined />}>
          Registro Elettronico
        </Menu.Item>
        <Menu.Item key="dispersione-scolastica" icon={<InfoCircleOutlined />}>
          Dispersione Scolastica
        </Menu.Item>
        
        <Menu.Item key="piano-attività" icon={<InfoCircleOutlined />}>
          Piano Attività
        </Menu.Item>

        <Menu.Item key="dipartimenti" icon={<InfoCircleOutlined />}>
          Dipartimenti
        </Menu.Item>

        <Menu.Item key="formazione-docenti" icon={<InfoCircleOutlined />}>
          Formazione Docenti
        </Menu.Item>

        <Menu.Item key="regolamento-istituto" icon={<InfoCircleOutlined />}>
          Regolamento Istituto
        </Menu.Item>

        <Menu.Item key="patto-educativo" icon={<InfoCircleOutlined />}>
          Patto Educativo
        </Menu.Item>
          </SubMenu>
  </Menu>


    
    </Layout>
  )
}

export default App;