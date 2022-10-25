import React from 'react';
import ListItem from '../../components/ListItem';
import './residuos.scss';

const residuosList = [
    {id: "EMB", color: "rgb(249, 210, 094, 0.3)", icon: "icon_emb", title: "Embalagens", body: "Embalagens de plástico ou metal limpas."},
    {id: "PAP", color: "rgb(065, 118, 210, 0.3)", icon: "icon_pap", title: "Papel", body: "Folhas e pedaços de papel sem sujeira, papelão, cartão e papel reciclado."},
    {id: "VID", color: "rgb(126, 162, 051, 0.3)", icon: "icon_vid", title: "Vidro", body: "Garrafas e potes de vidro limpos e sem tampa."},
    {id: "IND", color: "rgb(074, 080, 061, 0.3)", icon: "icon_ind", title: "Indiferenciado", body: "Todos os outros itens de resíduo ou seletivos sujos ou contaminados."},
    {id: "ORG", color: "rgb(192, 113, 043, 0.3)", icon: "icon_org", title: "Orgânico", body: "Pedaços e cascas de vegetais compostáveis, pedaços de plantas, borras da café."},
    {id: "ELE", color: "rgb(196, 077, 026, 0.3)", icon: "icon_ele", title: "Eletrônico", body: "Produtos eletrônicos sem as baterias e sem vazamentos."}
]

function Residuos() {
    return (
        <section className="residuos" id="residuos">
            <h2 className="residuos__title">Resíduos</h2>
            <p className="residuos__text">Os tipos de resíduos recolhidos e tratados nas ecolihas são de seis tipos diferentes.</p>
            <ul className="residuos__lista">
                {residuosList.map((item, index) => 
                    <ListItem key={item.id} data={residuosList[index]}/>
                )}
            </ul>
        </section>
    )
}

export default Residuos;