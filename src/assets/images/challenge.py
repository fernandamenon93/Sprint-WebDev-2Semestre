import webbrowser


# Variaveis do usuario atual
usuario_logado = ""
posicao_usuario_logado = 0

# Variaveis globais
pontos = []
poderes = []
usuarios = ["gabriel", "fernanda", "eduardo", "luiza", "leonardo"]
senhas = ["fiap2024", "fefe2024!", "senha123$", "luizaa222", "leo2024!$"]


# ----- Funcoes de Escolha ----- #
def mapear_escolha_menu(escolha):
    if escolha == 1:
        adquirir_pontos()
    elif escolha == 2:
        comprar_poder()
    elif escolha == 3:
        utilizar_poder()
    elif escolha == 4:
        mostrar_estatisticas_globais()
    elif escolha == 5:
        return


def receber_escolha(opcoes):
    while True:
        escolha = input("-> ")
        if escolha.isnumeric() and int(escolha) in range(1, len(opcoes) + 1):
            break
        else:
            print("Valor incorreto. Tente novamente!")
    return int(escolha)
# ------------------------------ #


# ----- Funcoes de controle de acesso ----- #
def logar_usuario():
    print("\nRealize o Login")
    while True:
        usuario_logado = input("Usuário: ")
        if usuario_logado in usuarios:
            break
        print("Usuário Invalido! Tente Novamente...")
    posicao_usuario_logado = usuarios.index(usuario_logado)

    tentativas = 0
    while True:
        senha = input("Senha: ")
        if senha == senhas[posicao_usuario_logado]:
            break

        tentativas += 1
        if tentativas == 3:
            print("Numero de tentativas acima do permitido! Encerrando programa!")
            exit()
        print(f"Senha invalida para o usuário selecionado! Tente Novamente... {tentativas}/3 tentativas")
# ----------------------------------------- #


# ----- Funcoes de controle de pontos ----- #
def adquirir_pontos():
    opcoes = ["Chamar amigos (100 Pontos)", "Assistir a Formula E (500 Pontos)"]
    for posicao, opcao in enumerate(opcoes):
        print(f"{posicao + 1}. {opcao}")

    escolha = receber_escolha(opcoes)
    if escolha == 1:
        input("Email para enviar o convite: ")
        print("Obrigado por convidar um amigo!")
        pontos[posicao_usuario_logado] += 100
    elif escolha == 2:
        webbrowser.open("https://www.band.uol.com.br/esportes/automobilismo/formula-e")
        print("Obrigado assistir a Formula E!")
        pontos[posicao_usuario_logado] += 500


def alterar_pontos(delta):
    if delta + pontos[posicao_usuario_logado] < 0:
        return False
    pontos[posicao_usuario_logado] += delta
    return True


def comprar_poder():
    opcoes = ["Attack Mode (500 Pontos)", "Fan Boost (800 Pontos)"]
    for posicao, opcao in enumerate(opcoes):
        print(f"{posicao + 1}. {opcao}")

    escolha = receber_escolha(opcoes)
    poder = opcoes[escolha - 1]
    if poder in poderes[posicao_usuario_logado]:
        print(f"Voce ja possui o poder \"{poder}\"")
        return

    if escolha == 1:
        permitido = alterar_pontos(-500)
        if not permitido:
            print("Pontos Insuficientes")
            return

    elif escolha == 2:
        permitido = alterar_pontos(-800)
        if not permitido:
            print("Pontos Insuficientes")
            return

    print(f"\"{poder}\" Comprado!")
    poderes[posicao_usuario_logado].append(poder)


def utilizar_poder():
    print("\n--- Poderes Disponiveis ---")
    for posicao, opcao in enumerate(poderes[posicao_usuario_logado]):
        print(f"{posicao + 1}. {opcao}")

    escolha = receber_escolha(poderes[posicao_usuario_logado])
    poder_usado = poderes[posicao_usuario_logado].pop(escolha - 1)
    print(f"\"{poder_usado}\" Usado! Parabens!")
# ----------------------------------------- #


# ----- Funcoes Visuais ----- #
def mostrar_cabecalho():
    print("=" * 25)
    print("Bem vindo ao VV-Points")
    print("=" * 25)


def mostrar_estatisticas():
    print(f"\nSeus pontos: ©{pontos[posicao_usuario_logado]}")
    print(f"Seus poderes: {' | '.join(poderes[posicao_usuario_logado])}")


def mostrar_estatisticas_globais():
    for posicao, usuario in enumerate(usuarios):
        print(f"\nEstatisticas para o usuario \"{usuario}\"")
        print(f"Pontos: ©{pontos[posicao]}")
        print(f"Poderes: {' | '.join(poderes[posicao])}")


def mostrar_menu():
    print("Oque você deseja fazer?\n")

    opcoes = ["Adquirir pontos", "Comprar Poderes", "Utilizar poderes", "Mostrar Estatisticas Globais", "Sair da Conta"]
    for posicao, opcao in enumerate(opcoes):
        print(f"{posicao + 1}. {opcao}")

    escolha = receber_escolha(opcoes)
    return escolha
# --------------------------- #


# ----- Funcao Principal ----- #
def main():
    # Inicializar banco de dados dinamicamente pelo numero de usuarios
    for i in range(len(usuarios)):
        pontos.append(0.0)
        poderes.append([])

    mostrar_cabecalho()
    while True:
        logar_usuario()

        escolha = 0
        while escolha != 5:
            mostrar_estatisticas()
            escolha = mostrar_menu()
            mapear_escolha_menu(escolha)
# ---------------------------- #


# Iniciar Funcao Principal
main()
