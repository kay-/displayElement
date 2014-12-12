visibl
======
To make the element appear at a certain point of viewport

## Description

`visibl.set('targetId', 'targetClass', position, state);`

* targetId (string): element to put additional class
* targetClass (string): additional class
* position: position to display (fraction -> %, integer -> pixcel from top)
* state: (boolean): whether to keep state after displaying

`visibl.chk();`

* check the position of viewport when window size is changed
