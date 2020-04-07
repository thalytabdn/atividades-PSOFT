import socket
from threading import Thread

def atende_cliente(client, num_cliente):
    print('atendendo cliente...')
    client.send('Servidor de eco (cliente {}).\n'.format(num_cliente).encode('utf-8'))
    while True:
        mensagem = client.recv(1024).decode('utf-8')
        if not mensagem: break
        resposta = "> " + mensagem
        print(mensagem.rstrip("\n"))
        client.send(resposta.encode('utf-8'))
        if mensagem.strip() == "FIM": break
    client.close()
    print("Cliente desconectou")


def main():
    listen_socket = socket.socket()

    host = "localhost"
    porta = 9090
    listen_socket.bind((host, porta))
    listen_socket.listen()

    clientes = 0
    while True:
        print('Aguardando conexão na porta {}'.format(porta))
        cliente, endereco = listen_socket.accept()
        clientes += 1
        print('Conexão estabelecida de {}:{}'.format(endereco[0], endereco[1]))
        Thread(target=atende_cliente, args=(cliente, clientes)).start()


    listen_socket.close()

main()
