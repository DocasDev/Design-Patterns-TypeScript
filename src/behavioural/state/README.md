# State - Behavioural (Comportamental)

## Intenção

*Permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado sua classe*

---

## Sobre o State

O State é um padrão de projeto que permite que o estado de um objeto em contexto também possa ser representado como um objeto. Isso permite usarmos polimorfismo ao invés de condicionais para mudar o comportamento do objeto contexto baseando-se no seu estado atual.

---

## Estrutura

Veja a pasta diagrams.

## Aplicabilidade

Use o State quando:

- o seu objeto pode se comportar de maneira diferente dependendo do seu estado atual
- você quer evitar o uso de condicionais que alteram o comportamento da classe de acordo com valores dos seus campos

## Implementação

Veja o código dessa mesma pasta.

## Consequências

O que é bom ou ruim no State:

**Bom:**
- desacopla a lógica de um estado da classe de contexto
- permite a criação de novos estados apenas adicionando novas classes
- elimina condicionais complexas da classe de contexto

**Ruim:**
- se você tem apenas poucas condicionais simples, aplicar este padrão pode deixar o seu código mais complexo do que o necessário