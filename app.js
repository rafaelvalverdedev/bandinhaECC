// ==== DADOS (exato do seu quadro de sexta; troque urls pelos seus arquivos) ====
const COLUMNS = [
    {
        id: "sexta",
        title: "SEXTA-FEIRA",
        items: [
            { type: "section", id: "sx-sec-1", time: "19:30", label: "PÁTIO", duration: "30:00", pagHead: "PAG" },

            { id: "sx-01", time: "", title: "Boa noite amigo boa noite irmão", tone: "D", page: 14, url: "audio/exemplo.mp3" },
            { id: "sx-02", time: "", title: "Celebrai com jubilo", tone: "D", page: 64, url: "audio/exemplo.mp3" },
            { id: "sx-03", time: "", title: "Reunidos Aqui", tone: "D", page: 13, url: "audio/exemplo.mp3" },
            { id: "sx-04", time: "", title: "A alegria está no coração", tone: "D", page: 5, url: "audio/exemplo.mp3" },
            { id: "sx-05", time: "", title: "Cantemos Aleluia", tone: "D", page: "", url: "audio/exemplo.mp3" },
            { id: "sx-06", time: "", title: "Se o meu povo que se chama pelo meu nome", tone: "D", page: 61, url: "audio/exemplo.mp3" },
            { id: "sx-07", time: "", title: "Eis que venho sem demora", tone: "D", page: 10, url: "audio/exemplo.mp3" },

            { type: "note", id: "sx-note-1", label: "SEJAM BEM VINDOS AO 8º ECC DE SERRINHA" },

            { id: "sx-08", time: "", title: "Só o poder de Deus", tone: "D", page: 11, url: "audio/exemplo.mp3" },
            { id: "sx-09", time: "", title: "Batalhar não é batalha", tone: "D", page: 64, url: "audio/exemplo.mp3" },
            { id: "sx-10", time: "", title: "Jacó Segurou o Anjo", tone: "D", page: 62, url: "audio/exemplo.mp3" },

            { type: "section", id: "sx-sec-2", time: "20:00", label: "do PÁTIO para Plenário", duration: "10:00" },
            { id: "sx-11", time: "", title: "Somos todos nós", tone: "D", page: 8, url: "audio/exemplo.mp3" },

            { type: "section", id: "sx-sec-3", time: "20:10", label: "PLENÁRIO", duration: "10:00" },
            { id: "sx-12", time: "", title: "Foi bom conhecer você (Amigo é uma alegria ter)", tone: "D", page: 6, url: "audio/Foi Bom Conhecer Voce.m4a" },
        ],
    },

    {
        id: "sabado",
        title: "SÁBADO",
        items: [
            // primeira seção do dia mostra o "PAG" (por causa do seu idx === 0)
            { type: "section", id: "sa-sec-1", time: "08:00", label: "PÁTIO", duration: "30:00", pagHead: "PAG" },

            // — EXEMPLOS: troque por suas músicas reais —
            { id: "sa-01", time: "", title: "Bom dia amigo bom dia irmão", tone: "D", page: 14, url: "audio/exemplo.mp3" },
            { id: "sa-02", time: "", title: "Celebrai com júbilo", tone: "D", page: 64, url: "audio/exemplo.mp3" },
            { id: "sa-03", time: "", title: "Os que confiam no Senhor", tone: "D", page: 49, url: "audio/exemplo.mp3" },
            { id: "sa-14", time: "", title: "Desperta", tone: "Dm", page: 15, url: "audio/exemplo.mp3" },
            { id: "sa-15", time: "", title: "Aqueles que tem sede busca", tone: "Dm", page: 51, url: "audio/exemplo.mp3" },
            { id: "sa-16", time: "", title: "Aleluia", tone: "D", page: 48, url: "audio/exemplo.mp3" },
            { id: "sa-17", time: "", title: "A minha vida é do mestre", tone: "D", page: 54, url: "audio/exemplo.mp3" },
            { id: "sa-18", time: "", title: "Ele não desiste de você", tone: "D", page: 28, url: "audio/exemplo.mp3" },
            { id: "sa-19", time: "", title: "Quero louvar-te", tone: "D", page: 43, url: "audio/exemplo.mp3" },
            { id: "sa-20", time: "", title: "Como Zaqueu", tone: "D", page: 39, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "08:20", label: "do PÁTIO para PLENÁRIO", duration: "" },
            { id: "sa-05", time: "", title: "Somos todos nós", tone: "D", page: 8, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "08:30", label: "PLENÁRIO (Oração da Manhã)", duration: "" },

            { id: "sa-06", time: "", title: "Com Cristo no meu barco", tone: "D", url: "audio/Com Cristo No Meu Barco.m4a" },

            { type: "section", id: "sa-sec-2", time: "09:20", label: "do PÁTIO para CÍRCULO", duration: "" },
            { id: "sa-07", time: "", title: "Conte a Deus", tone: "D", page: 38, url: "audio/Conte A Deus.m4a" },

            { type: "section", id: "sa-sec-2", time: "10:00", label: "do CÍRCULO  para PÁTIO", duration: "" },
            { id: "sa-08", time: "", title: "Com muito louvor (Deus vai na frente)", tone: "A", page: 22, url: "audio/exemplo.mp3" },


            { type: "section", id: "sa-sec-2", time: "10:10", label: "PÁTIO", duration: "" },
            { id: "sa-09", time: "", title: "Eu quero é Deus", tone: "D", page: 23, url: "audio/exemplo.mp3" },
            { id: "sa-10", time: "", title: "Ele vem (O tempo de cantar chegou)", tone: "D", page: 32, url: "audio/exemplo.mp3" },
            { id: "sa-11", time: "", title: "Eu sou de Jesus)", tone: "C", page: 45, url: "audio/exemplo.mp3" },
            { id: "sa-12", time: "", title: "Jesus Virá (Num dia lindo)", tone: "D", page: 65, url: "audio/exemplo.mp3" },
            { id: "sa-13", time: "", title: "Jeová Senhor nosso", tone: "Dm", page: 6, url: "audio/exemplo.mp3" },
            { id: "sa-14", time: "", title: "Há uma unção", tone: "F", page: 29, url: "audio/exemplo.mp3" },
            { id: "sa-15", time: "", title: "Nosso general", tone: "Dm", page: 57, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "10:30", label: "do PÁTIO para PLENÁRIO", duration: "" },
            { id: "sa-16", time: "", title: "Somos todos nós", tone: "D", page: 8, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "11:40", label: "PLENÁRIO", duration: "" },
            { id: "sa-17", time: "", title: "Utopia", tone: "E", page: 52, url: "audio/utopia.mpa" },

            { type: "section", id: "sa-sec-2", time: "11:45", label: "do PLENÁRIO para CONVERSA A DOIS", duration: "" },
            { id: "sa-18", time: "", title: "Só o poder de Deus", tone: "D", page: 11, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "12:10", label: "CONVERSA A DOIS para ALMOÇO", duration: "" },
            { id: "sa-18", time: "", title: "Ha uma unção", tone: "F", page: 29, url: "audio/exemplo.mp3" },
            { id: "sa-19", time: "", title: "Venho senhor a minha vida oferecer", tone: "F", page: 15, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "12:20", label: "ALMOÇO", duration: "" },
            { id: "sa-18", time: "", title: "Ao Senhor agradecemos essa nossa refeição", tone: "", url: "audio/exemplo.mp3" },


            { type: "section", id: "sa-sec-2", time: "13:40", label: "ALMOÇO para CÍRCULO", duration: "" },
            { id: "sa-18", time: "", title: "Chuva de poder", tone: "D", page: 47, url: "audio/exemplo.mp3" },
            { id: "sa-19", time: "", title: "Videira", tone: "D", page: 19, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "14:05", label: "do CÍRCULO para PLENÁRIO", duration: "" },
            { id: "sa-18", time: "", title: "O tempo não pode apagar", tone: "G", page: 26, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "15:40", label: "do PLENÁRIO para CÍRCULO", duration: "" },
            { id: "sa-18", time: "", title: "Como vai a sua vida", tone: "", page: 46, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "16:05", label: "CONVERSA A DOIS para PÁTIO", duration: "" },
            { id: "sa-18", time: "", title: "Nós precisamos de Cristo", tone: "D", page: 63, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "16:10", label: "PÁTIO", duration: "" },
            { id: "sa-09", time: "", title: "Vem desfrutar do amor de Deus", tone: "D", page: 18, url: "audio/exemplo.mp3" },
            { id: "sa-10", time: "", title: "A ti Senhor", tone: "D", page: 5, url: "audio/exemplo.mp3" },
            { id: "sa-11", time: "", title: "Ouve-se um júbilo (Leão de Judá)", tone: "D", page: 7, url: "audio/exemplo.mp3" },
            { id: "sa-12", time: "", title: "Deus forte como Jeová", tone: "D", page: 10, url: "audio/exemplo.mp3" },
            { id: "sa-13", time: "", title: "Meu barquinho", tone: "D", page: 40, url: "audio/exemplo.mp3" },
            { id: "sa-14", time: "", title: "Quero que valorize (Você tem valor)", tone: "D", page: 51, url: "audio/exemplo.mp3" },
            { id: "sa-15", time: "", title: "Raridade (começa do refrão)", tone: "D", page: 27, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "16:25", label: "do PÁTIO para PLENÁRIO", duration: "" },
            { id: "sa-18", time: "", title: "Somos todos nós (Entra cantando)", tone: "D", page: 8, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "16:35", label: "PLENÁRIO", duration: "" },
            { id: "sa-18", time: "", title: "POROPOPÓ (Ensaio do maestro)", tone: "", page: 59, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "17:30", label: "do PLENÁRIO para CÍRCULO ", duration: "" },
            { id: "sa-18", time: "", title: "Somos todos nós", tone: "D", page: 8, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "18:05", label: "do CÍRCULO para PLENÁRIO", duration: "" },
            { id: "sa-18", time: "", title: "Aquele que está feliz", tone: "", page: 21, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "19:20", label: "do PLENÁRIO para JANTAR", duration: "" },
            { id: "sa-18", time: "", title: "Somos todos nós", tone: "D", page: 8, url: "audio/exemplo.mp3" },

            { type: "section", id: "sa-sec-2", time: "20:50", label: "do JANTAR para PLENÁRIO", duration: "" },
            { id: "sa-18", time: "", title: "Somos todos nós", tone: "D", page: 8, url: "audio/exemplo.mp3" },

        ],
    },

    {
        id: "domingo",
        title: "DOMINGO",
        items: [
            { type: "section", id: "dg-sec-1", time: "08:15", label: "QUADRA", duration: "30:00", pagHead: "PAG" },
            { id: "dg-01", time: "", title: "Bom dia amigo, bom dia irmão", tone: "D", page: 14, url: "audio/exemplo.mp3" },
            { id: "dg-02", time: "", title: "Chuva de poder", tone: "D", page: 47, url: "audio/exemplo.mp3" },
            { id: "dg-03", time: "", title: "Videira", tone: "D", page: 19, url: "audio/exemplo.mp3" },
            { id: "dg-03", time: "", title: "Nós precisamos de Cristo", tone: "D", page: 63, url: "audio/exemplo.mp3" },
            { id: "dg-03", time: "", title: "Como é bom ser cristão, como é bom", tone: "C", url: "audio/exemplo.mp3" },
            { id: "dg-03", time: "", title: "Noites traiçoeiras", tone: "D", page: 25, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-2", time: "08:25", label: "da Quadra para PÁTIO", duration: "20:00" },
            { id: "dg-04", time: "", title: "Somos todos nós (variando o ritmo)", tone: "D", page: 8, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "08:35", label: "PÁTIO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Poderoso Deus", tone: "D", page: 30, url: "audio/exemplo.mp3" },
            { id: "dg-05", time: "", title: "Eu vejo uma pequena nuvem", tone: "Dm", page: 31, url: "audio/exemplo.mp3" },
            { id: "dg-05", time: "", title: "MUSICA DO BUSCOITO", tone: "", url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "08:35", label: "do PÁTIO para PLENÁRIO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Somo todos nós (Variando o ritmo)", tone: "D", page: 8, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "08:45", label: "PLENÁRIO (Oração da Manhã)", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Deus está aqui", tone: "D", url: "audio/exemplo.mp3" },
            { id: "dg-05", time: "", title: "Com amor no lar", tone: "F", url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "09:45", label: "PLENÁRIO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Jesus Cristo mudou meu viver", tone: "D", page: 58, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "09:50", label: "do PLENÁRIO para PIRA", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Nenhuma condenação há", tone: "D", page: 33, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "10:00", label: "PIRA", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Sou um milagre / Nunca houve noite", tone: "D", page: 20, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "10:25", label: "da PIRA para PÁTIO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Somo todos nós", tone: "D", page: 8, url: "audio/exemplo.mp3" },


            { type: "section", id: "dg-sec-1", time: "10:30", label: "PÁTIO", duration: "30:00", pagHead: "PAG" },
            { id: "dg-01", time: "", title: "Recebi um novo coração", tone: "D", page: 60, url: "audio/exemplo.mp3" },
            { id: "dg-02", time: "", title: "Rompendo em fé", tone: "D", page: 56, url: "audio/exemplo.mp3" },
            { id: "dg-03", time: "", title: "Venho senhor a minha vida oferecer", tone: "D", page: 15, url: "audio/exemplo.mp3" },
            { id: "dg-03", time: "", title: "Ele vem (O tempo de cantar chegou)", tone: "D", page: 32, url: "audio/exemplo.mp3" },
            { id: "dg-03", time: "", title: "Jesus em sua presença", tone: "D", page: 63, url: "audio/exemplo.mp3" },
            { id: "dg-03", time: "", title: "Solta o cabo da nau", tone: "D", page: 16, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "10:50", label: "do PÁTIO para PLENÁRIO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Somo todos nós", tone: "D", page: 8, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "11:00", label: "PLENÁRIO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "POROPOPÓ (Ensaio do Maestro)", tone: "", url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "11:55", label: "do PLENÁRIO para ALMOÇO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Somo todos nós", tone: "D", page: 8, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "12:05", label: "do PLENÁRIO para ALMOÇO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Ao Senhor agradecemos essa nossa refeição", tone: "", url: "audio/exemplo.mp3" },
            { id: "dg-05", time: "", title: "Pensando que cachaça é agua / Batida de Coco", tone: "", url: "audio/exemplo.mp3" },
            { id: "dg-05", time: "", title: "A turma da cozinha é animada", tone: "", url: "audio/exemplo.mp3" },
            { id: "dg-05", time: "", title: "Musica do Parabens para você", tone: "", url: "audio/exemplo.mp3" },


            { type: "section", id: "dg-sec-1", time: "13:35", label: "BEIJINHO DOCE", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Beijinho Doce", tone: "", url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "13:55", label: "do BEIJINHO DOCE para PLENÁRIO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Somo todos nós (Entra cantando)", tone: "D", page: 8, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "14:25", label: "PLENÁRIO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Apresentação do Maestro", tone: "", url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "15:10", label: "do PLENÁRIO para CÍRCULO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Deus forte como Jeová", tone: "", page: 10, url: "audio/exemplo.mp3" },
            { id: "dg-05", time: "", title: "Ouve-se um júbilo (Leão de Judá)", tone: "", page: 7, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "15:35", label: "do CÍRCULO PARA PÁTIO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Casa de benção", tone: "", page: 36, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "15:40", label: "PÁTIO", duration: "30:00", pagHead: "PAG" },
            { id: "dg-01", time: "", title: "Na minha vida", tone: "D", page: 62, url: "audio/exemplo.mp3" },
            { id: "dg-02", time: "", title: "Viva a fé", tone: "D", page: 11, url: "audio/exemplo.mp3" },
            { id: "dg-03", time: "", title: "Aquele que está feliz", tone: "D", page: 21, url: "audio/exemplo.mp3" },
            { id: "dg-03", time: "", title: "Os que confiam no Senhor", tone: "D", page: 49, url: "audio/exemplo.mp3" },
            { id: "dg-03", time: "", title: "Em adoração", tone: "D", page: 24, url: "audio/exemplo.mp3" },
            { id: "dg-03", time: "", title: "Deus de promessa", tone: "D", page: 41, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "16:00", label: "do PÁTIO para PLENÁRIO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Somo todos nós (Entra cantando)", tone: "D", page: 8, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "16:10", label: "PLENÁRIO", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "O céu escureceu (falsa despedida)", tone: "Am", url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "20:50", label: "PLENÁRIO (Apresentação das Equipes)", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Há uma luz", tone: "D", page: 9, url: "audio/exemplo.mp3" },

            { type: "section", id: "dg-sec-1", time: "20:50", label: "PLENÁRIO (Caminho de velas)", duration: "", pagHead: "PAG" },
            { id: "dg-05", time: "", title: "Vaso novo", tone: "D", page: 4, url: "audio/exemplo.mp3" },
        ],
    },
];

// ======= RENDER =======
const gridEl = document.getElementById("grid");

// Map para marcar/desmarcar linha tocando
const rowById = new Map();

function render() {
    gridEl.innerHTML = "";
    COLUMNS.forEach((col) => {
        const colEl = document.createElement("section");
        colEl.className = "column";

        const head = document.createElement("div");
        head.className = "col-header";
        head.textContent = col.title;
        colEl.appendChild(head);

        col.items.forEach((it, idx) => {
            if (it.type === "section") {
                const pagHeadHTML = (idx === 0 && it.pagHead)
                    ? `<span class="pag-head">${it.pagHead}</span>`
                    : "";

                const durationHTML = it.duration
                    ? `<span class="duration-badge">${it.duration}</span>`
                    : "";

                const s = document.createElement("div");
                s.className = "section-row";
                s.innerHTML = `
    <div class="cell time">${it.time || ""}</div>
    <div class="cell title title--section title">${it.label}</div>
    <div class="cell right">${durationHTML || ""}</div>
    <div class="cell right">${pagHeadHTML}</div>
  `;
                colEl.appendChild(s);
                return;
            }
            if (it.type === "note") {
                const n = document.createElement("div");
                n.className = "note-row";
                n.innerHTML = `<div class="cell title">${it.label}</div>`;
                colEl.appendChild(n);
                return;
            }
            // linha de música (clicável)
            const r = document.createElement("div");
            r.className = "row";
            r.tabIndex = 0;
            r.setAttribute("data-id", it.id);
            r.innerHTML = `
        <div class="cell time">${it.time || ""}</div>
        <div class="cell title">${it.title}</div>
        <div class="cell right">${it.tone || ""}</div>
        <div class="cell right">${it.page ?? ""}</div>
      `;
            r.addEventListener("click", () => openModal(it));
            r.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(it); }
            });
            rowById.set(it.id, r);
            colEl.appendChild(r);
        });

        gridEl.appendChild(colEl);
    });
}
render();

// ======= PLAYER (modal) =======
const modal = document.getElementById("modal");
const btnClose = document.getElementById("btnClose");
const audio = document.getElementById("audio");
const btnPlayPause = document.getElementById("btnPlayPause");
const btnStop = document.getElementById("btnStop");
const btnMute = document.getElementById("btnMute");
const vol = document.getElementById("vol");
const trackTitle = document.getElementById("trackTitle");
const trackMeta = document.getElementById("trackMeta");

let currentTrack = null;

function resolveUrl(u) {
    if (!u) return "";
    if (/^https?:\/\//i.test(u)) return u; // absoluta
    // relativa ao index.html
    return new URL(u.replace(/^\/+/, ""), window.location.href).toString();
}

function setPlayingRowHighlight(id, playing) {
    rowById.forEach((el) => el.classList.remove("playing"));
    if (playing && id && rowById.get(id)) {
        rowById.get(id).classList.add("playing");
    }
}

function openModal(track) {
    currentTrack = track;

    // preencher header/meta
    trackTitle.textContent = track.title;
    const metaParts = [];
    if (track.time) metaParts.push(`Horário: ${track.time}`);
    if (track.tone) metaParts.push(`Tonalidade: ${track.tone}`);
    if (track.page !== undefined && track.page !== "") metaParts.push(`Pág.: ${track.page}`);
    trackMeta.textContent = metaParts.join(" · ");

    // configurar áudio
    audio.src = resolveUrl(track.url);
    audio.currentTime = 0;

    // abrir modal
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");

    // tocar (navegadores exigem gesto do usuário — o clique nesta linha já conta)
    audio.play().then(() => {
        btnPlayPause.textContent = "Pausar";
        setPlayingRowHighlight(track.id, true);
    }).catch((e) => {
        // se falhar (arquivo ausente/sem suporte), mantenha pausado
        console.error("Erro ao tocar:", e);
        btnPlayPause.textContent = "Reproduzir";
        setPlayingRowHighlight(null, false);
    });
}

function closeModal() {
    stopAudio();
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
    btnPlayPause.textContent = "Reproduzir";
    setPlayingRowHighlight(currentTrack?.id, false);
}

btnClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal(); });

btnPlayPause.addEventListener("click", () => {
    if (audio.paused) {
        audio.play().catch(console.error);
    } else {
        audio.pause();
    }
});
btnStop.addEventListener("click", stopAudio);

btnMute.addEventListener("click", () => { audio.muted = !audio.muted; });
vol.addEventListener("input", (e) => { audio.volume = parseFloat(e.target.value); });

// atualiza UI conforme eventos do <audio>
audio.addEventListener("play", () => {
    btnPlayPause.textContent = "Pausar";
    if (currentTrack) setPlayingRowHighlight(currentTrack.id, true);
});
audio.addEventListener("pause", () => {
    btnPlayPause.textContent = "Reproduzir";
});
audio.addEventListener("ended", () => {
    btnPlayPause.textContent = "Reproduzir";
    setPlayingRowHighlight(currentTrack?.id, false);
});
