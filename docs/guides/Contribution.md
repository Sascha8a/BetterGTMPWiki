<meta author="Sascha" />

# Contributors guide
This wiki is completely open source and avaliable on github. Only with your help we are able to maintain a correct and updated version of all the functions in here. Please contribute! Suggestions are always appreciated and should be sent to sascha8a@localhost.systems
* Finish documentation for incomplete functions.
* Add examples to functions and events.
* Review and verify pages that need checking.
* Write tutorials to help new people.

## Todos
There are a lot of //TODOs scattered all around the wiki, just look around and you'll notice. We invite you to contribute and fix every single one.

!> **TODO: ** This is an example!

## Diagramms
We use the [Mermaid Framework](https://github.com/knsv/mermaid) for any diagrams.
```mermaid
gantt
  title A Gantt Diagram
  dateFormat  YYYY-MM-DD
  section Section
  A task           :a1, 2014-01-01, 30d
  Another task     :after a1  , 20d
  section Another
  Task in sec      :2014-01-12  , 12d
  another task      : 24d
```
```mermaid
classDiagram
  Class01 <|-- AveryLongClass : Cool
  Class03 *-- Class04
  Class05 o-- Class06
  Class07 .. Class08
  Class09 --> C2 : Where am i?
  Class09 --* C3
  Class09 --|> Class07
  Class07 : equals()
  Class07 : Object[] elementData
  Class01 : size()
  Class01 : int chimp
  Class01 : int gorilla
  Class08 <--> C2: Cool label
```