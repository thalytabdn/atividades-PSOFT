#coding: utf-8

import socket
from threading import Thread

lista_clientes = []

def atende_cliente(cliente, num_cliente):
    cliente.send("Servidor de Chat (cliente {})\n".format(num_cliente).encode("utf-8"))
    while True:
        mensagem = cliente.recv(1024).decode("utf-8")
        if not mensagem: break
        resposta = "IP: {}, PORTA: {}\n   >  ".format(cliente.getpeername()[0],cliente.getpeername()[1]) + mensagem
        print("IP: localhost, PORTA: 9090\n   > " + mensagem.rstrip("\n"))

        for i in range(len(lista_clientes)):
            lista_clientes[i].send(resposta.encode("utf-8"))

        if mensagem.strip() == "BYE": break

    for i in range(len(lista_clientes)):
        mensagem_desconectado = "cliente ({}:{}) desconectou\n".format(cliente.getpeername()[0],cliente.getpeername()[1])
        lista_clientes[i].send(mensagem_desconectado.encode("utf-8"))

    print(mensagem_desconectado)
    cliente.close()
    lista_clientes.pop()

def main():
    listen_socket = socket.socket()

    host = "localhost"
    porta = 9090
    listen_socket.bind((host, porta))
    listen_socket.listen()

    print('Aguardando conexão na porta {}\n'.format(porta))

    clientes = 0
    while True:
        cliente, endereco = listen_socket.accept()
        lista_clientes.append(cliente)
        clientes += 1
        print('Conexão estabelecida de {}:{}'.format(endereco[0], endereco[1]))
        Thread(target=atende_cliente, args=(cliente, clientes)).start()


    listen_socket.close()

main()
