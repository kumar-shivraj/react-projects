<h1 style="text-align:center; color:mediumseagreen; font-weight:bold;">Conway's Game of Life</h1>

The **<span style="color:darkblue;">Game of Life</span>** is a **<span style="color:darkblue;">cellular automaton</span>** devised by the British mathematician **<span style="color:darkorange;">John Horton Conway</span>**. The "game" is a **<span style="color:darkblue;">zero-player game</span>**, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

The **<span style="color:darkblue;">universe</span>** of the Game of Life is an **<span style="color:darkblue;">infinite two-dimensional orthogonal grid</span>** of square cells, each of which is in one of two possible states, **<span style="color:darkgreen;">live</span>** or **<span style="color:darkred;">dead</span>**. Every cell interacts with its **<span style="color:darkblue;">8 neighbours</span>**, which are the cells that are directly **<span style="color:darkblue;">horizontally</span>**, **<span style="color:darkblue;">vertically</span>**, or **<span style="color:darkblue;">diagonally adjacent</span>** to it. At each step in time, the following transitions occur:

### 1. Neighbours

Neighbours will be considered in all **<span style="color:darkblue;">8 directions</span>**: left, right, up, down, up left corner, up right corner, down left corner, down right corner.

### 2. Underpopulation

Any **<span style="color:darkgreen;">live cell</span>** with fewer than **<span style="color:darkblue;">2 live neighbours</span>** dies on to the next generation as if by **<span style="color:darkred;">underpopulation</span>**.

### 3. Survival

Any **<span style="color:darkgreen;">live cell</span>** with **<span style="color:darkblue;">2 or 3 live neighbours</span>** lives on to the next generation.

### 4. Overpopulation

Any **<span style="color:darkgreen;">live cell</span>** with more than **<span style="color:darkblue;">3 live neighbours</span>** dies as if by **<span style="color:darkred;">overpopulation</span>**.

### 5. Reproduction

Any **<span style="color:darkred;">dead cell</span>** with exactly **<span style="color:darkblue;">3 live neighbours</span>** becomes a **<span style="color:darkgreen;">live cell</span>** as if by **<span style="color:darkblue;">reproduction</span>**.

The **<span style="color:darkblue;">initial pattern</span>** constitutes the **<span style="color:darkblue;">seed</span>** of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed&#x2014;**<span style="color:darkblue;">births</span>** and **<span style="color:darkblue;">deaths</span>** occur simultaneously, and the discrete moment at which this happens is sometimes called a **<span style="color:darkblue;">"tick"</span>**. The rules continue to be applied iteratively for subsequent generations.
