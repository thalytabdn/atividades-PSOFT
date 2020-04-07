# coding: utf-8

import socket

socket = socket.socket() #crição de um novo socket

host = 'localhost'
porta = 9090
socket.bind((host, porta)) #direciona o socket para o host e a porta
socket.listen() #começa a escutar por conexões TCP

clientes = 0
while True:
    print('Aguardando conexão na porta {}...'.format(porta))
    cliente, endereco = socket.accept() #Aceita a conexão, cliente é um novo socket e endereco é o endereço do Cliente
    clientes += 1
    print('Conexão estabelecida de {}:{}'.format(endereco[0], endereco[1]))

    cliente.send('Servidor de eco (cliente {}).\n'.format(clientes).encode('utf-8'))
    while True:
        mensagem = cliente.recv(1024).decode('utf-8') #armazena os dados de entrada em dados(buffer), de tamanho 1024 bytes
        if not mensagem: break
        resposta = "> " + mensagem
        cliente.send(resposta.encode('utf-8'))
        if mensagem.strip() == "FIM":
            break
    cliente.close()
    print('Cliente desconectou')

socket.close()
