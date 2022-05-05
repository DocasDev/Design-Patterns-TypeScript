# Strategy - Behavioural (Comportamental)

## Intenção

*Definir uma família de algoritmos, encapsular cada um deles e fazê-los intercambiáveis. O strategy permite que o algoritmo varie independentemente dos clientes que o utilizam.*

---

## Sobre o Strategy

O Strategy é um padrão de projeto que visa separar o conceito de algoritmo da regra de negócio para permitir que vários algoritmos possam ser implementados sem a necessidade de alterar a regra de negócio ou outros algoritmos que já existam no sistema.

Veja um exemplo de um problema e a solução do strategy.

### Problema

Temos um jogo em que para cada evento de bônus de experiência deve ser aplicado uma bonificação diferente para cada monstro derrotado. Cada evento deve ter suas próprias estratégias de bonificação.

---

## Estrutura

Veja a pasta diagrams.

## Aplicabilidade

Use o Strategy quando:

- você tiver variantes de um mesmo algoritmo e precisa trocar esses algoritmos em tempo de execução;
- você precisar isolar a regra de negócio do algoritmo que deve ser aplicado (aplicando o princípio da responsabilidade única)
- você perceber que está usando condicionais apenas para trocar o resultado final de um algoritmo

## Implementação

Veja o código dessa mesma pasta.

## Consequências

O que é bom ou ruim no Strategy:

**Bom:**
- Troca herança por composição
- Separa a regra de negócio de algoritmos complexos
- Aplica os princípios do aberto/fechado e da responsabilidade única

**Ruim:**
- Pode ser complexo criar toda uma hierarquia de classes para aplicar novos algoritmos
- Você pode obter o mesmo resultado com funções caso a linguagem de programação permitir
- O código cliente precisa conhecer as estratégias que vai usar