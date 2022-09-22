<script>
export default {
  data() {
    return {
      titulo: 'Jornadas Astrais',
      jornadas: [
      {
        nome: 'Órbita noturna',
        descricao: 'Viagem de grande altitude contemplando os céus noturnos, a luminosidade atmosférica das cidades e apresentação das auroras vistas de cima como nunca antes.'
      },
      {
        nome: 'Terra de longe',
        descricao: 'Planagem em órbita distante da terra para visualização do globo e curvatura da Terra. Esta jornada inclui jantar em baixa gravidade com vista panorâmica.'
      },
      {
        nome: 'Órbita lunar',
        descricao: 'Rota orbital da Terra à Lua e três ciclos de rotação. Inclui o lado escuro da Lua. Sujeito a temporadas pelos movimentos celestes.'
      },
      {
        nome: 'Solo lunar',
        descricao: 'Passeio em solo lunar com roupas de proteção com total segurança em terreno preparado. Pontos de aterrisagem definidos no mapa em mais detalhes.'
      },
      {
        nome: 'Órbita marciana',
        descricao: 'Viagem orbital com visualização de Marte. Sujeita a temporada pelos movimentos planetários. Consulte a descrição para ver meses disponíveis.'
      },
      {
        nome: 'Guia em Marte',
        descricao: 'Visita guiada em solo marciano com coleta de rochas e experimentos. Tempo de estadia limitado devido a radiação cósmica.'
      }
      ]
    }
  }
}
</script>

<template>
  <section id="produtos">
        <div class="container">
            <h2>{{ titulo }}</h2>
            <div class="vitrine">
                <div class="vitrine__item">
                    <h3 class="vitrine__nomeProduto">{{ jornadas[0].nome }}</h3>
                    <img class="vitrine__image vitrine__image-1" src="../assets/vitrine__image-1.jpg">
                    <p class="vitrine__desc">{{ jornadas[0].descricao }}</p>
                    <a href="" class="vitrine__button">Detalhes de {{ jornadas[0].nome }}</a>
                </div>
                <div class="vitrine__item">
                    <h3 class="vitrine__nomeProduto">{{ jornadas[1].nome }}</h3>
                    <img class="vitrine__image vitrine__image-2" src="../assets/vitrine__image-2.jpg">
                    <p class="vitrine__desc">{{ jornadas[1].descricao }}</p>
                    <a href="" class="vitrine__button">Detalhes de {{ jornadas[1].nome }}</a>
                </div>
                <div class="vitrine__item">
                    <h3 class="vitrine__nomeProduto">{{ jornadas[2].nome }}</h3>
                    <img class="vitrine__image vitrine__image-3" src="../assets/vitrine__image-3.jpg">
                    <p class="vitrine__desc">{{ jornadas[2].descricao }}</p>
                    <a href="" class="vitrine__button">Detalhes de {{ jornadas[2].nome }}</a>
                </div>
                <div class="vitrine__item">
                    <h3 class="vitrine__nomeProduto">{{ jornadas[3].nome }}</h3>
                    <img class="vitrine__image vitrine__image-4" src="../assets/vitrine__image-4.jpg">
                    <p class="vitrine__desc">{{ jornadas[3].descricao }}</p>
                    <a href="" class="vitrine__button">Detalhes de {{ jornadas[3].nome }}</a>
                </div>
                <div class="vitrine__item">
                    <h3 class="vitrine__nomeProduto">{{ jornadas[4].nome }}</h3>
                    <img class="vitrine__image vitrine__image-5" src="../assets/vitrine__image-5.jpg">
                    <p class="vitrine__desc">{{ jornadas[4].descricao }}</p>
                    <a href="" class="vitrine__button">Detalhes de {{ jornadas[4].nome }}</a>
                </div>
                <div class="vitrine__item">
                    <h3 class="vitrine__nomeProduto">{{ jornadas[5].nome }}</h3>
                    <img class="vitrine__image vitrine__image-6" src="../assets/vitrine__image-6.jpg">
                    <p class="vitrine__desc">{{ jornadas[5].descricao }}</p>
                    <a href="" class="vitrine__button">Detalhes de {{ jornadas[5].nome }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style>

</style>
