# Zombie Apocalypse Simulator

### Pre-requisites
- Node
  `brew install node`

### Installation and Execution of Application
- Install dependencies
  `npm install`

- Run application
  `npm start`

- Run tests
  `npm test` or `npm run coverage`

### Description
The application is a simulation of a n x n grid where by zombies move in a specific pattern infecting all creatures that ome across its path. Zombies can move through the edge of the grid, appearing on directly on the opposite side.

### Design
The application has been developed into a few components and layers. Application has been mainly separated into the configuration of the simulator (i.e user input - CLI implementation) and execution of the zombie apocalypse simulation, this allows the CLI implementation to be replaced with other implementations to retrieve user input. The simulator portion is separated into models representing the data (i.e coordinates, dimensions, etc.) and services to further distinguish the business logic and data model classes from each other allowing for future extensibility. A controller currently acts as the main entry point and directs data flow between the CLI and simulator services. Also, have defined a variety of interfaces to represent contracts that concrete implementations must abide by and to represent several types. This makes the codebase more type-safe and open for extension.

#### Assumptions
- Can have multiple creatures located at the same position (i.e. duplicates exist)

### Example Simulation
  ```
  ? Enter dimensions of grid: 2
  ? Enter intial coordinate of zombie: 0,0
  ? Enter coordinates of creatures: 0,1 1,1
  ? Enter moves: D
  INFO: 22-06-22 21:00:00: zombie 0 moved to (0,1)
  INFO: 22-06-22 21:00:00: zombie 0 infected creature/s at (0,1)
  INFO: 22-06-22 21:00:00: zombie 1 moved to (0,0)
  INFO: 22-06-22 21:00:00: 
      zombies` coordinates: 
      (0,1) (0,0)
      creatures` coordinates: 
      (1,1)
  ```
