class Notas_semestre {
    constructor(...valores) {
        this.notas = valores;
        this.media = 0;
        this.status = "";
    }

    mediafinal() {
        return this.calcMedia(this.notas);
    }
  
    statusfinal() {
        this.calcMedia(this.notas);
        return this.verAprovacao(this.media);
    }

    calcMedia(valores) {
        let mediaLocal = 0;
        valores.forEach(nota => {
            mediaLocal += nota;
        })
        mediaLocal = mediaLocal / valores.length;
        this.media = mediaLocal;
        return mediaLocal;
    }

    verAprovacao(valor) {
        let statusAprova = valor >= 8 ? "aprovado" : "reprovado";
        this.status = statusAprova;
        return statusAprova;
    }
}

const Notas1sem = new Notas_semestre(10, 8, 9);
const Notas2sem = new Notas_semestre(8, 7, 6);

console.log("A média do 1º semestre foi " + Notas1sem.mediafinal() + " e o status foi: " + Notas1sem.statusfinal());
console.log("A média do 2º semestre foi " + Notas2sem.mediafinal() + " e o status foi: " + Notas2sem.statusfinal());