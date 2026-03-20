import { useState } from "react";
import {
  BookOpen,
  Lightbulb,
  Building2,
  Heart,
  ArrowLeft,
  Search,
  Clock,
  Paperclip,
  ChevronRight,
  Brain,
  FlaskConical,
  Mail,
  Sun,
  CheckCircle2,
  Send,
  X,
  Sparkles,
  Activity,
  MessageCircleHeart,
  ShieldCheck,
  Stethoscope,
  Info,
  AlertCircle,
  Users,
  Target,
  Phone,
  ExternalLink,
  MessageSquare,
  Plus,
  CornerDownRight,
  Home,
  Settings,
  HeartHandshake,
  UserSearch,
  MapPin,
  Video,
  Lock,
  Rocket,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// 📁 constants/colors.js
// ─────────────────────────────────────────────────────────────
export const C = {
  primary: "#1A6FA8",
  primaryDark: "#145A8A",
  primaryLight: "#EEF5FC",
  teal: "#0B8A7A",
  tealLight: "#E6F5F3",
  green: "#2D7D4E",
  greenLight: "#EBF5EF",
  amber: "#B45309",
  amberLight: "#FEF3E2",
  red: "#B91C3A",
  redLight: "#FEE8EE",
  violet: "#5B3EA6",
  violetLight: "#EEE9FA",
  bg: "#F5F7FA",
  white: "#FFFFFF",
  text: "#1E293B",
  muted: "#64748B",
  border: "#E8EDF4",
};

// ─────────────────────────────────────────────────────────────
// 📁 constants/data.js
// ─────────────────────────────────────────────────────────────
export const SCREEN = {
  HOME: "home",
  BIBLIOTECA: "biblioteca",
  SINTOMAS: "sintomas",
  SINTOMA_DETAIL: "sintoma_detail",
  PARTILHAS: "partilhas",
  PARTILHAS_TEMA: "partilhas_tema",
  APOIO: "apoio",
  DICAS: "dicas",
  FORMACAO: "formacao",
  ARTICLE: "article",
  FASE2: "fase2",
  PERFIL: "perfil",
  SOBRE: "sobre",
};

export const TABS = { DEMENCIAS: "demencias", CIENCIA: "ciencia" };

export const PERFIS = [
  {
    k: "novo",
    icon: "🌱",
    label: "Acabei de receber um diagnóstico",
    sub: "Preciso de perceber o que está a acontecer",
  },
  {
    k: "cuidador",
    icon: "🤝",
    label: "Já cuido há algum tempo",
    sub: "Procuro estratégias e apoio para o dia a dia",
  },
  {
    k: "profissional",
    icon: "🏥",
    label: "Sou profissional ou trabalho numa instituição",
    sub: "Quero melhorar a minha abordagem",
  },
];

export const TEMAS = [
  {
    id: "agitacao",
    label: "Agitação",
    icon: "😰",
    color: C.amber,
    bg: C.amberLight,
  },
  {
    id: "sono",
    label: "Distúrbios do sono",
    icon: "🌙",
    color: C.violet,
    bg: C.violetLight,
  },
  {
    id: "comunicacao",
    label: "Comunicação",
    icon: "💬",
    color: C.primary,
    bg: C.primaryLight,
  },
  {
    id: "alimentacao",
    label: "Alimentação",
    icon: "🍽️",
    color: C.green,
    bg: C.greenLight,
  },
  {
    id: "emocoes",
    label: "Sentimentos do cuidador",
    icon: "🫂",
    color: C.red,
    bg: C.redLight,
  },
  {
    id: "agressividade",
    label: "Agressividade",
    icon: "⚡",
    color: "#7C3AED",
    bg: "#EEE9FA",
  },
  { id: "outros", label: "Outros", icon: "💭", color: C.muted, bg: "#F1F5F9" },
];

export const SEED_POSTS = [
  {
    id: 1,
    tema: "agitacao",
    autor: "Ana M.",
    isExample: true,
    texto:
      "O meu pai fica muito agitado ao fim do dia. Percebi que colocar música dos anos 60 acalma-o bastante. Alguém tem outras sugestões?",
    data: "há 18 min",
    replies: [
      {
        id: 101,
        autor: "Enfermeiro João (Memoris)",
        texto:
          "Ótima estratégia Ana! O fenómeno que descreves chama-se 'sundowning' — é muito comum e a música é de facto uma das intervenções com melhor evidência. Tenta também reduzir a estimulação visual ao fim do dia (baixar estores, diminuir luz artificial).",
        data: "há 10 min",
      },
    ],
  },
  {
    id: 2,
    tema: "sono",
    autor: "Carlos F.",
    isExample: true,
    texto:
      "A minha mãe acorda várias vezes por noite e fica desorientada. Já tentei manter uma rotina mas é muito difícil.",
    data: "há 1 hora",
    replies: [
      {
        id: 102,
        autor: "Rita S.",
        texto:
          "Passamos pelo mesmo. O que ajudou foi deixar uma luz de presença ligada para ela não desorientar tanto ao acordar.",
        data: "há 45 min",
      },
      {
        id: 103,
        autor: "Enfermeiro João (Memoris)",
        texto:
          "Muito boa sugestão Rita. Carlos, também vale a pena verificar se há dor não verbalizada — é causa frequente de agitação noturna e muitas vezes passa despercebida.",
        data: "há 30 min",
      },
    ],
  },
  {
    id: 3,
    tema: "emocoes",
    autor: "Rita S.",
    isExample: true,
    texto:
      "Há dias em que me sinto completamente esgotada e com culpa por isso. É muito difícil aceitar que não consigo fazer mais. Alguém se identifica?",
    data: "há 3 horas",
    replies: [
      {
        id: 104,
        autor: "Marta L.",
        texto:
          "Identifico-me completamente. Aprendi que pedir ajuda não é fraqueza — é necessidade. Cuida-te para poderes cuidar.",
        data: "há 2 horas",
      },
      {
        id: 105,
        autor: "Enfermeiro João (Memoris)",
        texto:
          "O que sentes tem nome: síndrome do cuidador. É reconhecido clinicamente e é muito real. Sentires isso não te torna menos boa cuidadora — torna-te humana. Partilha sempre que precisares.",
        data: "há 1 hora",
      },
    ],
  },
  {
    id: 4,
    tema: "comunicacao",
    autor: "João P.",
    isExample: true,
    texto:
      "A minha avó deixou quase de falar. Percebi que responder ao que ela expressa com gestos e toque funciona melhor do que tentar forçar conversa.",
    data: "há 4 horas",
    replies: [],
  },
  {
    id: 5,
    tema: "alimentacao",
    autor: "Marta L.",
    isExample: true,
    texto:
      "O meu marido recusa comer quase tudo. Descobri que se eu comer com ele e tornar a refeição num momento partilhado ele aceita melhor. Pequena vitória!",
    data: "há 5 horas",
    replies: [
      {
        id: 106,
        autor: "Ana M.",
        texto: "Que descoberta bonita! Vou tentar também.",
        data: "há 4 horas",
      },
    ],
  },
];

export const RECURSOS = [
  {
    nome: "Alzheimer Portugal",
    desc: "Linha de apoio, grupos de ajuda mútua e informação especializada para familiares e cuidadores.",
    tel: "217 120 600",
    site: "https://alzheimerportugal.org",
    cor: C.primary,
    bg: C.primaryLight,
  },
  {
    nome: "SNS 24",
    desc: "Linha de saúde disponível 24 horas para orientação e encaminhamento no Serviço Nacional de Saúde.",
    tel: "808 24 24 24",
    site: "https://sns24.gov.pt",
    cor: C.teal,
    bg: C.tealLight,
  },
  {
    nome: "Linha de Apoio à Saúde Mental",
    desc: "Apoio emocional e psicológico gratuito, todos os dias das 16h à meia-noite.",
    tel: "800 24 24 24",
    cor: C.violet,
    bg: C.violetLight,
  },
];

export const DEMENCIAS = [
  {
    tag: "Alzheimer",
    color: C.primary,
    bg: C.primaryLight,
    prevalencia: "60–70% dos casos",
  },
  {
    tag: "Vascular",
    color: C.teal,
    bg: C.tealLight,
    prevalencia: "15–20% dos casos",
  },
  {
    tag: "Corpos de Lewy",
    color: C.violet,
    bg: C.violetLight,
    prevalencia: "5–10% dos casos",
  },
  {
    tag: "Frontotemporal",
    color: C.green,
    bg: C.greenLight,
    prevalencia: "5–10% dos casos",
  },
  {
    tag: "Parkinson",
    color: C.amber,
    bg: C.amberLight,
    prevalencia: "3–5% dos casos",
  },
  { tag: "Mista", color: C.red, bg: C.redLight, prevalencia: "~10% dos casos" },
  {
    tag: "Outras",
    color: C.muted,
    bg: "#F1F5F9",
    prevalencia: "Menos frequentes",
  },
];

export const ARTICLES = [
  {
    id: 1,
    tag: "Alzheimer",
    time: "6 min",
    title: "Doença de Alzheimer: mecanismos e progressão",
    desc: "Patologia, fases clínicas e critérios de diagnóstico europeus.",
    fonte:
      "Hort et al., European Journal of Neurology, 2010 | Dubois et al., Lancet Neurology, 2014",
    body: [
      "A doença de Alzheimer é responsável por 60–70% dos casos de demência na Europa (Alzheimer Europe, 2023). A patologia assenta na acumulação de beta-amiloide e tau hiperfosforilada, levando à disfunção sináptica e neurodegeneração progressiva.",
      "Os critérios IWG-2 (Dubois et al., Lancet Neurology, 2014) integram biomarcadores in vivo — PET amiloide, tau e amiloide no LCR — com a avaliação clínica. As diretrizes EFNS (Hort et al., 2010) recomendam avaliação neuropsicológica e imagiologia para diagnóstico diferencial.",
      "A progressão ocorre em três fases: inicial (perda de memória episódica recente), moderada (dependência parcial) e avançada (dependência total, disfagia, vulnerabilidade aumentada a infeções).",
    ],
  },
  {
    id: 2,
    tag: "Vascular",
    time: "5 min",
    title: "Demência Vascular: causas, diagnóstico e prevenção",
    desc: "A segunda causa mais comum — ligada a eventos cardiovasculares e cerebrovasculares.",
    fonte:
      "Sorbi et al., European Journal of Neurology, 2012 | Livingston et al., The Lancet, 2024",
    body: [
      "A demência vascular resulta do comprometimento do fluxo sanguíneo cerebral — AVC, microinfartos ou doença dos pequenos vasos. As diretrizes EFNS (Sorbi et al., 2012) definem critérios clínicos e imagiológicos específicos.",
      "Ao contrário do Alzheimer, progride em 'degraus'. Os domínios mais afetados são funções executivas, atenção e velocidade de processamento.",
      "A Comissão Lancet 2024 destaca hipertensão, diabetes e tabagismo como principais fatores de risco modificáveis.",
    ],
  },
  {
    id: 3,
    tag: "Corpos de Lewy",
    time: "5 min",
    title: "Demência por Corpos de Lewy: diagnóstico e riscos",
    desc: "Frequentemente subdiagnosticada — critérios europeus e alertas na medicação.",
    fonte: "McKeith et al., Neurology, 2017 & 2020",
    body: [
      "Caracteriza-se pelo depósito de alfa-sinucleína no córtex cerebral. Os critérios de McKeith et al. incluem: flutuações cognitivas, alucinações visuais detalhadas, parkinsonismo e perturbações do sono REM.",
      "Representa 5–10% dos casos na Europa. O DaTSCAN é um biomarcador imagiológico indicativo frequentemente utilizado.",
      "Alerta crítico: hipersensibilidade grave a antipsicóticos típicos com risco de reações potencialmente fatais. Qualquer prescrição deve ser feita por neurologista especializado.",
    ],
  },
  {
    id: 4,
    tag: "Frontotemporal",
    time: "5 min",
    title: "Demência Frontotemporal: a demência dos mais jovens",
    desc: "A forma mais comum antes dos 65 anos — variantes e critérios de diagnóstico.",
    fonte: "Rascovsky et al., Brain (Oxford), 2011",
    body: [
      "Resulta da degeneração dos lobos frontais e temporais e é a forma mais frequente antes dos 65 anos (Rascovsky et al., Brain, 2011).",
      "Três variantes: comportamental (desinibição, apatia), afasia progressiva não fluente e demência semântica. A memória episódica pode estar preservada no início.",
      "Cerca de 40% têm componente genética familiar. Os primeiros sintomas são frequentemente confundidos com depressão ou perturbação de personalidade.",
    ],
  },
  {
    id: 5,
    tag: "Parkinson",
    time: "4 min",
    title: "Demência associada à Doença de Parkinson",
    desc: "Presente em até 80% dos doentes a longo prazo.",
    fonte: "Emre et al., European Journal of Neurology, 2007",
    body: [
      "Até 80% das pessoas com Parkinson desenvolvem demência. As diretrizes de Emre et al. (2007) distinguem-na da DCL: sintomas cognitivos surgem pelo menos um ano após os motores.",
      "O perfil inclui dificuldades de atenção, funções executivas e capacidades visuoespaciais. O tratamento com rivastigmina tem evidência de eficácia.",
      "Fisioterapia, terapia ocupacional e estimulação cognitiva são fundamentais para manter funcionalidade.",
    ],
  },
  {
    id: 6,
    tag: "Mista",
    time: "4 min",
    title: "Demência Mista: quando coexistem múltiplas patologias",
    desc: "Mais comum do que se pensava — Alzheimer com patologia vascular.",
    fonte: "MRC Cognitive Function & Ageing Study, BMJ | Lancet, 2024",
    body: [
      "Ocorre quando coexistem dois ou mais tipos de patologia. O MRC Cognitive Function and Ageing Study (BMJ) revelou que é muito mais prevalente do que o diagnóstico clínico sugere.",
      "O diagnóstico definitivo é frequentemente confirmado apenas por análise neuropatológica post-mortem.",
      "A Comissão Lancet 2024 recomenda tratamento combinado — inibidores da colinesterase e controlo rigoroso dos fatores de risco vascular.",
    ],
  },
  {
    id: 7,
    tag: "Outras",
    time: "5 min",
    title: "Outras formas: DCB, PSP e Huntington",
    desc: "Formas menos frequentes com critérios europeus específicos.",
    fonte:
      "Höglinger et al., Movement Disorders, 2017 | Armstrong et al., Neurology, 2013",
    body: [
      "A Degenerescência Corticobasal (DCB) caracteriza-se por apraxia assimétrica e síndrome da mão alheia (Armstrong et al., 2013). A PSP manifesta-se com quedas precoces e paralisia do olhar vertical (Höglinger et al., 2017).",
      "A doença de Huntington, autossómica dominante, combina demência subcortical progressiva com coreia e alterações psiquiátricas.",
      "A referenciação a centro especializado com equipa multidisciplinar é fortemente recomendada.",
    ],
  },
];

export const ADVANCES = [
  {
    id: 10,
    tag: "Diagnóstico",
    tagColor: C.teal,
    tagBg: C.tealLight,
    time: "5 min",
    title: "Biomarcadores sanguíneos com +90% de precisão diagnóstica",
    desc: "O teste p-tau217 valida o diagnóstico precoce em sangue periférico.",
    fonte: "Palmqvist et al., JAMA, 2024 | Lancet Neurology, 2024",
    body: [
      "Investigadores da Universidade de Lund validaram o p-tau217 em sangue periférico, com precisão superior a 90%. Em pessoas com Alzheimer, os níveis são até oito vezes superiores.",
      "Este avanço é relevante para os cuidados primários europeus, onde o acesso a PET e punção lombar é limitado.",
      "As recomendações europeias (Lancet Neurology, 2024) já incorporam estes biomarcadores no fluxo diagnóstico.",
    ],
  },
  {
    id: 11,
    tag: "Tratamento",
    tagColor: C.violet,
    tagBg: C.violetLight,
    time: "5 min",
    title: "Anticorpos anti-amiloide: evidência europeia e posição da EMA",
    desc: "Lecanemab e donanemab — benefícios, riscos e decisão regulatória europeia.",
    fonte:
      "van Dyck et al., NEJM, 2023 | EMA, 2024 | Lancet Primary Care, 2025",
    body: [
      "Os anticorpos monoclonais anti-amiloide demonstraram em ensaios de fase III (NEJM, 2023) redução significativa do declínio cognitivo em fases iniciais.",
      "A EMA avaliou o lecanemab em 2024 e não o recomendou, considerando que o benefício não superava o risco de ARIA.",
      "A Lancet Primary Care (2025) sublinha que estes fármacos requerem infraestrutura diagnóstica avançada e monitorização rigorosa.",
    ],
  },
  {
    id: 12,
    tag: "Prevenção",
    tagColor: C.green,
    tagBg: C.greenLight,
    time: "5 min",
    title: "Comissão Lancet 2024: 45% dos casos são potencialmente preveníveis",
    desc: "14 fatores de risco modificáveis identificados.",
    fonte:
      "Livingston et al., The Lancet, 2024 | Ngandu et al., The Lancet, 2015",
    body: [
      "A Comissão Lancet 2024 identificou 14 fatores de risco modificáveis responsáveis por até 45% dos casos — incluindo perda auditiva, hipertensão, diabetes, inatividade física e privação de sono.",
      "O ensaio FINGER demonstrou que uma intervenção multidomínio reduz significativamente o declínio em adultos de meia-idade em risco.",
      "A Alzheimer Europe sublinha que estas estratégias devem ser implementadas ao longo de toda a vida.",
    ],
  },
  {
    id: 13,
    tag: "Investigação",
    tagColor: C.amber,
    tagBg: C.amberLight,
    time: "4 min",
    title:
      "Sono, neuroinflamação e microbioma: fronteiras da investigação europeia",
    desc: "Novos mecanismos abrem portas para intervenções inovadoras.",
    fonte: "Brain (Oxford), 2023 | European Journal of Neurology, 2024",
    body: [
      "Investigação em Brain (Oxford, 2023) aprofundou o papel do sono na clearance cerebral de proteínas tóxicas. A privação crónica está associada a maior acumulação de beta-amiloide.",
      "A neuroinflamação emerge como mecanismo central. Estudos europeus identificam a microglia como alvo terapêutico promissor.",
      "A investigação sobre o eixo intestino-cérebro é área emergente com grupos ativos em Portugal, Espanha, Reino Unido e Países Baixos.",
    ],
  },
  {
    id: 14,
    tag: "Nutrição",
    tagColor: C.green,
    tagBg: C.greenLight,
    time: "6 min",
    title: "Vitaminas, suplementos e demência: o que diz a evidência",
    desc: "O que está comprovado, o que é promissor e o que deve ser evitado — uma leitura crítica da literatura científica.",
    fonte:
      "Livingston et al., The Lancet, 2024 | Cochrane Database of Systematic Reviews, 2023 | EFSA, 2022 | PNAS, 2010",
    body: [
      "A relação entre nutrição e saúde cognitiva é uma das áreas mais investigadas — e também uma das mais distorcidas por informação sem base científica. A Comissão Lancet 2024 e as Cochrane Reviews permitem traçar uma linha clara entre o que tem evidência robusta e o que permanece especulativo.",
      "Vitaminas do complexo B — em particular B6, B9 (folato) e B12 — são as mais estudadas. O ensaio VITACOG (Universidade de Oxford, PNAS) demonstrou que a suplementação com doses elevadas de B6, B9 e B12 em pessoas com défice cognitivo ligeiro reduziu significativamente a atrofia cerebral e abrandou o declínio. O benefício foi maior em participantes com níveis elevados de homocisteína — um marcador de risco cardiovascular e cognitivo. A EFSA reconhece o papel do folato e da B12 na função cognitiva normal. A suplementação é especialmente relevante em pessoas com défice nutricional comprovado, situação frequente em idosos institucionalizados em Portugal.",
      "Vitamina D apresenta associação consistente com risco de demência em estudos observacionais. Uma metanálise publicada no Neurology (2023) mostrou que níveis baixos de vitamina D estão associados a maior risco de Alzheimer. O ensaio VITAL (NEJM, 2022) não demonstrou redução significativa de demência com suplementação isolada de D3, mas a análise de subgrupos sugere benefício em pessoas com défice estabelecido. A EFSA reconhece a vitamina D como contribuinte para a função neurológica normal, e a sua monitorização e correção é recomendada por várias diretrizes europeias.",
      "Ácidos gordos ómega-3, em particular DHA (ácido docosahexaenóico), têm papel estrutural nas membranas neuronais. A Cochrane Review (2023) sobre ómega-3 e cognição concluiu que a evidência atual é insuficiente para recomendar suplementação em pessoas com demência estabelecida. Porém, o consumo de peixe gordo duas vezes por semana — como fonte alimentar natural — está consistentemente associado a menor risco cognitivo (Lancet, 2024).",
      "Vitamina E e antioxidantes geraram entusiasmo inicial, mas os ensaios clínicos controlados não confirmaram benefício na prevenção ou tratamento da demência. A Cochrane Review sobre vitamina E (2023) não encontrou evidência suficiente para recomendar suplementação. Doses elevadas de vitamina E isolada podem inclusivamente aumentar o risco cardiovascular — um achado que reforça a necessidade de cautela com suplementação não supervisionada.",
      "Curcumina, resveratrol e outros compostos vegetais são objeto de investigação ativa, mas sem evidência clínica robusta em humanos até à data. Os estudos existentes são maioritariamente realizados em animais ou com amostras reduzidas. A sua utilização como suplemento não é recomendada pelas diretrizes europeias atuais.",
      "A conclusão mais consistente da literatura é que uma alimentação equilibrada — próxima da dieta mediterrânica, rica em vegetais, peixe, azeite e leguminosas — tem evidência mais robusta do que qualquer suplemento isolado (Lancet, 2024; Ngandu et al., The Lancet, 2015). A suplementação pode ser benéfica em casos de défice nutricional comprovado, mas deve ser sempre avaliada e orientada por um profissional de saúde.",
    ],
  },
];

export const TIPS = [
  {
    icon: MessageCircleHeart,
    color: C.primary,
    title: "Comunicação clara e tranquila",
    desc: "Fala devagar, com frases curtas. Oferece apenas duas opções. A paciência reduz significativamente a ansiedade do teu familiar.",
  },
  {
    icon: Activity,
    color: C.teal,
    title: "Música como ponte emocional",
    desc: "Músicas da juventude podem despertar memórias e melhorar o humor mesmo em fases avançadas. A memória musical é das últimas a ser afetada.",
  },
  {
    icon: Sun,
    color: C.amber,
    title: "Respeita o ritmo circadiano",
    desc: "A maioria das pessoas com demência está mais calma de manhã. Planeia cuidados e conversas importantes nesse período.",
  },
  {
    icon: Heart,
    color: C.red,
    title: "Valida sentimentos, não factos",
    desc: "Se o teu familiar acredita em algo que não é real, não contraditas. Responde à emoção — o que sente é sempre real.",
  },
  {
    icon: Sparkles,
    color: C.green,
    title: "Movimento diário adaptado",
    desc: "Caminhadas curtas, dança suave ou exercícios adaptados ajudam a preservar a mobilidade e têm evidência robusta na desaceleração do declínio.",
  },
  {
    icon: ShieldCheck,
    color: C.violet,
    title: "Prioriza a qualidade do sono",
    desc: "A privação de sono acelera o declínio cognitivo. Rotinas consistentes e ambiente tranquilo fazem toda a diferença.",
  },
  {
    icon: Brain,
    color: C.primary,
    title: "Estimulação cognitiva estruturada",
    desc: "Puzzles, reminiscências com fotografias, palavras cruzadas — atividades adaptadas ao nível funcional têm impacto positivo documentado.",
  },
  {
    icon: FlaskConical,
    color: C.teal,
    title: "Cuida também de ti",
    desc: "O burnout do cuidador é uma realidade clínica. Aceita ajuda, partilha responsabilidades e reserva tempo para as tuas necessidades.",
  },
];

export const SINTOMAS = [
  {
    id: "agitacao",
    label: "Agitação / Inquietação",
    icon: "😰",
    intervencoes: [
      "Identificar possíveis causas físicas — dor, fome, sede ou necessidade de casa de banho",
      "Criar um ambiente calmo: reduzir ruído, luz intensa e estimulação excessiva",
      "Distração com atividade preferida — música suave, folhear álbum de fotografias",
      "Presença tranquila e toque suave, se bem tolerado pela pessoa",
    ],
  },
  {
    id: "desorientacao",
    label: "Desorientação (tempo/espaço)",
    icon: "🧭",
    intervencoes: [
      "Colocar relógios e calendários visíveis com letras grandes e data assinalada",
      "Manter uma rotina diária consistente — previsibilidade reduz a ansiedade",
      "Orientação gentil e repetida, sem confronto ou correção abrupta",
      "Marcações visuais no espaço (sinalética simples nas portas)",
    ],
  },
  {
    id: "agressividade",
    label: "Agressividade (verbal/física)",
    icon: "⚡",
    intervencoes: [
      "Manter a calma — não reagir com confronto, tom elevado ou proximidade excessiva",
      "Dar espaço físico e tempo para a situação se dissipar",
      "Identificar e registar gatilhos recorrentes para antecipar e prevenir",
      "Documentar episódios para partilhar com o médico",
    ],
  },
  {
    id: "sono",
    label: "Distúrbios do sono",
    icon: "🌙",
    intervencoes: [
      "Garantir exposição à luz natural durante o dia, especialmente de manhã",
      "Reduzir ou eliminar sestas prolongadas durante o dia",
      "Manter uma rotina de deitar consistente e ritualizada",
      "Evitar estimulantes após as 15h e reduzir líquidos ao fim do dia",
    ],
  },
  {
    id: "alucinacoes",
    label: "Alucinações",
    icon: "👁️",
    intervencoes: [
      "Não confirmar nem contradizer diretamente o que a pessoa vê ou ouve",
      "Avaliar se causa sofrimento — se não, pode não ser necessário intervir",
      "Melhorar a iluminação (sombras potenciam alucinações visuais)",
      "Comunicar ao médico — pode ser necessário rever medicação",
    ],
  },
  {
    id: "alimentacao",
    label: "Recusa alimentar",
    icon: "🍽️",
    intervencoes: [
      "Oferecer alimentos preferidos, conhecidos e com significado para a pessoa",
      "Realizar refeições em ambiente tranquilo, sem distrações ou pressão",
      "Adaptar texturas se existir dificuldade em mastigar ou engolir",
      "Fracionar em pequenas refeições ao longo do dia",
    ],
  },
  {
    id: "apatia",
    label: "Apatia / falta de iniciativa",
    icon: "😶",
    intervencoes: [
      "Propor atividades simples, curtas e com significado pessoal",
      "Não forçar — sugerir com calma e aguardar, voltando a tentar mais tarde",
      "Exercício físico leve ao ar livre como estímulo natural de ativação",
      "Música ou fotografias de memórias positivas como ponto de partida",
    ],
  },
  {
    id: "tristeza",
    label: "Tristeza / choro frequente",
    icon: "💧",
    intervencoes: [
      "Presença tranquila e toque suave — estar presente sem falar pode ser suficiente",
      "Validar a emoção: 'Vejo que estás triste, estou aqui contigo'",
      "Atividades com significado pessoal e emocional positivo",
      "Comunicar ao médico se persistir — pode haver componente depressiva tratável",
    ],
  },
  {
    id: "deambulacao",
    label: "Deambulação / tendência a sair",
    icon: "🚶",
    intervencoes: [
      "Implementar sistemas de segurança discretos nas portas de saída",
      "Colocar identificação no pulso ou cosida na roupa com nome e contacto",
      "Garantir exercício físico regular para reduzir inquietação",
      "Criar percursos seguros dentro de casa ou em espaço exterior vedado",
    ],
  },
  {
    id: "comunicacao",
    label: "Dificuldade de comunicação",
    icon: "💬",
    intervencoes: [
      "Usar frases curtas, simples e diretas — uma ideia de cada vez",
      "Manter contacto visual, expressão facial calorosa e toque afetivo",
      "Dar tempo de resposta sem pressionar",
      "Complementar com comunicação não-verbal: gestos, apontar, imagens",
    ],
  },
  {
    id: "incontinencia",
    label: "Incontinência urinária",
    icon: "💧",
    intervencoes: [
      "Estabelecer horários regulares de ida à casa de banho (ex: de 2 em 2 horas)",
      "Sinalizar a casa de banho de forma clara e visível",
      "Usar roupa fácil de tirar rapidamente",
      "Abordar o tema com delicadeza — preservar a dignidade é fundamental",
    ],
  },
];

export const HOME_GRIDS = {
  novo: [
    {
      Icon: BookOpen,
      label: "Biblioteca",
      sub: "Perceber a doença",
      sc: "biblioteca",
      bg: C.primaryLight,
      color: C.primary,
    },
    {
      Icon: Stethoscope,
      label: "Guia de Sintomas",
      sub: "O que esperar e como agir",
      sc: "sintomas",
      bg: C.tealLight,
      color: C.teal,
    },
    {
      Icon: MessageSquare,
      label: "Partilhas",
      sub: "Não estás sozinho",
      sc: "partilhas",
      bg: C.violetLight,
      color: C.violet,
    },
    {
      Icon: HeartHandshake,
      label: "Acompanhamento",
      sub: "Apoio em casa ou instituição",
      sc: "formacao",
      bg: C.amberLight,
      color: C.amber,
    },
  ],
  cuidador: [
    {
      Icon: Stethoscope,
      label: "Guia de Sintomas",
      sub: "Intervenções para hoje",
      sc: "sintomas",
      bg: C.tealLight,
      color: C.teal,
    },
    {
      Icon: MessageSquare,
      label: "Partilhas",
      sub: "Trocar experiências",
      sc: "partilhas",
      bg: C.violetLight,
      color: C.violet,
    },
    {
      Icon: BookOpen,
      label: "Biblioteca",
      sub: "Aprofundar conhecimento",
      sc: "biblioteca",
      bg: C.primaryLight,
      color: C.primary,
    },
    {
      Icon: HeartHandshake,
      label: "Acompanhamento",
      sub: "Apoio em casa ou instituição",
      sc: "formacao",
      bg: C.amberLight,
      color: C.amber,
    },
  ],
  profissional: [
    {
      Icon: HeartHandshake,
      label: "Acompanhamento",
      sub: "Formação e intervenção",
      sc: "formacao",
      bg: C.amberLight,
      color: C.amber,
    },
    {
      Icon: BookOpen,
      label: "Biblioteca",
      sub: "Literatura científica",
      sc: "biblioteca",
      bg: C.primaryLight,
      color: C.primary,
    },
    {
      Icon: Stethoscope,
      label: "Guia de Sintomas",
      sub: "Intervenções por sintoma",
      sc: "sintomas",
      bg: C.tealLight,
      color: C.teal,
    },
    {
      Icon: MessageSquare,
      label: "Partilhas",
      sub: "Comunidade de cuidadores",
      sc: "partilhas",
      bg: C.violetLight,
      color: C.violet,
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 📁 components/ui/Tag.jsx
// ─────────────────────────────────────────────────────────────
export const Tag = ({ label, color, bg }) => (
  <span
    style={{
      background: bg,
      color,
      borderRadius: 20,
      padding: "3px 11px",
      fontSize: 11,
      fontWeight: 700,
      display: "inline-block",
    }}
  >
    {label}
  </span>
);

// ─────────────────────────────────────────────────────────────
// 📁 components/ui/Card.jsx
// ─────────────────────────────────────────────────────────────
export const Card = ({ children, onClick, style = {} }) => (
  <div
    onClick={onClick}
    style={{
      background: "#fff",
      borderRadius: 18,
      padding: 18,
      boxShadow: "0 1px 6px rgba(26,111,168,0.07)",
      cursor: onClick ? "pointer" : "default",
      ...style,
    }}
  >
    {children}
  </div>
);

// ─────────────────────────────────────────────────────────────
// 📁 components/ui/IconBox.jsx
// ─────────────────────────────────────────────────────────────
export const IconBox = ({ Icon, color, bg, size = 20 }) => (
  <div
    style={{
      width: 42,
      height: 42,
      borderRadius: 13,
      background: bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <Icon size={size} color={color} strokeWidth={1.7} />
  </div>
);

// ─────────────────────────────────────────────────────────────
// 📁 components/ui/Logo.jsx
// ─────────────────────────────────────────────────────────────
export const Logo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 11,
        background: `linear-gradient(135deg, ${C.primary}, #0B5FA5)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 3px 10px ${C.primary}55`,
      }}
    >
      <Brain size={19} color="#fff" strokeWidth={1.8} />
    </div>
    <div>
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <span
          style={{
            fontSize: 24,
            fontWeight: 900,
            color: C.text,
            letterSpacing: -1,
          }}
        >
          mem
        </span>
        <span
          style={{
            fontSize: 24,
            fontWeight: 900,
            color: C.primary,
            letterSpacing: -1,
          }}
        >
          oris
        </span>
      </div>
      <div
        style={{
          fontSize: 10,
          color: C.muted,
          letterSpacing: 2.5,
          textTransform: "uppercase",
          marginTop: -3,
          fontWeight: 500,
        }}
      >
        apoio à demência
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// 📁 components/ui/Header.jsx
// ─────────────────────────────────────────────────────────────
export const Hdr = ({ title, back, backSc, go }) => (
  <div
    style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}
  >
    {back && (
      <button
        onClick={() => go(backSc || SCREEN.HOME)}
        style={{
          background: C.primaryLight,
          border: "none",
          cursor: "pointer",
          borderRadius: 11,
          width: 38,
          height: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowLeft size={18} color={C.primary} strokeWidth={2} />
      </button>
    )}
    {title && (
      <h2 style={{ margin: 0, fontSize: 19, fontWeight: 800, color: C.text }}>
        {title}
      </h2>
    )}
  </div>
);

// ─────────────────────────────────────────────────────────────
// 📁 components/ui/Nav.jsx
// ─────────────────────────────────────────────────────────────
export const Nav = ({ screen, go }) => (
  <div
    style={{
      position: "fixed",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      maxWidth: 420,
      background: "#fff",
      borderTop: `1px solid ${C.border}`,
      display: "flex",
      zIndex: 100,
      paddingBottom: 4,
    }}
  >
    {[
      { Icon: Brain, label: "Início", sc: SCREEN.HOME },
      { Icon: BookOpen, label: "Biblioteca", sc: SCREEN.BIBLIOTECA },
      { Icon: Stethoscope, label: "Sintomas", sc: SCREEN.SINTOMAS },
      { Icon: MessageSquare, label: "Partilhas", sc: SCREEN.PARTILHAS },
      { Icon: Phone, label: "Apoio", sc: SCREEN.APOIO },
      { Icon: Info, label: "Sobre nós", sc: SCREEN.SOBRE },
    ].map(({ Icon, label, sc }) => {
      const active =
        screen === sc ||
        (sc === SCREEN.BIBLIOTECA && screen === SCREEN.ARTICLE) ||
        (sc === SCREEN.SINTOMAS && screen === SCREEN.SINTOMA_DETAIL) ||
        (sc === SCREEN.PARTILHAS && screen === SCREEN.PARTILHAS_TEMA) ||
        (sc === SCREEN.HOME &&
          (screen === SCREEN.FORMACAO ||
            screen === SCREEN.DICAS ||
            screen === SCREEN.FASE2)) ||
        (sc === SCREEN.SOBRE && screen === SCREEN.PERFIL);
      return (
        <button
          key={sc}
          onClick={() => go(sc)}
          style={{
            flex: 1,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px 2px 6px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Icon
            size={21}
            color={active ? C.primary : "#94A3B8"}
            strokeWidth={active ? 2 : 1.6}
          />
          <span
            style={{
              fontSize: 9.5,
              fontWeight: active ? 700 : 500,
              color: active ? C.primary : "#94A3B8",
            }}
          >
            {label}
          </span>
        </button>
      );
    })}
  </div>
);

// ─────────────────────────────────────────────────────────────
// 📁 screens/OnboardingScreen.jsx
// ─────────────────────────────────────────────────────────────
export const OnboardingScreen = ({ step, setStep, perfil, setPerfil }) => {
  const dots = (cur) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 8,
        marginTop: 20,
      }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: i === cur ? 24 : 8,
            height: 8,
            borderRadius: 4,
            background: i === cur ? C.primary : C.border,
          }}
        />
      ))}
    </div>
  );

  if (step === 0)
    return (
      <div
        style={{
          fontFamily: "'Segoe UI', sans-serif",
          maxWidth: 420,
          margin: "0 auto",
          minHeight: "100vh",
          background: C.bg,
          display: "flex",
          flexDirection: "column",
          padding: "48px 28px 40px",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 22,
              background: `linear-gradient(135deg, ${C.primary}, #0B5FA5)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 6px 20px ${C.primary}44`,
              marginBottom: 28,
            }}
          >
            <Brain size={36} color="#fff" strokeWidth={1.7} />
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: C.text,
              letterSpacing: -0.5,
              marginBottom: 4,
            }}
          >
            <span>mem</span>
            <span style={{ color: C.primary }}>oris</span>
          </div>
          <div
            style={{
              fontSize: 11,
              color: C.muted,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            apoio à demência
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: C.text,
              lineHeight: 1.4,
              marginBottom: 16,
            }}
          >
            Não estás sozinho nesta jornada.
          </div>
          <div
            style={{
              fontSize: 15,
              color: C.muted,
              lineHeight: 1.75,
              maxWidth: 320,
            }}
          >
            Cuidar de alguém com demência é um dos papéis mais exigentes que
            existem. A Memoris foi criada para que não tenhas de percorrer este
            caminho sozinho.
          </div>
        </div>
        <button
          onClick={() => setStep(1)}
          style={{
            background: `linear-gradient(135deg, ${C.primary}, #0B5FA5)`,
            color: "#fff",
            border: "none",
            borderRadius: 16,
            padding: 16,
            fontSize: 16,
            fontWeight: 800,
            cursor: "pointer",
            boxShadow: `0 4px 14px ${C.primary}44`,
          }}
        >
          Continuar →
        </button>
        {dots(0)}
      </div>
    );

  if (step === 1)
    return (
      <div
        style={{
          fontFamily: "'Segoe UI', sans-serif",
          maxWidth: 420,
          margin: "0 auto",
          minHeight: "100vh",
          background: C.bg,
          display: "flex",
          flexDirection: "column",
          padding: "48px 28px 40px",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: C.text,
              marginBottom: 8,
            }}
          >
            Em que fase estás?
          </div>
          <div
            style={{
              fontSize: 14,
              color: C.muted,
              marginBottom: 28,
              lineHeight: 1.6,
            }}
          >
            Ajuda-nos a mostrar o conteúdo mais relevante. Podes alterar esta
            opção mais tarde.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {PERFIS.map((op) => (
              <div
                key={op.k}
                onClick={() => {
                  setPerfil(op.k);
                  setStep(2);
                }}
                style={{
                  background: C.white,
                  borderRadius: 16,
                  padding: "16px 18px",
                  cursor: "pointer",
                  border: `2px solid ${perfil === op.k ? C.primary : C.border}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  boxShadow: "0 1px 4px rgba(26,111,168,0.06)",
                }}
              >
                <div style={{ fontSize: 26 }}>{op.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>
                    {op.label}
                  </div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>
                    {op.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {dots(1)}
      </div>
    );

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        padding: "48px 28px 40px",
      }}
    >
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 22,
            fontWeight: 900,
            color: C.text,
            marginBottom: 8,
          }}
        >
          O que encontras aqui
        </div>
        <div
          style={{
            fontSize: 14,
            color: C.muted,
            marginBottom: 28,
            lineHeight: 1.6,
          }}
        >
          Tudo o que precisas, num só lugar.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            {
              Icon: BookOpen,
              color: C.primary,
              bg: C.primaryLight,
              label: "Informação científica acessível",
              sub: "Artigos e avanços baseados em literatura europeia de referência",
            },
            {
              Icon: Stethoscope,
              color: C.teal,
              bg: C.tealLight,
              label: "Guia prático de sintomas",
              sub: "Intervenções adaptadas para os desafios do dia a dia",
            },
            {
              Icon: MessageSquare,
              color: C.violet,
              bg: C.violetLight,
              label: "Comunidade e partilha",
              sub: "Um espaço para trocar experiências com outros cuidadores",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: C.white,
                borderRadius: 16,
                padding: "14px 16px",
                boxShadow: "0 1px 4px rgba(26,111,168,0.06)",
              }}
            >
              <IconBox Icon={item.Icon} color={item.color} bg={item.bg} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => setStep(3)}
        style={{
          background: `linear-gradient(135deg, ${C.primary}, #0B5FA5)`,
          color: "#fff",
          border: "none",
          borderRadius: 16,
          padding: 16,
          fontSize: 16,
          fontWeight: 800,
          cursor: "pointer",
          marginTop: 32,
          boxShadow: `0 4px 14px ${C.primary}44`,
        }}
      >
        Começar
      </button>
      {dots(2)}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// 📁 screens/HomeScreen.jsx
// ─────────────────────────────────────────────────────────────
export const HomeScreen = ({
  perfil,
  go,
  openArticle,
  nlEmail,
  setNlEmail,
  nlDone,
  setNlDone,
}) => {
  const grid = HOME_GRIDS[perfil] || HOME_GRIDS.cuidador;
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        background: C.bg,
        padding: "22px 20px 90px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <Logo />
        <button
          onClick={() => go(SCREEN.PERFIL)}
          style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            background: C.primaryLight,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Users size={18} color={C.primary} strokeWidth={1.8} />
        </button>
      </div>

      <div
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, #0B5FA5 100%)`,
          borderRadius: 22,
          padding: "22px 20px",
          marginBottom: 18,
          color: "#fff",
        }}
      >
        <div
          style={{
            fontSize: 13,
            opacity: 0.8,
            marginBottom: 4,
            fontWeight: 600,
            letterSpacing: 0.3,
          }}
        >
          {perfil === "novo"
            ? "Para quem está a começar"
            : perfil === "profissional"
            ? "Para profissionais"
            : "Para cuidadores"}
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            lineHeight: 1.5,
            marginBottom: 14,
          }}
        >
          {perfil === "novo"
            ? "Perceber a demência é o primeiro passo para cuidar melhor."
            : perfil === "profissional"
            ? "Ferramentas e formação para cuidados especializados."
            : "Não estás sozinho. Aqui encontras apoio e estratégias práticas."}
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: 14,
            padding: "12px 14px",
            fontSize: 13,
            lineHeight: 1.6,
            display: "flex",
            gap: 10,
            alignItems: "flex-start",
          }}
        >
          <Lightbulb
            size={16}
            color="#FCD34D"
            strokeWidth={2}
            style={{ flexShrink: 0, marginTop: 2 }}
          />
          <span>
            <strong>Hoje:</strong> O exercício físico, mesmo 1-2x por semana,
            tem evidência robusta na proteção cognitiva — Lancet, 2024.
          </span>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 11,
          marginBottom: 14,
        }}
      >
        {grid.map((item, i) => (
          <div
            key={i}
            onClick={() => go(item.sc)}
            style={{
              background: item.bg,
              borderRadius: 18,
              padding: 16,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                background: "rgba(255,255,255,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <item.Icon size={19} color={item.color} strokeWidth={1.7} />
            </div>
            <div style={{ fontWeight: 800, fontSize: 13, color: C.text }}>
              {item.label}
            </div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 3 }}>
              {item.sub}
            </div>
          </div>
        ))}
      </div>

      <div
        onClick={() => go(SCREEN.DICAS)}
        style={{
          background: C.white,
          borderRadius: 16,
          padding: "13px 16px",
          marginBottom: 14,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 1px 6px rgba(26,111,168,0.07)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              background: C.greenLight,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Lightbulb size={18} color={C.green} strokeWidth={1.8} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 13, color: C.text }}>
              Dicas para Cuidadores
            </div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 1 }}>
              Conselhos práticos para o dia a dia
            </div>
          </div>
        </div>
        <ChevronRight size={16} color={C.muted} strokeWidth={2.5} />
      </div>

      <div
        onClick={() => go(SCREEN.APOIO)}
        style={{
          background: C.redLight,
          borderRadius: 16,
          padding: "13px 16px",
          marginBottom: 14,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Phone size={18} color={C.red} strokeWidth={2} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 13, color: C.red }}>
              Precisas de apoio agora?
            </div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 1 }}>
              Linhas de apoio e recursos disponíveis
            </div>
          </div>
        </div>
        <ChevronRight size={16} color={C.red} strokeWidth={2.5} />
      </div>

      <Card
        style={{ marginBottom: 11 }}
        onClick={() => openArticle(ADVANCES[0])}
      >
        <div
          style={{
            fontSize: 11,
            color: C.muted,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <FlaskConical size={13} color={C.teal} strokeWidth={2} /> Avanço
          científico em destaque
        </div>
        <Tag label="Diagnóstico" color={C.teal} bg={C.tealLight} />
        <div
          style={{
            fontWeight: 800,
            fontSize: 14,
            color: C.text,
            margin: "8px 0 5px",
            lineHeight: 1.4,
          }}
        >
          Biomarcadores sanguíneos com +90% de precisão diagnóstica
        </div>
        <div style={{ fontSize: 13, color: C.muted, marginBottom: 12 }}>
          Investigadores suecos (Lund) validaram o teste p-tau217 — JAMA, 2024.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            color: C.teal,
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          <span>Ler mais</span>
          <ChevronRight size={15} strokeWidth={2.5} />
        </div>
      </Card>

      <Card
        style={{ marginBottom: 14 }}
        onClick={() => openArticle(ARTICLES[0])}
      >
        <div
          style={{
            fontSize: 11,
            color: C.muted,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <BookOpen size={13} color={C.primary} strokeWidth={2} /> Artigo em
          destaque
        </div>
        <Tag label="Alzheimer" color={C.primary} bg={C.primaryLight} />
        <div
          style={{
            fontWeight: 800,
            fontSize: 14,
            color: C.text,
            margin: "8px 0 5px",
            lineHeight: 1.4,
          }}
        >
          Doença de Alzheimer: mecanismos e progressão
        </div>
        <div style={{ fontSize: 13, color: C.muted, marginBottom: 12 }}>
          Critérios europeus IWG-2, fases clínicas — European Journal of
          Neurology.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            color: C.primary,
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          <span>Ler artigo</span>
          <ChevronRight size={15} strokeWidth={2.5} />
        </div>
      </Card>

      {/* Fase 2 teaser */}
      <div
        onClick={() => go(SCREEN.FASE2)}
        style={{
          background: C.white,
          borderRadius: 16,
          padding: "15px 16px",
          marginBottom: 14,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 1px 6px rgba(26,111,168,0.07)",
          border: `1.5px dashed ${C.border}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              background: `linear-gradient(135deg, ${C.primaryLight}, ${C.violetLight})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Rocket size={17} color={C.primary} strokeWidth={1.8} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ fontWeight: 800, fontSize: 13, color: C.text }}>
                O que aí vem
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  background: C.primaryLight,
                  color: C.primary,
                  borderRadius: 20,
                  padding: "2px 8px",
                }}
              >
                Fase 2
              </span>
            </div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>
              Diretório, estruturas de apoio e mais
            </div>
          </div>
        </div>
        <ChevronRight size={16} color={C.muted} strokeWidth={2.5} />
      </div>

      {/* Formulário de feedback */}
      <a
        href="https://forms.gle/PQHmk1XmAdNC7b6W8"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", display: "block", marginBottom: 14 }}
      >
        <div
          style={{
            background: C.greenLight,
            borderRadius: 16,
            padding: "13px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                background: "rgba(255,255,255,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MessageCircleHeart size={18} color={C.green} strokeWidth={1.8} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 13, color: C.text }}>
                Ajuda-nos a melhorar
              </div>
              <div style={{ fontSize: 11, color: C.muted, marginTop: 1 }}>
                Partilha a tua opinião — 3 minutos
              </div>
            </div>
          </div>
          <ChevronRight size={16} color={C.green} strokeWidth={2.5} />
        </div>
      </a>

      {/* Newsletter */}
      <div
        style={{
          background: `linear-gradient(135deg, ${C.primary}, #0B5FA5)`,
          borderRadius: 20,
          padding: 20,
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 6,
          }}
        >
          <Mail size={18} color="#fff" strokeWidth={1.8} />
          <span style={{ fontWeight: 800, fontSize: 15 }}>
            Newsletter Memoris
          </span>
        </div>
        <div
          style={{
            fontSize: 13,
            opacity: 0.9,
            marginBottom: 14,
            lineHeight: 1.6,
          }}
        >
          Dicas práticas e avanços científicos sobre demência, diretamente no
          teu email.
        </div>
        {nlDone ? (
          <div
            style={{
              background: "rgba(255,255,255,0.18)",
              borderRadius: 12,
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            <CheckCircle2 size={18} strokeWidth={2} /> Subscrito com sucesso!
          </div>
        ) : (
          <div style={{ display: "flex", gap: 8 }}>
            <input
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
              placeholder="O teu email..."
              type="email"
              style={{
                flex: 1,
                padding: "11px 14px",
                borderRadius: 11,
                border: "none",
                fontSize: 13,
                outline: "none",
                color: C.text,
              }}
            />
            <button
              onClick={() => {
                if (nlEmail.includes("@")) setNlDone(true);
              }}
              style={{
                background: C.white,
                color: C.primary,
                border: "none",
                borderRadius: 11,
                padding: "11px 16px",
                fontSize: 13,
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Subscrever
            </button>
          </div>
        )}
      </div>

      <Nav screen={SCREEN.HOME} go={go} />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// 📁 screens/LibraryScreen.jsx
// ─────────────────────────────────────────────────────────────
export const LibraryScreen = ({
  go,
  openArticle,
  libTab,
  setLibTab,
  filterTag,
  setFilterTag,
  search,
  setSearch,
}) => {
  const allArticles = libTab === TABS.DEMENCIAS ? ARTICLES : ADVANCES;
  const advTags = [
    "Todos",
    "Diagnóstico",
    "Tratamento",
    "Prevenção",
    "Investigação",
    "Nutrição",
  ];
  const filtered = allArticles.filter(
    (a) =>
      (filterTag === "Todos" || a.tag === filterTag) &&
      (!search || a.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        background: C.bg,
        padding: "22px 20px 90px",
      }}
    >
      <Hdr title="Biblioteca Científica" back backSc={SCREEN.HOME} go={go} />
      <div
        style={{
          display: "flex",
          background: C.border,
          borderRadius: 13,
          padding: 4,
          marginBottom: 16,
        }}
      >
        {[
          { k: TABS.DEMENCIAS, l: "Tipos de Demência" },
          { k: TABS.CIENCIA, l: "Avanços Científicos" },
        ].map((t) => (
          <button
            key={t.k}
            onClick={() => {
              setLibTab(t.k);
              setFilterTag("Todos");
              setSearch("");
            }}
            style={{
              flex: 1,
              padding: "9px 6px",
              borderRadius: 11,
              border: "none",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700,
              background: libTab === t.k ? C.white : "transparent",
              color: libTab === t.k ? C.primary : C.muted,
              boxShadow: libTab === t.k ? "0 1px 4px rgba(0,0,0,0.09)" : "none",
            }}
          >
            {t.l}
          </button>
        ))}
      </div>

      <div style={{ position: "relative", marginBottom: 14 }}>
        <Search
          size={15}
          color={C.muted}
          strokeWidth={2}
          style={{
            position: "absolute",
            left: 14,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar..."
          style={{
            width: "100%",
            padding: "11px 14px 11px 38px",
            borderRadius: 13,
            border: `1px solid ${C.border}`,
            fontSize: 13,
            boxSizing: "border-box",
            outline: "none",
            color: C.text,
            background: C.white,
          }}
        />
        {search && (
          <X
            size={14}
            color={C.muted}
            onClick={() => setSearch("")}
            style={{
              position: "absolute",
              right: 14,
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          />
        )}
      </div>

      {libTab === TABS.DEMENCIAS && (
        <Card style={{ marginBottom: 14 }}>
          <div
            style={{
              fontSize: 11,
              color: C.muted,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 0.4,
              marginBottom: 11,
            }}
          >
            Prevalência na Europa
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {DEMENCIAS.map((d) => (
              <div
                key={d.tag}
                onClick={() =>
                  setFilterTag(filterTag === d.tag ? "Todos" : d.tag)
                }
                style={{
                  background: d.bg,
                  borderRadius: 11,
                  padding: "7px 12px",
                  cursor: "pointer",
                  border:
                    filterTag === d.tag
                      ? `2px solid ${d.color}`
                      : "2px solid transparent",
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: d.color }}>
                  {d.tag}
                </div>
                <div style={{ fontSize: 10, color: C.muted }}>
                  {d.prevalencia}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {libTab === TABS.CIENCIA && (
        <div
          style={{
            display: "flex",
            gap: 7,
            marginBottom: 14,
            flexWrap: "wrap",
          }}
        >
          {advTags.map((t) => (
            <span
              key={t}
              onClick={() => setFilterTag(t)}
              style={{
                background: filterTag === t ? C.primary : C.white,
                color: filterTag === t ? "#fff" : C.muted,
                borderRadius: 20,
                padding: "5px 14px",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                border: `1px solid ${filterTag === t ? C.primary : C.border}`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {filtered.map((a) => {
          const d = DEMENCIAS.find((x) => x.tag === a.tag);
          return (
            <Card key={a.id} onClick={() => openArticle(a)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 9,
                }}
              >
                <Tag
                  label={a.tag}
                  color={a.tagColor || d?.color || C.primary}
                  bg={a.tagBg || d?.bg || C.primaryLight}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: C.muted,
                  }}
                >
                  <Clock size={12} strokeWidth={2} />
                  <span style={{ fontSize: 11 }}>{a.time}</span>
                </div>
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 14,
                  color: C.text,
                  marginBottom: 4,
                  lineHeight: 1.4,
                }}
              >
                {a.title}
              </div>
              <div style={{ fontSize: 13, color: C.muted, marginBottom: 9 }}>
                {a.desc}
              </div>
              <div
                style={{ display: "flex", alignItems: "flex-start", gap: 5 }}
              >
                <Paperclip
                  size={11}
                  color={C.muted}
                  strokeWidth={2}
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <span
                  style={{
                    fontSize: 11,
                    color: C.muted,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                  }}
                >
                  {a.fonte}
                </span>
              </div>
            </Card>
          );
        })}
        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "40px 0",
              color: C.muted,
              fontSize: 14,
            }}
          >
            Nenhum resultado encontrado.
          </div>
        )}
      </div>

      <Nav screen={SCREEN.BIBLIOTECA} go={go} />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// 📁 screens/ArticleScreen.jsx
// ─────────────────────────────────────────────────────────────
export const ArticleScreen = ({ go, article }) => {
  const d = DEMENCIAS.find((x) => x.tag === article.tag);
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        background: C.bg,
        padding: "22px 20px 90px",
      }}
    >
      <Hdr back backSc={SCREEN.BIBLIOTECA} go={go} />
      <Tag
        label={article.tag}
        color={article.tagColor || d?.color || C.primary}
        bg={article.tagBg || d?.bg || C.primaryLight}
      />
      <h1
        style={{
          fontSize: 20,
          fontWeight: 900,
          color: C.text,
          margin: "14px 0 6px",
          lineHeight: 1.35,
        }}
      >
        {article.title}
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          color: C.muted,
          marginBottom: 8,
        }}
      >
        <Clock size={13} strokeWidth={2} />
        <span style={{ fontSize: 12 }}>{article.time} de leitura</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 6,
          marginBottom: 20,
          padding: "10px 12px",
          background: C.white,
          borderRadius: 11,
          border: `1px solid ${C.border}`,
        }}
      >
        <Paperclip
          size={13}
          color={C.muted}
          strokeWidth={2}
          style={{ flexShrink: 0, marginTop: 2 }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span
            style={{
              fontSize: 11,
              color: C.muted,
              fontStyle: "italic",
              lineHeight: 1.6,
            }}
          >
            {article.fonte}
          </span>
          <a
            href={`https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(
              article.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 11,
              color: C.primary,
              fontWeight: 600,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <ExternalLink size={11} strokeWidth={2} /> Pesquisar no PubMed
          </a>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {article.body.map((p, i) => (
          <Card key={i}>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                color: C.text,
                lineHeight: 1.85,
              }}
            >
              {p}
            </p>
          </Card>
        ))}
      </div>
      <div
        style={{
          marginTop: 14,
          background: C.tealLight,
          borderRadius: 13,
          padding: 14,
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
        }}
      >
        <ShieldCheck
          size={16}
          color={C.teal}
          strokeWidth={2}
          style={{ flexShrink: 0, marginTop: 1 }}
        />
        <span style={{ fontSize: 12, color: C.teal, lineHeight: 1.6 }}>
          Conteúdo informativo baseado em literatura científica europeia e
          americana. Consulta sempre um profissional de saúde para orientação
          personalizada.
        </span>
      </div>
      <Nav screen={SCREEN.BIBLIOTECA} go={go} />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// 📁 screens/SymptomsScreen.jsx
// ─────────────────────────────────────────────────────────────
export const SymptomsScreen = ({
  go,
  openSintoma,
  sintomaSearch,
  setSintomaSearch,
}) => {
  const filtered = SINTOMAS.filter((s) =>
    s.label.toLowerCase().includes(sintomaSearch.toLowerCase())
  );
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        background: C.bg,
        padding: "22px 20px 90px",
      }}
    >
      <Hdr title="Guia de Sintomas" back backSc={SCREEN.HOME} go={go} />
      <div
        style={{
          background: C.amberLight,
          borderRadius: 16,
          padding: 14,
          marginBottom: 18,
          display: "flex",
          gap: 11,
          alignItems: "flex-start",
        }}
      >
        <AlertCircle
          size={18}
          color={C.amber}
          strokeWidth={2}
          style={{ flexShrink: 0, marginTop: 1 }}
        />
        <div style={{ fontSize: 12, color: C.amber, lineHeight: 1.65 }}>
          <strong>Nota importante:</strong> As intervenções são{" "}
          <strong>sugestões genéricas</strong>. Cada pessoa reage de forma
          diferente. Não substituem acompanhamento profissional individualizado.
        </div>
      </div>
      <div style={{ position: "relative", marginBottom: 16 }}>
        <Search
          size={15}
          color={C.muted}
          strokeWidth={2}
          style={{
            position: "absolute",
            left: 14,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        <input
          value={sintomaSearch}
          onChange={(e) => setSintomaSearch(e.target.value)}
          placeholder="Pesquisar sintoma..."
          style={{
            width: "100%",
            padding: "11px 14px 11px 38px",
            borderRadius: 13,
            border: `1px solid ${C.border}`,
            fontSize: 13,
            boxSizing: "border-box",
            outline: "none",
            color: C.text,
            background: C.white,
          }}
        />
        {sintomaSearch && (
          <X
            size={14}
            color={C.muted}
            onClick={() => setSintomaSearch("")}
            style={{
              position: "absolute",
              right: 14,
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          />
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {filtered.map((s) => (
          <Card
            key={s.id}
            onClick={() => openSintoma(s)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: C.primaryLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}
              >
                {s.icon}
              </div>
              <span style={{ fontWeight: 700, fontSize: 14, color: C.text }}>
                {s.label}
              </span>
            </div>
            <ChevronRight size={18} color={C.muted} strokeWidth={2} />
          </Card>
        ))}
      </div>
      <Nav screen={SCREEN.SINTOMAS} go={go} />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// 📁 screens/SymptomsDetailScreen.jsx
// ─────────────────────────────────────────────────────────────
export const SymptomsDetailScreen = ({ go, sintoma }) => (
  <div
    style={{
      fontFamily: "'Segoe UI', sans-serif",
      maxWidth: 420,
      margin: "0 auto",
      minHeight: "100vh",
      background: C.bg,
      padding: "22px 20px 90px",
    }}
  >
    <Hdr back backSc={SCREEN.SINTOMAS} go={go} />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 16,
          background: C.primaryLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 26,
        }}
      >
        {sintoma.icon}
      </div>
      <h1
        style={{
          margin: 0,
          fontSize: 20,
          fontWeight: 900,
          color: C.text,
          lineHeight: 1.3,
        }}
      >
        {sintoma.label}
      </h1>
    </div>
    <div
      style={{
        background: C.amberLight,
        borderRadius: 14,
        padding: 14,
        marginBottom: 20,
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
      }}
    >
      <AlertCircle
        size={15}
        color={C.amber}
        strokeWidth={2}
        style={{ flexShrink: 0, marginTop: 2 }}
      />
      <span style={{ fontSize: 12, color: C.amber, lineHeight: 1.65 }}>
        Orientações <strong>genéricas</strong> — cada pessoa é única. Consulta
        sempre um profissional de saúde para uma abordagem individualizada.
      </span>
    </div>
    <div
      style={{
        fontSize: 13,
        color: C.muted,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 0.5,
        marginBottom: 12,
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      <Target size={13} color={C.primary} strokeWidth={2} /> Intervenções
      sugeridas
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginBottom: 14,
      }}
    >
      {sintoma.intervencoes.map((inv, i) => (
        <Card
          key={i}
          style={{
            display: "flex",
            gap: 13,
            alignItems: "flex-start",
            padding: "15px 16px",
          }}
        >
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 8,
              background: C.primaryLight,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 800, color: C.primary }}>
              {i + 1}
            </span>
          </div>
          <span style={{ fontSize: 14, color: C.text, lineHeight: 1.7 }}>
            {inv}
          </span>
        </Card>
      ))}
    </div>
    <div
      style={{
        background: C.tealLight,
        borderRadius: 13,
        padding: 14,
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
      }}
    >
      <ShieldCheck
        size={16}
        color={C.teal}
        strokeWidth={2}
        style={{ flexShrink: 0, marginTop: 1 }}
      />
      <span style={{ fontSize: 12, color: C.teal, lineHeight: 1.65 }}>
        Se os sintomas persistirem ou causarem sofrimento significativo,
        consulta o médico de família ou neurologista.
      </span>
    </div>
    <Nav screen={SCREEN.SINTOMAS} go={go} />
  </div>
);

// ─────────────────────────────────────────────────────────────
// 📁 components/PostCard.jsx
// ─────────────────────────────────────────────────────────────
export const PostCard = ({
  post,
  tema,
  expandedPost,
  setExpandedPost,
  replyText,
  setReplyText,
  replyAutor,
  setReplyAutor,
  onSubmitReply,
}) => (
  <Card style={{ padding: 0, overflow: "hidden" }}>
    <div style={{ padding: "16px 18px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 9,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 11,
            background: tema.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 800, color: tema.color }}>
            {post.autor[0]}
          </span>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>
              {post.autor}
            </span>
            {post.isExample && (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  background: "#F1F5F9",
                  color: C.muted,
                  borderRadius: 6,
                  padding: "1px 7px",
                }}
              >
                Exemplo
              </span>
            )}
          </div>
          <div style={{ fontSize: 11, color: C.muted }}>{post.data}</div>
        </div>
      </div>
      <p style={{ margin: 0, fontSize: 14, color: C.text, lineHeight: 1.75 }}>
        {post.texto}
      </p>
    </div>

    {post.replies.length > 0 && (
      <div style={{ borderTop: `1px solid ${C.border}`, background: C.bg }}>
        {post.replies.map((r) => (
          <div
            key={r.id}
            style={{
              padding: "12px 18px 12px 28px",
              borderBottom: `1px solid ${C.border}`,
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <CornerDownRight
              size={14}
              color={C.muted}
              strokeWidth={2}
              style={{ flexShrink: 0, marginTop: 3 }}
            />
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: r.autor.includes("Memora") ? C.primary : C.text,
                  }}
                >
                  {r.autor}
                </span>
                {r.autor.includes("Memora") && (
                  <span
                    style={{
                      fontSize: 10,
                      background: C.primaryLight,
                      color: C.primary,
                      borderRadius: 6,
                      padding: "1px 7px",
                      fontWeight: 700,
                    }}
                  >
                    Moderador
                  </span>
                )}
                <span style={{ fontSize: 11, color: C.muted }}>{r.data}</span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: C.text,
                  lineHeight: 1.7,
                }}
              >
                {r.texto}
              </p>
            </div>
          </div>
        ))}
      </div>
    )}

    <div style={{ borderTop: `1px solid ${C.border}`, padding: "10px 16px" }}>
      {expandedPost !== post.id ? (
        <button
          onClick={() => setExpandedPost(post.id)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 7,
            color: C.muted,
            fontSize: 13,
            padding: 0,
          }}
        >
          <MessageSquare size={14} strokeWidth={2} />
          <span>
            {post.replies.length > 0
              ? `${post.replies.length} resposta${
                  post.replies.length !== 1 ? "s" : ""
                } · Responder`
              : "Responder"}
          </span>
        </button>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          <input
            value={replyAutor}
            onChange={(e) => setReplyAutor(e.target.value)}
            placeholder="O teu nome (opcional)"
            style={{
              padding: "9px 12px",
              borderRadius: 9,
              border: `1px solid ${C.border}`,
              fontSize: 12,
              outline: "none",
              color: C.text,
            }}
          />
          <div style={{ display: "flex", gap: 8 }}>
            <input
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Escreve a tua resposta..."
              style={{
                flex: 1,
                padding: "9px 12px",
                borderRadius: 9,
                border: `1px solid ${C.border}`,
                fontSize: 13,
                outline: "none",
                color: C.text,
              }}
            />
            <button
              onClick={() => onSubmitReply(post.id)}
              style={{
                background: replyText.trim() ? C.primary : "#CBD5E1",
                color: "#fff",
                border: "none",
                borderRadius: 9,
                padding: "9px 14px",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              <Send size={14} strokeWidth={2.2} />
            </button>
          </div>
          <button
            onClick={() => {
              setExpandedPost(null);
              setReplyText("");
              setReplyAutor("");
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 12,
              color: C.muted,
              textAlign: "left",
              padding: 0,
            }}
          >
            Cancelar
          </button>
        </div>
      )}
    </div>
  </Card>
);

// ─────────────────────────────────────────────────────────────
// 📁 screens/SharesScreen.jsx
// ─────────────────────────────────────────────────────────────
export const SharesScreen = ({ go, posts, openTema }) => (
  <div
    style={{
      fontFamily: "'Segoe UI', sans-serif",
      maxWidth: 420,
      margin: "0 auto",
      minHeight: "100vh",
      background: C.bg,
      padding: "22px 20px 90px",
    }}
  >
    <Hdr title="Partilhas" back backSc={SCREEN.HOME} go={go} />
    <div
      style={{
        background: C.primaryLight,
        borderRadius: 16,
        padding: 14,
        marginBottom: 20,
        display: "flex",
        gap: 11,
        alignItems: "flex-start",
      }}
    >
      <Users
        size={18}
        color={C.primary}
        strokeWidth={2}
        style={{ flexShrink: 0, marginTop: 1 }}
      />
      <div style={{ fontSize: 13, color: C.primary, lineHeight: 1.65 }}>
        Um espaço para partilhar experiências com outros cuidadores. Moderado
        por um enfermeiro especializado em demência.
      </div>
    </div>
    <div
      style={{
        fontSize: 12,
        color: C.muted,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 0.5,
        marginBottom: 12,
      }}
    >
      Escolhe um tema
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {TEMAS.map((t) => {
        const count = posts.filter((p) => p.tema === t.id).length;
        return (
          <Card
            key={t.id}
            onClick={() => openTema(t)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 13,
                  background: t.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 21,
                }}
              >
                {t.icon}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>
                  {t.label}
                </div>
                <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>
                  {count} partilha{count !== 1 ? "s" : ""}
                </div>
              </div>
            </div>
            <ChevronRight size={18} color={C.muted} strokeWidth={2} />
          </Card>
        );
      })}
    </div>
    <Nav screen={SCREEN.PARTILHAS} go={go} />
  </div>
);

// ─────────────────────────────────────────────────────────────
// 📁 screens/SharesThemeScreen.jsx
// ─────────────────────────────────────────────────────────────
export const SharesThemeScreen = ({
  go,
  tema,
  posts,
  setPosts,
  expandedPost,
  setExpandedPost,
  replyText,
  setReplyText,
  replyAutor,
  setReplyAutor,
}) => {
  const [newPost, setNewPost] = useState({ autor: "", texto: "", open: false });
  const temaPosts = posts.filter((p) => p.tema === tema.id);

  const submitPost = () => {
    if (!newPost.texto.trim()) return;
    setPosts((p) => [
      {
        id: Date.now(),
        tema: tema.id,
        autor: newPost.autor.trim() || "Anónimo",
        texto: newPost.texto.trim(),
        data: "agora mesmo",
        replies: [],
      },
      ...p,
    ]);
    setNewPost({ autor: "", texto: "", open: false });
  };

  const submitReply = (pid) => {
    if (!replyText.trim()) return;
    setPosts((p) =>
      p.map((post) =>
        post.id === pid
          ? {
              ...post,
              replies: [
                ...post.replies,
                {
                  id: Date.now(),
                  autor: replyAutor.trim() || "Anónimo",
                  texto: replyText.trim(),
                  data: "agora mesmo",
                },
              ],
            }
          : post
      )
    );
    setReplyText("");
    setReplyAutor("");
    setExpandedPost(null);
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        background: C.bg,
        padding: "22px 20px 90px",
      }}
    >
      <Hdr back backSc={SCREEN.PARTILHAS} go={go} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 13,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 15,
            background: tema.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
          }}
        >
          {tema.icon}
        </div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 900, color: C.text }}>
          {tema.label}
        </h1>
      </div>

      <Card style={{ marginBottom: 16, border: `1px solid ${C.border}` }}>
        {!newPost.open ? (
          <button
            onClick={() => setNewPost((p) => ({ ...p, open: true }))}
            style={{
              width: "100%",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: 0,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                background: C.primaryLight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Plus size={18} color={C.primary} strokeWidth={2.2} />
            </div>
            <span style={{ fontSize: 14, color: C.muted }}>
              Partilhar uma experiência ou pergunta...
            </span>
          </button>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <input
              value={newPost.autor}
              onChange={(e) =>
                setNewPost((p) => ({ ...p, autor: e.target.value }))
              }
              placeholder="O teu nome (opcional — pode ser anónimo)"
              style={{
                padding: "10px 13px",
                borderRadius: 10,
                border: `1px solid ${C.border}`,
                fontSize: 13,
                outline: "none",
                color: C.text,
              }}
            />
            <textarea
              value={newPost.texto}
              onChange={(e) =>
                setNewPost((p) => ({ ...p, texto: e.target.value }))
              }
              placeholder="Escreve a tua partilha, experiência ou pergunta..."
              rows={4}
              style={{
                padding: "10px 13px",
                borderRadius: 10,
                border: `1px solid ${C.border}`,
                fontSize: 13,
                outline: "none",
                resize: "none",
                fontFamily: "inherit",
                color: C.text,
              }}
            />
            <div style={{ display: "flex", gap: 9 }}>
              <button
                onClick={() =>
                  setNewPost({ autor: "", texto: "", open: false })
                }
                style={{
                  flex: 1,
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  padding: 10,
                  fontSize: 13,
                  fontWeight: 700,
                  color: C.muted,
                  cursor: "pointer",
                }}
              >
                Cancelar
              </button>
              <button
                onClick={submitPost}
                style={{
                  flex: 2,
                  background: newPost.texto.trim() ? C.primary : "#CBD5E1",
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: 10,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                }}
              >
                <Send size={14} strokeWidth={2.2} /> Publicar
              </button>
            </div>
          </div>
        )}
      </Card>

      {temaPosts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 0", color: C.muted }}>
          <MessageSquare
            size={36}
            color={C.border}
            strokeWidth={1.5}
            style={{ marginBottom: 12 }}
          />
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: C.text,
              marginBottom: 6,
            }}
          >
            Ainda não há partilhas aqui.
          </div>
          <div style={{ fontSize: 13 }}>Sê o primeiro a partilhar.</div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {temaPosts.map((p) => (
            <PostCard
              key={p.id}
              post={p}
              tema={tema}
              expandedPost={expandedPost}
              setExpandedPost={setExpandedPost}
              replyText={replyText}
              setReplyText={setReplyText}
              replyAutor={replyAutor}
              setReplyAutor={setReplyAutor}
              onSubmitReply={submitReply}
            />
          ))}
        </div>
      )}
      <Nav screen={SCREEN.PARTILHAS} go={go} />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// 📁 screens/TipsScreen.jsx
// ─────────────────────────────────────────────────────────────
export const TipsScreen = ({ go }) => (
  <div
    style={{
      fontFamily: "'Segoe UI', sans-serif",
      maxWidth: 420,
      margin: "0 auto",
      minHeight: "100vh",
      background: C.bg,
      padding: "22px 20px 90px",
    }}
  >
    <Hdr title="Dicas para Cuidadores" back backSc={SCREEN.HOME} go={go} />
    <div
      style={{
        background: C.greenLight,
        borderRadius: 18,
        padding: 16,
        marginBottom: 18,
        display: "flex",
        gap: 13,
        alignItems: "flex-start",
      }}
    >
      <IconBox Icon={Sun} color={C.green} bg={C.white} size={20} />
      <div>
        <div
          style={{
            fontSize: 11,
            color: C.green,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 0.4,
          }}
        >
          Dica de hoje
        </div>
        <div
          style={{
            fontSize: 14,
            color: C.text,
            fontWeight: 600,
            marginTop: 4,
            lineHeight: 1.5,
          }}
        >
          A tua serenidade é contagiante — quando estás calmo, o teu familiar
          sente-o e responde melhor.
        </div>
      </div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {TIPS.map((tip, i) => (
        <Card key={i}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <IconBox Icon={tip.icon} color={tip.color} bg={`${tip.color}18`} />
            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 14,
                  color: C.text,
                  marginBottom: 5,
                }}
              >
                {tip.title}
              </div>
              <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.65 }}>
                {tip.desc}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
    <Nav screen={SCREEN.HOME} go={go} />
  </div>
);

// ─────────────────────────────────────────────────────────────
// 📁 screens/TrainingScreen.jsx
// ─────────────────────────────────────────────────────────────
export const TrainingScreen = ({
  go,
  formType,
  setFormType,
  form,
  setForm,
  submitted,
  setSubmitted,
}) => {
  if (!formType)
    return (
      <div
        style={{
          fontFamily: "'Segoe UI', sans-serif",
          maxWidth: 420,
          margin: "0 auto",
          minHeight: "100vh",
          background: C.bg,
          padding: "22px 20px 90px",
        }}
      >
        <Hdr
          title="Formação / Acompanhamento"
          back
          backSc={SCREEN.HOME}
          go={go}
        />
        <div
          style={{
            fontSize: 14,
            color: C.muted,
            lineHeight: 1.7,
            marginBottom: 16,
          }}
        >
          Ofereço dois tipos de apoio especializado — escolhe o que melhor se
          adapta à tua situação.
        </div>
        <div
          style={{
            background: C.primaryLight,
            borderRadius: 13,
            padding: "10px 14px",
            marginBottom: 20,
            display: "flex",
            gap: 9,
            alignItems: "center",
          }}
        >
          <MapPin
            size={15}
            color={C.primary}
            strokeWidth={2}
            style={{ flexShrink: 0 }}
          />
          <span style={{ fontSize: 12, color: C.primary, lineHeight: 1.5 }}>
            <strong>Zona Centro</strong> — Guarda e Viseu. Outras zonas, entra
            em contacto.
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            {
              type: "instituicao",
              Icon: Building2,
              color: C.amber,
              bg: C.amberLight,
              title: "Formação para Instituições",
              desc: "Sessões de formação especializadas em demência para equipas de lares, centros de dia, unidades de cuidados e outras estruturas. Abordagem prática, centrada na pessoa e baseada em evidência científica.",
              cta: "Solicitar formação",
            },
            {
              type: "domicilio",
              Icon: Home,
              color: C.teal,
              bg: C.tealLight,
              title: "Acompanhamento Familiar ao Domicílio",
              desc: "Apoio direto à família em casa — avaliação da situação, orientação personalizada, estratégias de cuidado adaptadas ao contexto real da pessoa com demência e do seu cuidador.",
              cta: "Solicitar acompanhamento",
            },
          ].map((opt) => (
            <div
              key={opt.type}
              onClick={() => setFormType(opt.type)}
              style={{
                background: C.white,
                borderRadius: 18,
                padding: 20,
                cursor: "pointer",
                border: `2px solid ${C.border}`,
                boxShadow: "0 1px 6px rgba(26,111,168,0.07)",
              }}
            >
              <div
                style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
              >
                <IconBox Icon={opt.Icon} color={opt.color} bg={opt.bg} />
                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: 15,
                      color: C.text,
                      marginBottom: 6,
                    }}
                  >
                    {opt.title}
                  </div>
                  <div
                    style={{ fontSize: 13, color: C.muted, lineHeight: 1.65 }}
                  >
                    {opt.desc}
                  </div>
                  <div
                    style={{
                      marginTop: 12,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      color: opt.color,
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    {opt.cta} <ChevronRight size={14} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Nav screen={SCREEN.HOME} go={go} />
      </div>
    );

  if (submitted)
    return (
      <div
        style={{
          fontFamily: "'Segoe UI', sans-serif",
          maxWidth: 420,
          margin: "0 auto",
          minHeight: "100vh",
          background: C.bg,
          padding: "22px 20px 90px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "40px 16px",
            background: C.white,
            borderRadius: 18,
            boxShadow: "0 1px 6px rgba(26,111,168,0.07)",
            margin: "60px 0",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: C.tealLight,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <CheckCircle2 size={32} color={C.teal} strokeWidth={1.8} />
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 900,
              color: C.text,
              marginBottom: 8,
            }}
          >
            Pedido enviado!
          </div>
          <div
            style={{
              fontSize: 13,
              color: C.muted,
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            Irei analisar o vosso pedido e entrar em contacto em breve para
            agendar{" "}
            {formType === "domicilio" ? "o acompanhamento" : "a formação"}.
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormType(null);
              go(SCREEN.HOME);
            }}
            style={{
              background: C.primary,
              color: "#fff",
              border: "none",
              borderRadius: 13,
              padding: "13px 28px",
              fontSize: 14,
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Voltar ao início
          </button>
        </div>
      </div>
    );

  const isDom = formType === "domicilio";
  const fields = isDom
    ? [
        {
          k: "nome",
          label: "O teu nome *",
          ph: "Nome do cuidador principal",
          type: "text",
        },
        { k: "email", label: "Email *", ph: "o.teu@email.pt", type: "email" },
        {
          k: "telefone",
          label: "Telefone *",
          ph: "+351 000 000 000",
          type: "text",
        },
        {
          k: "distrito",
          label: "Localização (concelho) *",
          ph: "Ex: Guarda, Viseu, Porto...",
          type: "text",
        },
      ]
    : [
        {
          k: "nome",
          label: "Nome do responsável *",
          ph: "O teu nome",
          type: "text",
        },
        {
          k: "instituicao",
          label: "Nome da instituição *",
          ph: "Lar, centro de dia, associação...",
          type: "text",
        },
        {
          k: "email",
          label: "Email *",
          ph: "email@instituicao.pt",
          type: "email",
        },
        {
          k: "telefone",
          label: "Telefone",
          ph: "+351 000 000 000",
          type: "text",
        },
        {
          k: "distrito",
          label: "Distrito / Concelho",
          ph: "Ex: Guarda, Coimbra, Lisboa...",
          type: "text",
        },
      ];

  const isValid = isDom
    ? form.nome && form.email && form.telefone && form.distrito
    : form.nome && form.email && form.instituicao;

  const handleSend = () => {
    if (!isValid) return;
    const tipo = isDom
      ? "Acompanhamento Domiciliário"
      : `Formação — ${form.instituicao}`;
    const s = encodeURIComponent(`[Memoris] ${tipo}`);
    const b = encodeURIComponent(
      `Tipo: ${
        isDom ? "Acompanhamento Domiciliário" : "Formação para Instituição"
      }\nNome: ${form.nome}\n${
        form.instituicao ? `Instituição: ${form.instituicao}\n` : ""
      }Email: ${form.email}\nTelefone: ${form.telefone}\nLocalização: ${
        form.distrito
      }\n\nMensagem:\n${form.mensagem}`
    );
    window.open(`mailto:app.memoris@gmail.com?subject=${s}&body=${b}`);
    setSubmitted(true);
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        background: C.bg,
        padding: "22px 20px 90px",
      }}
    >
      <Hdr
        title="Formação / Acompanhamento"
        back
        backSc={SCREEN.HOME}
        go={go}
      />
      <button
        onClick={() => setFormType(null)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: C.muted,
          fontSize: 13,
          marginBottom: 18,
          padding: 0,
        }}
      >
        <ArrowLeft size={14} strokeWidth={2} /> Voltar à escolha
      </button>
      <div
        style={{
          background: isDom ? C.tealLight : C.amberLight,
          borderRadius: 16,
          padding: 14,
          marginBottom: 20,
          display: "flex",
          gap: 11,
          alignItems: "flex-start",
        }}
      >
        {isDom ? (
          <Home
            size={18}
            color={C.teal}
            strokeWidth={2}
            style={{ flexShrink: 0, marginTop: 1 }}
          />
        ) : (
          <Building2
            size={18}
            color={C.amber}
            strokeWidth={2}
            style={{ flexShrink: 0, marginTop: 1 }}
          />
        )}
        <span
          style={{
            fontSize: 13,
            color: isDom ? C.teal : C.amber,
            lineHeight: 1.65,
          }}
        >
          {isDom
            ? "Acompanhamento familiar ao domicílio — preenche o formulário e entro em contacto para perceber a vossa situação e agendar uma visita."
            : "Formação para a vossa instituição — preenche o formulário e entro em contacto para agendar uma sessão."}
        </span>
      </div>
      <Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          {fields.map((f) => (
            <div key={f.k}>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: C.text,
                  display: "block",
                  marginBottom: 5,
                }}
              >
                {f.label}
              </label>
              <input
                type={f.type}
                placeholder={f.ph}
                value={form[f.k]}
                onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                style={{
                  width: "100%",
                  padding: "11px 13px",
                  borderRadius: 11,
                  border: `1px solid ${C.border}`,
                  fontSize: 13,
                  boxSizing: "border-box",
                  outline: "none",
                  color: C.text,
                }}
              />
            </div>
          ))}
          <div>
            <label
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: C.text,
                display: "block",
                marginBottom: 5,
              }}
            >
              {isDom
                ? "Breve descrição da situação *"
                : "Mensagem / contexto adicional"}
            </label>
            <textarea
              placeholder={
                isDom
                  ? "Descreve brevemente a situação do teu familiar e as principais dificuldades..."
                  : "Descreve a vossa realidade e necessidades de formação..."
              }
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              rows={3}
              style={{
                width: "100%",
                padding: "11px 13px",
                borderRadius: 11,
                border: `1px solid ${C.border}`,
                fontSize: 13,
                boxSizing: "border-box",
                outline: "none",
                resize: "none",
                fontFamily: "inherit",
                color: C.text,
              }}
            />
          </div>
          <button
            onClick={handleSend}
            style={{
              background: isValid ? (isDom ? C.teal : C.amber) : "#CBD5E1",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: 14,
              fontSize: 14,
              fontWeight: 800,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Send size={15} strokeWidth={2.2} />{" "}
            {isDom ? "Solicitar Acompanhamento" : "Enviar Pedido"}
          </button>
          <div style={{ fontSize: 11, color: C.muted, textAlign: "center" }}>
            * Campos obrigatórios
          </div>
        </div>
      </Card>
      <Nav screen={SCREEN.HOME} go={go} />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// 📁 screens/SupportScreen.jsx
// ─────────────────────────────────────────────────────────────
export const SupportScreen = ({ go }) => (
  <div
    style={{
      fontFamily: "'Segoe UI', sans-serif",
      maxWidth: 420,
      margin: "0 auto",
      minHeight: "100vh",
      background: C.bg,
      padding: "22px 20px 90px",
    }}
  >
    <Hdr title="Apoio" back backSc={SCREEN.HOME} go={go} />
    <div
      style={{
        fontSize: 13,
        fontWeight: 800,
        color: C.text,
        marginBottom: 12,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Phone size={15} color={C.primary} strokeWidth={2} /> Onde pedir ajuda
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 11,
        marginBottom: 14,
      }}
    >
      {RECURSOS.map((r, i) => (
        <Card key={i}>
          <div
            style={{
              display: "flex",
              gap: 13,
              alignItems: "flex-start",
              marginBottom: 12,
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 13,
                background: r.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Phone size={19} color={r.cor} strokeWidth={1.7} />
            </div>
            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 14,
                  color: C.text,
                  marginBottom: 4,
                }}
              >
                {r.nome}
              </div>
              <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
                {r.desc}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
            <a
              href={`tel:${r.tel.replace(/\s/g, "")}`}
              style={{
                background: r.bg,
                color: r.cor,
                borderRadius: 10,
                padding: "8px 14px",
                fontSize: 13,
                fontWeight: 700,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Phone size={13} strokeWidth={2.2} /> {r.tel}
            </a>
            {r.site && (
              <a
                href={r.site}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#F1F5F9",
                  color: C.muted,
                  borderRadius: 10,
                  padding: "8px 14px",
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <ExternalLink size={13} strokeWidth={2} /> Visitar site
              </a>
            )}
          </div>
        </Card>
      ))}
    </div>
    <Nav screen={SCREEN.APOIO} go={go} />
  </div>
);

// ─────────────────────────────────────────────────────────────
// 📁 screens/ProfileScreen.jsx
// ─────────────────────────────────────────────────────────────
export const ProfileScreen = ({ go, perfil, setPerfil }) => {
  const [editPerfil, setEditPerfil] = useState(false);
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        background: C.bg,
        padding: "22px 20px 90px",
      }}
    >
      <Hdr title="O meu perfil" back backSc={SCREEN.HOME} go={go} />
      <div
        style={{
          fontSize: 13,
          color: C.muted,
          marginBottom: 20,
          lineHeight: 1.6,
        }}
      >
        A app está personalizada para o teu perfil. Podes alterá-lo a qualquer
        momento.
      </div>
      {!editPerfil ? (
        <Card>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ fontSize: 28 }}>
                {PERFIS.find((p) => p.k === perfil)?.icon || "🤝"}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>
                  {PERFIS.find((p) => p.k === perfil)?.label || "Cuidador"}
                </div>
                <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>
                  Perfil atual
                </div>
              </div>
            </div>
            <button
              onClick={() => setEditPerfil(true)}
              style={{
                background: C.primaryLight,
                color: C.primary,
                border: "none",
                borderRadius: 10,
                padding: "8px 14px",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Alterar
            </button>
          </div>
        </Card>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {PERFIS.map((op) => (
            <div
              key={op.k}
              onClick={() => {
                setPerfil(op.k);
                setEditPerfil(false);
              }}
              style={{
                background: perfil === op.k ? C.primaryLight : C.white,
                borderRadius: 16,
                padding: "14px 16px",
                cursor: "pointer",
                border: `2px solid ${perfil === op.k ? C.primary : C.border}`,
                display: "flex",
                alignItems: "center",
                gap: 14,
                boxShadow: "0 1px 4px rgba(26,111,168,0.06)",
              }}
            >
              <div style={{ fontSize: 24 }}>{op.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>
                  {op.label}
                </div>
                <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>
                  {op.sub}
                </div>
              </div>
              {perfil === op.k && (
                <CheckCircle2 size={18} color={C.primary} strokeWidth={2} />
              )}
            </div>
          ))}
          <button
            onClick={() => setEditPerfil(false)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              color: C.muted,
              padding: "4px 0",
              textAlign: "left",
            }}
          >
            Cancelar
          </button>
        </div>
      )}
      <Nav screen={SCREEN.PERFIL} go={go} />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// 📁 screens/SobreScreen.jsx
// ─────────────────────────────────────────────────────────────
export const SobreScreen = ({ go }) => (
  <div
    style={{
      fontFamily: "'Segoe UI', sans-serif",
      maxWidth: 420,
      margin: "0 auto",
      minHeight: "100vh",
      background: C.bg,
      padding: "22px 20px 90px",
    }}
  >
    <Hdr title="Sobre nós" back backSc={SCREEN.HOME} go={go} />

    <div
      style={{
        background: `linear-gradient(135deg, ${C.primary}, #0B5FA5)`,
        borderRadius: 18,
        padding: "20px",
        marginBottom: 12,
        color: "#fff",
        display: "flex",
        gap: 14,
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 15,
          background: "rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Brain size={24} color="#fff" strokeWidth={1.7} />
      </div>
      <div>
        <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 4 }}>
          <span style={{ color: "rgba(255,255,255,0.7)" }}>mem</span>oris
        </div>
        <div style={{ fontSize: 12, opacity: 0.85, lineHeight: 1.5 }}>
          Criada por um enfermeiro especializado para apoiar familiares e
          cuidadores em Portugal.
        </div>
      </div>
    </div>

    <Card style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
        <IconBox Icon={Target} color={C.primary} bg={C.primaryLight} />
        <div>
          <div
            style={{
              fontWeight: 800,
              fontSize: 14,
              color: C.text,
              marginBottom: 5,
            }}
          >
            A nossa missão
          </div>
          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.75 }}>
            Disponibilizar informação científica rigorosa e acessível, e
            ferramentas práticas que ajudem cuidadores a prestar um apoio mais
            informado, empático e eficaz.
          </div>
        </div>
      </div>
    </Card>

    <Card style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
        <IconBox Icon={Users} color={C.teal} bg={C.tealLight} />
        <div>
          <div
            style={{
              fontWeight: 800,
              fontSize: 14,
              color: C.text,
              marginBottom: 5,
            }}
          >
            Quem sou
          </div>
          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.75 }}>
            Sou enfermeiro com mais de 10 anos de experiência no cuidado a
            pessoas com demência. Trabalhei na Suíça, onde contactei com
            abordagens especializadas e modelos centrados na pessoa.
            <br />
            <br />A Memoris nasceu do desejo de trazer essa filosofia para
            Portugal.
          </div>
        </div>
      </div>
    </Card>

    <Card>
      <div style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
        <IconBox Icon={Mail} color={C.violet} bg={C.violetLight} />
        <div>
          <div
            style={{
              fontWeight: 800,
              fontSize: 14,
              color: C.text,
              marginBottom: 5,
            }}
          >
            Contacto
          </div>
          <a
            href="mailto:app.memoris@gmail.com"
            style={{
              fontSize: 13,
              color: C.primary,
              lineHeight: 1.75,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            app.memoris@gmail.com
          </a>
        </div>
      </div>
    </Card>

    <Nav screen={SCREEN.SOBRE} go={go} />
  </div>
);
// ─────────────────────────────────────────────────────────────
const FASE2_FEATURES = [
  {
    Icon: UserSearch,
    color: C.primary,
    bg: C.primaryLight,
    badge: "Recrutamento em curso",
    badgeColor: C.primary,
    title: "Diretório de Profissionais",
    desc: "Encontra médicos, psicólogos e assistentes sociais especializados em demência, verificados pela Memoris.",
    detalhes: [
      "Perfis verificados com especialização comprovada",
      "Filtro por localização, tipo de consulta e disponibilidade",
      "Avaliações reais de cuidadores e famílias",
    ],
    eta: "Fase 2",
  },
  {
    Icon: MapPin,
    color: C.teal,
    bg: C.tealLight,
    badge: "Validação em curso",
    badgeColor: C.teal,
    title: "Estruturas de Apoio Especializadas",
    desc: "Diretório de lares, centros de dia e serviços de apoio domiciliário com avaliação de qualidade.",
    detalhes: [
      "Apenas instituições validadas e certificadas",
      "Informação sobre vagas, custos e tipologia de cuidados",
      "Localização e contactos diretos",
    ],
    eta: "Fase 2",
  },
  {
    Icon: Video,
    color: C.violet,
    bg: C.violetLight,
    badge: "Em desenvolvimento",
    badgeColor: C.violet,
    title: "Fala com um Profissional",
    desc: "Aconselhamento especializado por chat ou videochamada, diretamente na Memora.",
    detalhes: [
      "Consultas online com enfermeiros e psicólogos",
      "Agendamento integrado na app",
      "Histórico de conversas e recomendações",
    ],
    eta: "Fase 2",
  },
];

export const ComingSoonScreen = ({ go }) => {
  const [expanded, setExpanded] = useState(null);
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        background: C.bg,
        padding: "22px 20px 90px",
      }}
    >
      <Hdr title="O que aí vem" back backSc={SCREEN.HOME} go={go} />

      {/* Hero banner */}
      <div
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, #0B5FA5 100%)`,
          borderRadius: 22,
          padding: "22px 20px",
          marginBottom: 22,
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 11,
              background: "rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Rocket size={20} color="#fff" strokeWidth={1.8} />
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: 16 }}>
              Memoris — Fase 2
            </div>
            <div
              style={{
                fontSize: 11,
                opacity: 0.75,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Roadmap
            </div>
          </div>
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.75, opacity: 0.92 }}>
          Estamos a construir uma rede de apoio especializado em Portugal. As
          funcionalidades abaixo estão em desenvolvimento e serão lançadas em
          fases — com rigor, verificação e qualidade.
        </div>
      </div>

      {/* Feature cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {FASE2_FEATURES.map((f, i) => (
          <div
            key={i}
            style={{
              background: C.white,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 1px 8px rgba(26,111,168,0.08)",
              border: `1px solid ${C.border}`,
            }}
          >
            {/* Card header */}
            <div style={{ padding: "18px 18px 0" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  marginBottom: 14,
                }}
              >
                {/* Icon + lock overlay */}
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 15,
                      background: f.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0.6,
                    }}
                  >
                    <f.Icon size={22} color={f.color} strokeWidth={1.7} />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: -4,
                      right: -4,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: C.white,
                      border: `1.5px solid ${C.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Lock size={10} color={C.muted} strokeWidth={2.5} />
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 5,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{ fontWeight: 900, fontSize: 15, color: C.text }}
                    >
                      {f.title}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: f.badgeColor,
                      background: f.bg,
                      borderRadius: 20,
                      padding: "2px 10px",
                      display: "inline-block",
                    }}
                  >
                    {f.badge}
                  </span>
                </div>
              </div>
              <p
                style={{
                  margin: "0 0 14px",
                  fontSize: 13,
                  color: C.muted,
                  lineHeight: 1.7,
                }}
              >
                {f.desc}
              </p>
            </div>

            {/* Expandable details */}
            <div style={{ borderTop: `1px solid ${C.border}` }}>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: f.color,
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                <span>
                  {expanded === i
                    ? "Fechar detalhes"
                    : "Ver o que está planeado"}
                </span>
                <ChevronRight
                  size={15}
                  strokeWidth={2.5}
                  style={{
                    transform:
                      expanded === i ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
              {expanded === i && (
                <div
                  style={{
                    padding: "0 18px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 9,
                  }}
                >
                  {f.detalhes.map((d, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                      }}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 6,
                          background: f.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        <CheckCircle2
                          size={11}
                          color={f.color}
                          strokeWidth={2.5}
                        />
                      </div>
                      <span
                        style={{ fontSize: 13, color: C.text, lineHeight: 1.6 }}
                      >
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Interest capture */}
      <div
        style={{
          marginTop: 22,
          background: C.primaryLight,
          borderRadius: 18,
          padding: "18px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <Mail size={16} color={C.primary} strokeWidth={2} />
          <span style={{ fontWeight: 800, fontSize: 14, color: C.primary }}>
            Saber em primeira mão
          </span>
        </div>
        <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.65 }}>
          Subscreve a newsletter da Memoris e recebe um aviso assim que estas
          funcionalidades forem lançadas.
        </div>
        <button
          onClick={() => go(SCREEN.HOME)}
          style={{
            marginTop: 14,
            background: C.primary,
            color: "#fff",
            border: "none",
            borderRadius: 12,
            padding: "11px 20px",
            fontSize: 13,
            fontWeight: 800,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 7,
          }}
        >
          <Mail size={14} strokeWidth={2.2} /> Subscrever newsletter
        </button>
      </div>

      <Nav screen={SCREEN.HOME} go={go} />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// 📁 App.jsx  —  Router + State Manager
// ─────────────────────────────────────────────────────────────
export default function App() {
  // ── Onboarding state
  const [step, setStep] = useState(0);
  const [perfil, setPerfil] = useState(null);

  // ── Navigation state
  const [screen, setScreen] = useState(SCREEN.HOME);

  // ── Detail view state
  const [activeArticle, setActiveArticle] = useState(null);
  const [activeSintoma, setActiveSintoma] = useState(null);
  const [activeTema, setActiveTema] = useState(null);

  // ── Library state
  const [libTab, setLibTab] = useState(TABS.DEMENCIAS);
  const [filterTag, setFilterTag] = useState("Todos");
  const [search, setSearch] = useState("");

  // ── Symptoms state
  const [sintomaSearch, setSintomaSearch] = useState("");

  // ── Shares state
  const [posts, setPosts] = useState(SEED_POSTS);
  const [expandedPost, setExpandedPost] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [replyAutor, setReplyAutor] = useState("");

  // ── Training state
  const [formType, setFormType] = useState(null);
  const [form, setForm] = useState({
    nome: "",
    instituicao: "",
    email: "",
    telefone: "",
    distrito: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // ── Newsletter state
  const [nlEmail, setNlEmail] = useState("");
  const [nlDone, setNlDone] = useState(false);

  // ── Navigation helpers
  const go = (s) => {
    setScreen(s);
    setExpandedPost(null);
  };
  const openArticle = (a) => {
    setActiveArticle(a);
    go(SCREEN.ARTICLE);
  };
  const openSintoma = (s) => {
    setActiveSintoma(s);
    go(SCREEN.SINTOMA_DETAIL);
  };
  const openTema = (t) => {
    setActiveTema(t);
    go(SCREEN.PARTILHAS_TEMA);
  };

  // ── Onboarding gate
  if (step < 3)
    return (
      <OnboardingScreen
        step={step}
        setStep={setStep}
        perfil={perfil}
        setPerfil={setPerfil}
      />
    );

  // ── Screen router
  switch (screen) {
    case SCREEN.HOME:
      return (
        <HomeScreen
          perfil={perfil}
          go={go}
          openArticle={openArticle}
          nlEmail={nlEmail}
          setNlEmail={setNlEmail}
          nlDone={nlDone}
          setNlDone={setNlDone}
        />
      );

    case SCREEN.BIBLIOTECA:
      return (
        <LibraryScreen
          go={go}
          openArticle={openArticle}
          libTab={libTab}
          setLibTab={setLibTab}
          filterTag={filterTag}
          setFilterTag={setFilterTag}
          search={search}
          setSearch={setSearch}
        />
      );

    case SCREEN.ARTICLE:
      return activeArticle ? (
        <ArticleScreen go={go} article={activeArticle} />
      ) : null;

    case SCREEN.SINTOMAS:
      return (
        <SymptomsScreen
          go={go}
          openSintoma={openSintoma}
          sintomaSearch={sintomaSearch}
          setSintomaSearch={setSintomaSearch}
        />
      );

    case SCREEN.SINTOMA_DETAIL:
      return activeSintoma ? (
        <SymptomsDetailScreen go={go} sintoma={activeSintoma} />
      ) : null;

    case SCREEN.PARTILHAS:
      return <SharesScreen go={go} posts={posts} openTema={openTema} />;

    case SCREEN.PARTILHAS_TEMA:
      return activeTema ? (
        <SharesThemeScreen
          go={go}
          tema={activeTema}
          posts={posts}
          setPosts={setPosts}
          expandedPost={expandedPost}
          setExpandedPost={setExpandedPost}
          replyText={replyText}
          setReplyText={setReplyText}
          replyAutor={replyAutor}
          setReplyAutor={setReplyAutor}
        />
      ) : null;

    case SCREEN.DICAS:
      return <TipsScreen go={go} />;

    case SCREEN.FORMACAO:
      return (
        <TrainingScreen
          go={go}
          formType={formType}
          setFormType={setFormType}
          form={form}
          setForm={setForm}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
      );

    case SCREEN.APOIO:
      return <SupportScreen go={go} />;

    case SCREEN.PERFIL:
      return <ProfileScreen go={go} perfil={perfil} setPerfil={setPerfil} />;

    case SCREEN.SOBRE:
      return <SobreScreen go={go} />;

    case SCREEN.FASE2:
      return <ComingSoonScreen go={go} />;

    default:
      return null;
  }
}
