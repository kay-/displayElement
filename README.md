displayElement
======
To make the element appear at a certain point of viewport

## Description

`display.setOne('targetId', 'targetClass', position, continuity);`

* targetId (string): used for the position where to display element. It appears when this element comes to a certain point of viewport
* targetClass (string): additional class
* position: position to display (fraction means %, integer does pixcel from top)
* continuity: (true / false): whether to keep state after displaying (true continues the state and false does going back to the original state)

`display.setMulti('targetId', 'targetClass1', 'targetClass2', position, continuity);`

* targetId (string): used for the position where to display element. It appears when this element comes to a certain point of viewport
* targetClass1 (string): target element for additional class to be put
* targetClass2 (string): additional class
* position: position to display (fraction means %, integer does pixcel from top)
* continuity: (true / false): whether to keep state after displaying (true continues the state and false does going back to the original state)

`display.chk();`

* check the position of viewport when window size is changed
