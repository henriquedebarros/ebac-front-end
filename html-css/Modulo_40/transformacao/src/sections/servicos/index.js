import React from 'react';
import Ball from '../../components/Ball';
import Card from '../../components/Card';
import './servicos.scss'

const etapas = [
    {id: "ARM", title: "Armazenagem", body: "O primeiro serviço é garantir que a armazenagem seja feita sem causar perturbações nas vias e não expor os materiais a contaminação"},
    {id: "REC", title: "Recolha", body: "O primeiro serviço é garantir que a armazenagem seja feita sem causar perturbações nas vias e não expor os materiais a contaminação"},
    {id: "TRI", title: "Triagem", body: "O primeiro serviço é garantir que a armazenagem seja feita sem causar perturbações nas vias e não expor os materiais a contaminação"},
    {id: "REU", title: "Reuso", body: "O primeiro serviço é garantir que a armazenagem seja feita sem causar perturbações nas vias e não expor os materiais a contaminação"}
]

function Servicos() {
    return (
        <section className="servicos" id="servicos">
            <Ball type="outline" />
            <h2 className="servicos__title">Serviços</h2>
            <p className="servicos__text">Os serviços oferecidos por esse benefício social são dividor em etapas desde a recolha até o processamento final.</p>
            <ol className="servicos__cards">
                {etapas.map((item, index) => (
                    <Card key={item.id} title={item.title} body={item.body} index={index} />
                ))}
            </ol>
        </section>
    )
}

export default Servicos;