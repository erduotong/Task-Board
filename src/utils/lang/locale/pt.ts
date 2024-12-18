const pt = {
  1: "Salvar",
  2: "Fechar",
  3: "Arquivo",
  4: "Adicionar subtarefa",
  5: "Janela do cofre de digitalização",
  6: "Em geral",
  7: "Nenhuma tarefa disponível",
  8: "Editar tarefa",
  9: "Excluir tarefa",
  10: "Tipo de coluna",
  11: "Sem data",
  12: "Datado",
  13: "Marcado",
  14: "Não marcado",
  15: "Concluído",
  16: "Outras tags",
  17: "Nome da coluna",
  18: "Enviar",
  19: "Cancelar",
  20: "Insira o nome da coluna",
  21: "Editar tarefa",
  22: "Adicionar nova tarefa",
  23: "Título da tarefa",
  24: "Sub tarefas",
  25: "Pré-visualização",
  26: "Editor",
  27: "Abrir arquivo",
  28: "Edite ou adicione uma descrição para a tarefa ou adicione mais subtarefas.",
  29: "Conteúdo do corpo",
  30: "Hora de início",
  31: "Fim dos tempos",
  32: "Data de vencimento",
  33: "Prioridade",
  34: "Marcação",
  35: "Nenhuma placa selecionada para exclusão.",
  36: "Configurações globais do plugin",
  37: "quadro",
  38: "Nome do conselho",
  39: "Nome do quadro que aparecerá como uma aba no cabeçalho da aba dentro do plugin.",
  40: "Mostrar tags em colunas do tipo 'tagged'",
  41: "Só funciona para colunas do tipo 'tagged'. Se você não quiser ver a tag no cartão para o tipo de coluna.",
  42: "Etiquetas de filtro",
  43: "Insira as tags, separadas por vírgula, que você quer ver neste quadro. Somente tarefas com essas tags serão mostradas.",
  44: "Polaridade do filtro",
  45: "Ative ou desative as tags de filtro acima dentro dos quadros.",
  46: "Ativar",
  47: "Desativar",
  48: "Mostrar tags filtradas",
  49: "Se deve ou não mostrar as tags filtradas mencionadas acima no 'cartão de tarefas'.",
  50: "Colunas",
  51: "Insira a etiqueta",
  52: "Itens máximos",
  53: "De",
  54: "Para",
  55: "Excluir coluna",
  56: "Adicionar coluna",
  57: "Apagar este quadro",
  58: "Configurações globais",
  59: "Adicionar quadro",
  60: "Confirmar exclusão",
  61: "Tem certeza de que deseja excluir esta tarefa?",
  62: "Sim",
  63: "Não",
  64: "Digitalização do cofre concluída.",
  65: "Tarefas de digitalização do cofre",
  66: "Execute este recurso somente se suas tarefas não tiverem sido detectadas/verificadas corretamente ou se o quadro estiver agindo de forma estranha.",
  67: "Você não precisa executar esse recurso com frequência, o plugin detectará automaticamente tarefas recém-adicionadas/editadas.",
  68: "OBSERVAÇÃO: verifique primeiro seus 'filtros para verificação' nas configurações do plugin, se estiver verificando para detectar tarefas não detectadas.",
  69: "Correr",
  70: "Ocultar tarefas coletadas",
  71: "Mostrar tarefas coletadas",
  72: "Falha ao carregar as configurações.",
  73: "Leia a documentação para fazer um uso eficiente deste plugin:",
  74: "Documentação do quadro de tarefas",
  75: "Filtros para digitalização",
  76: "Apenas escaneie isto",
  77: "Não escaneie isso",
  78: "Desabilitar",
  79: "Interface do usuário do quadro",
  80: "Mostrar cabeçalho do cartão de tarefas",
  81: "Habilite isso para ver o cabeçalho no cartão de tarefas",
  82: "Mostrar rodapé do cartão de tarefas",
  83: "Habilite isso para ver o rodapé no cartão de tarefas",
  84: "Largura de cada coluna",
  85: "Insira o valor de largura para cada coluna. O valor padrão é 273px",
  86: "Mostrar barra de rolagem da coluna",
  87: "Habilite para ver uma barra de rolagem para cada coluna. Isso reduzirá a largura dos 'cartões de tarefa'.",
  88: "Cores das etiquetas",
  89: "Excluir",
  90: "Adicionar cor de etiqueta",
  91: "Nome da etiqueta",
  92: "Automação",
  93: "Escaneamento em tempo real",
  94: "Depois de perder o foco do arquivo editado, a tarefa será imediatamente atualizada no painel de tarefas.\nDesabilitar esta configuração fará a varredura dos arquivos modificados após algum tempo.",
  95: "Adicionar data de vencimento automaticamente às tarefas",
  96: "Quando ativado, se você adicionar uma tarefa usando a janela pop-up 'Adicionar nova tarefa', a data de hoje será adicionada como data de vencimento, caso nenhuma data seja inserida.",
  97: "Verificação automática do cofre na inicialização do Obsidian",
  98: "Use este recurso somente se você editar os arquivos do vault fora do Obsidian. Normalmente, todas as suas tarefas recém-adicionadas/editadas serão detectadas automaticamente.",
  99: "Se o seu cofre contiver muitos arquivos com dados enormes, isso pode afetar o tempo de inicialização do Obsidian.",
  100: "Plugins compatíveis",
  101: "compatibilidade de plugins",
  102: "Se você instalou o 'day planner plugin', habilite isso para ver o horário no início do título da tarefa, em vez de nos metadados. Após habilitar esse recurso, o horário será exibido de acordo com o day planner plugin dentro dos arquivos Markdown, mas no cartão de tarefa, o horário será exibido no rodapé como de costume.",
  103: "Quando habilitado, se você adicionar uma tarefa em um arquivo de nota diária, que tem um nome de arquivo no formato 'aaaa-MM-DD'. Então essa data será considerada como a data de vencimento da tarefa.",
  104: "Formato de data de vencimento",
  105: "Insira o formato da data que você está usando para nomear seus arquivos daily-nots. Use os formatos 'aaaa-MM-DD' ou 'DD-MM-aaaa'.",
  106: "Formatos",
  107: "Sua tarefa será semelhante à que está nas suas anotações",
  108: "Formatos de plugin suportados",
  109: "Diferentes plugins têm formatos diferentes para dar os valores 'due' e 'completion' para a tarefa. Selecione um dos valores e veja o formato acima, se for compatível com sua configuração atual.",
  110: "Padrão",
  111: "Padrão de data e hora de conclusão da tarefa",
  112: "Insira o padrão de data-hora que você gostaria de ver para o valor de conclusão. Por exemplo, aaaa-MM-dd/HH:mm:ss",
  113: "Primeiro dia da semana",
  114: "Defina o primeiro dia da semana",
  115: "Domingo",
  116: "Segunda-feira",
  117: "Terça-feira",
  118: "Quarta-feira",
  119: "Quinta-feira",
  120: "Sexta-feira",
  121: "Sábado",
  122: "Conclusão da tarefa no horário local",
  123: "Se a data e hora de conclusão da tarefa devem ser exibidas no horário local",
  124: "Mostrar deslocamento UTC para conclusão da tarefa",
  125: "Se deve exibir o deslocamento UTC para os tempos de conclusão das tarefas",
  126: "Se você gosta deste plugin, considere apoiar meu trabalho fazendo uma pequena doação para melhorar continuamente esta ideia!",
  127: "Linguagem do plugin",
  128: "Selecione o idioma da UI do plugin. Para contribuir para melhorar o idioma atual ou adicionar seu próprio idioma nativo, consulte os documentos.",
  129: "Tem certeza de que deseja excluir este quadro?\nVocê pode criá-lo novamente facilmente se lembrar da configuração.",
  130: "Quadro de tarefas",
  131: "Adicionar nova tarefa no arquivo atual",
  132: "Quadro de tarefas aberto",
  133: "Abrir quadro de tarefas em nova janela",
  134: "Atualizar tarefas deste arquivo",
  135: "Adicionar arquivo no filtro de verificação",
  136: "Adicionar arquivo no filtro de verificação",
  137: "Adicionar pasta no filtro de verificação",
  138: "Adicionar pasta no filtro de verificação",
  139: "Filtros de placa",
  140: "Arquivos",
  141: "Pastas",
  142: "Etiquetas",
  143: "Plug-in",
  144: "Nativo",
  145: "Botão de configuração da placa",
  146: "Botão de atualização do quadro",
  147: "Nenhum editor ativo está aberto. Coloque seu cursor dentro do editor onde você quer adicionar tarefa e execute este comando.",
  148: "Pressione Enter após digitar a tag",
  149: "Anotações diárias",
  151: "Título da tarefa",
  152: "Esta seção contém as configurações que ajudarão você a aplicar filtros e lhe darão controle para escanear apenas arquivos selecionados ou remover certos arquivos da varredura. Os filtros são altamente recomendados se você tiver muitos arquivos que nunca conterão nenhuma tarefa.",
  153: "Insira os nomes dos arquivos, pasta ou tag da tarefa para controlar quais arquivos você quer que o plugin escaneie para extrair tarefas deles. É altamente recomendado ler a documentação se você estiver usando todos os três filtros ao mesmo tempo.",
  154: "Este plugin foi criado por",
  155: "Esta seção contém as configurações para controlar a aparência do tabuleiro. Essas configurações serão aplicadas a todos os tabuleiros.",
  156: "Defina cores personalizadas para suas tags específicas.",
  157: "Esta seção contém as configurações para automatizar determinadas tarefas para um fluxo de trabalho eficiente, para que você possa dedicar mais tempo ao seu projeto do que ao gerenciamento de tarefas.",
  158: "Observação",
  159: "Esta seção contém as configurações para ajustar os formatos que você usa para criar tarefas.",
  160: "NENHUM",
  161: "Mais alto",
  162: "Alto",
  163: "Médio",
  164: "Baixo",
  165: "Mais baixo",
  166: "Digite aqui...",
  167: "Excluir Sub-Tarefa",
  168: "Segure o botão CTRL para abrir em uma nova janela",
  169: "Nome do arquivo",
  170: "Seus quadros",
  171: "Arquivo não encontrado no caminho:",
  172: "Modo de botão de edição",
  173: "Selecione como a nota pai deve abrir. Clique duas vezes no cartão para abrir a nota.",
  174: "Use o recurso de edição da janela de tarefas",
  175: "Abrir nota em nova aba",
  176: "Nota aberta na divisão direita",
  177: "Abrir nota em nova janela",
  178: "Abrir nota em hover-preview",
};
export default pt;