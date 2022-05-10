# Etch-a-Sketch

This is a digital version of the classic etch-a-sketch toy. It is composed of
a grid of squares that gradually darken as you hover your mouse over them, allowing the user to draw the perfect black-and-white image. 

Features:
- 10 different shades of black for each cell in the grid, allowing for cool
shading effects
- Passing through a cell will incrementally darken it
- Customizable grid density, all the way up to a 100x100 grid for more precise
pixel art

# Implementation

The project uses CSS Flexbox along with JavaScript to organize and generate the grid. The darkening feature proved the most troublesome as it required some creative thinking and research to figure out how to extract individual R,G,B,A values from an RGBA color string so that I can incrementally increase the Alpha value for each passthrough of the cursor over a cell.
