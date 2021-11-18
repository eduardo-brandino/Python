'''Faça um programa que leia três valores e apresente o maior dos três valores
lidos seguido da mensagem “eh o maior”. Utilize a fórmula:
MaiorAB= \frac{\left(a+b+abs\left(a-b\right)\right)}{2}


Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b).
Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem
 "eh o maior".'''

x = input().split()
a, b, c = x

maiorAB = (int(a) + int(b) + abs(int(a) - int(b)))/2
m = (int(c) + (maiorAB) + abs(int(c) - (maiorAB)))/2
m = int(m)
print('{} eh o maior'.format(m))
